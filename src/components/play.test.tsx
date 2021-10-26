import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('testttt', () => {
  it('input test', async () => {
    const onChangeEvent = jest.fn();

    render(
      <div>
        <label htmlFor="asd">
          username
          <input id="asd" name="zzzz" onChange={onChangeEvent}></input>
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

  test.only('mock Test', () => {
    const mockFn = jest.fn();
    // mockReturnValue 가짜 함수의 리턴값을 지정
    // mockFn.mockReturnValue('good');
    // console.log('mockFn', mockFn());

    // mockResolvedValue promise 객체로 리턴값을 받을 수 있다.
    // mockFn.mockResolvedValue('아니');
    // mockFn().then((res: string) => {
    //   console.log(res);
    // });

    // mockImplementation
    // mockFn.mockImplementation((name) => `good ${name}`);
    // console.log(mockFn('Kim'));

    // toBeCalledWith
    // toHaveBeenCalledWith 어떤 인자와 같이 들어왔었는지 체크 가능

    // mockFn('good');
    // mockFn('bad');

    // expect(mockFn).toBeCalledWith('bad');
    // expect(mockFn).toHaveBeenCalledWith('good');

    // spyOn 특정 함수의 리턴값과 인자를 확인 할 수 있다.
    // const calculator = {
    //   add: (a: number, b: number) => a + b,
    // };
    // const spyFn = jest.spyOn(calculator, 'add');
    // const add = calculator.add(2, 3);

    // expect(spyFn).toBeCalledWith(2, 3);
    // expect(add).toBe(-1);

    // spyOn mockImplementation 안의 동작까지도 재구성 가능
    // spyFn.mockImplementation((a: number, b: number) => a - b);
    // const sub = calculator.add(2, 3);
    // expect(spyFn).toBeCalledWith(2, 3);
    // expect(sub).toBe(-1);
  });
});
