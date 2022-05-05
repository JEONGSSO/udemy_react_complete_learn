import { Coupon, CouponCode, CouponRank } from './types';

// 데이터
export const coupons: Coupon[] = [
  {
    code: CouponCode['10PERCENT'],
    rank: CouponRank.good,
  },
  {
    code: CouponCode.MAYDISCOUNT,
    rank: CouponRank.good,
  },
  {
    code: CouponCode.PROMOTION10,
    rank: CouponRank.good,
  },
  {
    code: CouponCode.PROMOTION20,
    rank: CouponRank.best,
  },
  {
    code: CouponCode.PROMOTION30,
    rank: CouponRank.best,
  },
];

// 계산
export const selectCouponsByRank =
  (coupons: Coupon[]) => (rank: CouponRank) => {
    const result: string[] = [];
    coupons.forEach((coupon) => {
      if (coupon.rank === rank) result.push(coupon.code);
    });
    return result;
  };
