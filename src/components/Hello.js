import React from 'react';
import { useEffect } from 'react';

export default function Hello() {
  useEffect(() => {
    console.log('헬로 있음');
    return () => {
      console.log('헬로 사라짐');
    };
  }, []);
  return (
    <div>
      <p>Hello</p>
    </div>
  );
}
