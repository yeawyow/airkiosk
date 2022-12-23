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
  //const tt = today.toLocaleString("th-TH", { timeZone: "UTC" });
  // const year = today;
  // let date = new Date(2565, 2, 1);
  //onst month = today.getMonth().toString().substr(-2);
  // console.log(today.toISOString());
  // console.log(today.toUTCString());

  // Convert time to curreny locale
  // console.log(today.toString());
  //console.log(today.toLocaleString());

  // Convert time to specified locale
  // console.log(today.toLocaleString("en-GB", { timeZone: "UTC" }));
  //console.log(today.toLocaleString("th-TH", { timeZone: "UTC" }));
  // console.log(today.toLocaleString("tr-TR", { timeZone: "UTC" }));

  return (
    <div>
      <>
        <p>Today's time is {ctime}</p>
      </>
    </div>
  );
}
