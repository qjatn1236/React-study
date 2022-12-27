import React from 'react';

export default function Tab({ apple, handleMClick }) {
  return (
    <div>
      <button onClick={apple.handleClick}>추가</button>
      <button onClick={handleMClick}>감소</button>
      <p>{apple.name}</p>
    </div>
  );
}
