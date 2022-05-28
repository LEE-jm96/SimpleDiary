import React, { useEffect, useState } from "react";

const Lifecycle = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  useEffect(() => {
    console.log("Mount!");
  }, []);

  useEffect(() => {
    console.log("Update!");
  });

  useEffect(() => {
    console.log("count is update");
    if (count > 5) {
      alert("count가 5를 넘어 1로 초기화힙니다.");
      setCount(1);
    }
  }, [count]);

  useEffect(() => {
    console.log("text is update");
  }, [text]);

  return (
    <div style={{ padding: 20 }}>
      <div>
        {count}
        <button onClick={setCount(count + 1)}>+</button>
      </div>
      <input value={text} onChange={(e) => setText(e.target.value)} />
    </div>
  );
};

export default Lifecycle;
