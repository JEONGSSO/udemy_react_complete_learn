import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

// beforeAll(() => {
//   console.log('beforeAll 맨 처음 실행');
// });

// afterAll(() => {
//   console.log('afterAll 모든 it, test가 끝난 후 실행');
// });

describe('testttt', () => {
  //   beforeEach(() => {
  //     console.log('beforeEach it, test 전에 실행');
  //     console.log('공통적으로 사용해야 하는 변수들을 담을 때 ');
  //     // render(<Login />);
  //     // client.clearStore();
  //   });

  //   afterEach(() => {
  //     // afterEach(() => server.resetHandlers());
  //     console.log('afterEach it, test 후에 실행');
  //   });

  it('input test', async () => {
    const onChangeEvent = jest.fn();
    render(
      <div>
        <label htmlFor="asd">
          username
          <input id="asd" name="zzzz" onKeyDown={onChangeEvent}></input>
        </label>
      </div>
    );

    // const inputElem = screen.getByLabelText(/Username/i) as HTMLInputElement;
    const inputElem = screen.getByRole('textbox', {
      name: /Username/i,
    }) as HTMLInputElement;
    expect(inputElem).toBeEnabled();

    // fireEvent.change(inputElem, { target: { value: '아무거나입력' } });
    userEvent.type(inputElem, '아무거나입력');
    expect(inputElem.value).toBe('아무거나입력');

    expect(onChangeEvent).toHaveBeenCalledTimes(6);
  });
});
