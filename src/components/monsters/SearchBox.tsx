import React, { ChangeEventHandler } from 'react';

const SearchBox = ({
  keyword,
  handleChange,
}: {
  keyword: string;
  handleChange: ChangeEventHandler;
}) => {
  return (
    <input
      type="search"
      className="search"
      value={keyword}
      placeholder="몬스터 이름입력"
      onChange={handleChange}
    />
  );
};

export default SearchBox;
