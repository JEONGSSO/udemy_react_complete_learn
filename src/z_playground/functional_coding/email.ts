import { EmailMessage, Subscriber, CouponRank, Coupon } from './types';
import { subscribers, getSubCouponRank } from './subscriber';
import { coupons, selectCouponsByRank } from './coupons';

const curriedSelectCouponsByRank = selectCouponsByRank(coupons);

const emailForSubscriber = (
  subscriber: Subscriber,
  goods: string[],
  bests: string[]
) => {
  const subscriberRank = getSubCouponRank(subscriber);

  const emailMessage: EmailMessage = {
    from: 'eventer@naver.com',
    to: subscriber.email,
    subject: `your rank is ${subscriberRank}`,
    body:
      subscriberRank === CouponRank.good
        ? `${CouponRank.good} is code ${goods.join(', ')}`
        : `${CouponRank.best} is code ${bests.join(', ')}`,
  };

  return emailMessage;
};

// const testEmailForSubscriber = emailForSubscriber(
//   {
//     email: 'aaa@naver.com',
//     reciveCount: 5,
//   },
//   curriedSelectCouponsByRank(CouponRank.good),
//   curriedSelectCouponsByRank(CouponRank.best)
// )

const emailsForSubscribers = (
  subscribers: Subscriber[],
  goods: string[],
  bests: string[]
) =>
  subscribers.map((subscriber) => emailForSubscriber(subscriber, goods, bests));

// const testEmailsForSubscribers = emailsForSubscribers(
//   subscribers,
//   curriedSelectCouponsByRank(CouponRank.good),
//   curriedSelectCouponsByRank(CouponRank.best)
// );

// console.log('testEmailsForSubscribers', testEmailsForSubscribers);

// 액션
const fetchCouponsFromDB = (): Coupon[] => coupons;
const fetchSubscribersFromDB = (): Subscriber[] => subscribers;

const sandToEmail = async () => {
  // 부수효과
  const coupons = await fetchCouponsFromDB();
  if (!coupons?.length) throw Error('fetch coupons error');

  const curriedSelectCouponsByRank = selectCouponsByRank(coupons);
  if (!curriedSelectCouponsByRank)
    throw Error('curriedSelectCouponsByRank error');

  // 부수효과
  const subscribers = fetchSubscribersFromDB();
  const goodCoupons = curriedSelectCouponsByRank(CouponRank.good);
  const bestCoupons = curriedSelectCouponsByRank(CouponRank.best);
  const emailInfos = emailsForSubscribers(
    subscribers,
    goodCoupons,
    bestCoupons
  );

  emailInfos.forEach(async (emailInfo) => {
    try {
      await emailSystem.send(emailInfo);
    } catch (error) {
      console.error('emailSystem.send Error', error);
    }
  });
};

const emailSystem = {
  send: (email: EmailMessage) => {
    console.log('emailSystem send ->', email);
  },
};

// sandToEmail();

// Q. 왜 모든 이메일을 미리 준비하는가? 비효율적일것 같다.

// A. 실행하기 전까지는 아무도 모르기 때문에 미리 최적화를 하는 것은 좋지 않다.
//    하지만 확장성에 대해서는 미리 고려하는게 좋을것 같으므로 계산이 아닌 액션을 변경해보자
//    fetchSubscribersFromDB 함수를 수정해 페이징을 적용하여 효율적으로 가져오도록 하자

const refactorSubscribersFromDB = (page: number, step: number): Subscriber[] =>
  subscribers.slice(page * step, page * step + step);

const refactorSandToEmail = async () => {
  // 부수효과
  let page = 0;
  const step = 2;
  const coupons = await fetchCouponsFromDB();
  if (!coupons?.length) throw Error('fetch coupons error');

  const curriedSelectCouponsByRank = selectCouponsByRank(coupons);
  if (!curriedSelectCouponsByRank)
    throw Error('curriedSelectCouponsByRank error');
  const goodCoupons = curriedSelectCouponsByRank(CouponRank.good);
  const bestCoupons = curriedSelectCouponsByRank(CouponRank.best);

  // 부수효과
  let fetchedSubscribers = refactorSubscribersFromDB(page, step);

  while (fetchedSubscribers.length > 0) {
    const emailInfos = emailsForSubscribers(
      fetchedSubscribers,
      goodCoupons,
      bestCoupons
    );

    emailInfos.forEach(async (emailInfo) => {
      try {
        await emailSystem.send(emailInfo);
      } catch (error) {
        console.error('emailSystem.send Error', error);
      }
    });
    fetchedSubscribers = refactorSubscribersFromDB(++page, step);
  }
};

refactorSandToEmail();
