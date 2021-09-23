import { GET_ALL_USERS } from '../query';
import { MockedResponse } from '@apollo/client/testing';

const mocks: MockedResponse[] = [
  {
    request: { query: GET_ALL_USERS },
    result: {
      data: {
        users: [
          {
            email: 'kim@naver.com',
            password: 'kim',
          },
          {
            email: 'na@naver.com',
            password: 'na',
          },
          {
            email: 'park@naver.com',
            password: 'park',
          },
          {
            email: 'lee@naver.com',
            password: 'lee',
          },
        ],
      },
    },
  },
];

export default mocks;
