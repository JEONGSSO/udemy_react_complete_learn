export enum CouponRank {
  best = 'best',
  good = 'good',
  bad = 'bad', //
}

export enum CouponCode {
  MAYDISCOUNT = 'MAYDISCOUNT',
  '10PERCENT' = '10PERCENT',
  PROMOTION10 = 'PROMOTION10',
  PROMOTION20 = 'PROMOTION20',
  PROMOTION30 = 'PROMOTION30',
}

export type Coupon = {
  code: CouponCode;
  rank: CouponRank;
};

export type Subscriber = {
  email: string;
  reciveCount: number;
};

export type EmailMessage = {
  from: string;
  to: string;
  subject: string;
  body: string;
};
