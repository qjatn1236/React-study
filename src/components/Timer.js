import React,{useEffect} from 'react'

export default function Timer(props) {

  useEffect(()=>{
    const timer = setInterval(()=>{
      console.log("타이머 돌아가는 중...");
    }, 1000);

    return ()=>{
      clearInterval(timer)
    }
  }, []);

  return (
    <div>
      <span>타이머를 시작.</span>
    </div>
  )
}
