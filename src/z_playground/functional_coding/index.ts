import { pipe, toAsync, map, toArray, some } from '@fxts/core';

const data = [
  {
    reason: 'GOOD',
    usableAmount: 1,
    // brokenAmount:2,
  },
  {
    reason: null,
    usableAmount: 1,
    // brokenAmount:1,
  },
  {
    reason: null,
    usableAmount: 0,
    // brokenAmount:0,
  },
];

const validCatch = (a: typeof data[0]) =>
  a.reason ? Promise.resolve(a) : Promise.reject('아나');

const syncError = (a: boolean) => {
  throw new Error('캐치할거');
};

try {
  const zz = pipe(
    data,
    some((v) => v.usableAmount && !v.reason),
    syncError
  );
  console.log('zzzzzz', zz);
} catch (err) {
  console.log('err', err);
}

// const validCheck =
// usableAmount 값이 있고 reason이 null이 있으면 캐치
