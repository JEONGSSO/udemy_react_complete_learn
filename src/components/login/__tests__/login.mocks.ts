import { GET_USER_QUERY } from '../query';
import { MockedResponse } from '@apollo/react-testing';

const mocks: MockedResponse[] = [
  {
    request: { query: GET_USER_QUERY },
    result: {
      data: {
        user: {
          email: 'test@naver.com',
          password: '1234',
        },
      },
    },
  },
];

export default mocks;
