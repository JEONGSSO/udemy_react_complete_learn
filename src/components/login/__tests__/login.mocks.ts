import { GET_USER_QUERY } from '../query';
import { MockedResponse } from '@apollo/client/testing';

const mocks: MockedResponse[] = [
  {
    request: { query: GET_USER_QUERY },
    result: {
      data: {
        users: [
          {
            name: 'kim',
            email: 'kim@naver.com',
          },
          {
            name: 'na',
            email: 'na@naver.com',
          },
          {
            name: 'park',
            email: 'park@naver.com',
          },
          {
            name: 'lee',
            email: 'lee@naver.com',
          },
        ],
      },
    },
  },
];

export default mocks;
