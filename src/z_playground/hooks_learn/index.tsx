import React, { useState, useEffect } from 'react';

const Test = () => {
  const [user, setUser] = useState<any>(null);
  const [searchQuery, setSearchQuery] = useState('good');

  useEffect(() => {
    if (searchQuery.length > 0) return;
    const fetchFunc = async () => {
      const res = (
        await fetch(
          `https://jsonplaceholder.typicode.com/user?username=${searchQuery}`
        )
      ).json();
      setUser(res);
    };
    fetchFunc();
  }, [searchQuery]);

  return (
    <div>
      <input
        type="search"
        name="query"
        value={searchQuery}
        onChange={(event) => setSearchQuery(event.target.value)}
      />
    </div>
  );
};

export default Test;
