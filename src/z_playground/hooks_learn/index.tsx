import React, { useState, useEffect } from 'react';

const Test = () => {
  const [user, setUser] = useState(null);
  const [searchQuery, setSearchQuery] = useState('good');

  useEffect(() => {
    console.log('hello');
  }, []);

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
