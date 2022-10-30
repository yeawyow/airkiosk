import React, { useState } from "react";

export default function Datetime() {
  // const date = new Date().toLocaleDateString();
  let time = new Date().toLocaleTimeString();
  const [ctime, setCtime] = useState(time);

  const UpdateTime = () => {
    time = new Date().toLocaleTimeString();
    setCtime(time);
  };
  setInterval(UpdateTime, 1000);

  return (
    <div>
      <>
        <p>Today's time is {ctime}</p>
      </>
    </div>
  );
}
