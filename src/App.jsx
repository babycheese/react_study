import React, { useEffect, useState } from "react";
import ColorfullMessage from "./compornents/ColorfullMessage";

const App = () => {
  console.log("コンポーネントの最初");
  // state
  const [num, setNum] = useState(0);
  const [faceShowFlag, setFaceShowFlag] = useState(true);

  const onClickCount = () => {
    setNum(num + 1);
  };
  const onClickFace = () => {
    setFaceShowFlag(!faceShowFlag);
  };
  useEffect(() => {
    console.log("useEffect!");
    if (num > 0) {
      if (num % 3 === 0) {
        faceShowFlag || setFaceShowFlag(true);
      } else {
        faceShowFlag && setFaceShowFlag(false);
      }
    }
  }, [num]);

  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは！</h1>
      <ColorfullMessage color="blue">お元気ですか？</ColorfullMessage>
      <ColorfullMessage color="pink">元気です</ColorfullMessage>
      <button onClick={onClickCount}>カウントアップ</button>
      <br />
      <button onClick={onClickFace}>on/off</button>
      <p>{num}</p>
      {faceShowFlag && <p>(*´Д｀)</p>}
    </>
  );
};

export default App;
