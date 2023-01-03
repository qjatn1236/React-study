import React from 'react';

export default function Tab({ handleClick }) {
  return (
    <div>
      <button onClick={handleClick}>증가</button>
    </div>
  );
}
