import React, { useState, useEffect } from "react";

const CounterA = React.memo(({ count }) => {
  useEffect(() => {
    console.log(`CounterA : ${count}`);
  });
  return <div>{count}</div>;
});

const CounterB = React.memo(({ obj }) => {
  // 얕은 비교를 하기 때문에 state가 변함에 따라 리렌더링된다.
  useEffect(() => {
    console.log(`CounterB : ${obj.count}`);
  });
  return <div>{obj.count}</div>;
});

const areEqaul = (prevProps, nextProps) => {
  // return true // 이전 프롭스 현재 프롭스가 같다 -> 리렌더링 x
  // return false // 이전과 현재가 다르다 -> 리렌더링 o
  return prevProps.obj.count == nextProps.obj.count;
};

const MemoizedCounterB = React.memo(CounterB, areEqaul);

const OpTest = () => {
  const [count, setCount] = useState(1);
  const [obj, setObj] = useState({
    count: 1,
  });

  return (
    <div style={{ padding: 50 }}>
      <div>
        <h2>Counter A</h2>
        <CounterA count={count} />
        <button onClick={() => setCount(count)}>A button</button>
      </div>
      <div>
        <h2>Counter B</h2>
        <MemoizedCounterB obj={obj} />
        <button
          onClick={() =>
            setObj({
              count: obj.count,
            })
          }
        >
          B button
        </button>
      </div>
    </div>
  );
};

export default OpTest;
