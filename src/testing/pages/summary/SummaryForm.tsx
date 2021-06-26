import React, { useState } from 'react';

const SummaryForm = () => {
  const [termCheck, setTermCheck] = useState(false);
  const [labelOver, setlabelOver] = useState(false);

  const Popover = () => (
    <div id="termsandconditions-popover">
      No ice cream will actually be delivered
    </div>
  );

  return (
    <>
      <form action="">
        <input
          type="checkbox"
          name="checkbox"
          id="checkbox"
          onChange={(e) => setTermCheck(e.target.checked)}
        />
        <label
          htmlFor="checkbox"
          onMouseEnter={() => setlabelOver(true)}
          onMouseLeave={() => setlabelOver(false)}
        >
          terms and conditions
        </label>
        {labelOver && <Popover />}

        <button disabled={!termCheck}>confirm order</button>
      </form>
    </>
  );
};

export default SummaryForm;
