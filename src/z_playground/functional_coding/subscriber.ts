import { CouponRank, Subscriber } from './types';

// 데이터
export const subscribers: Subscriber[] = [
  {
    email: 'aaa@naver.com',
    reciveCount: 5,
  },
  {
    email: 'bbb@naver.com',
    reciveCount: 11,
  },
  {
    email: 'ccc@naver.com',
    reciveCount: 6,
  },
  {
    email: 'ddd@naver.com',
    reciveCount: 14,
  },
];

// 계산
export const getSubCouponRank = (subscriber: Subscriber): CouponRank =>
  subscriber.reciveCount >= 10 ? CouponRank.best : CouponRank.good;

const getSubscriberByEmail = (
  subscribers: Subscriber[],
  email: Subscriber['email']
) => subscribers.find((v) => v.email === email);
