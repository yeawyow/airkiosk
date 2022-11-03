import React, { useEffect, useState } from "react";
import Receiver from "./Receiver";
import { useSelector, useDispatch } from "react-redux";
import mqtt from "mqtt/dist/mqtt";
import { setCardId, setcardStatus, increment } from "../../app/conMqttSlice";
import { Card, List } from "antd";

//import { plugins } from "pretty-format";

/*const host = {
  host: "ws://localhost:10884/mqtt",
  clientId: `mqttjs_ + ${Math.random().toString(16).substr(2, 8)}`,
  username: "",
  password: "",
};
/*const mqttOption = {
  keepalive: 30,
  protocolId: "MQTT",
  protocolVersion: 4,
  clean: true,
  reconnectPeriod: 1000,
  connectTimeout: 30 * 1000,
  will: {
    topic: "WillMsg",
    payload: "Connection Closed abnormally..!",
    qos: 0,
    retain: false,
  },
  rejectUnauthorized: false,
};*/

const HookMqtt = () => {
  const [client, setClient] = useState(mqtt.connect("ws://localhost:10884"));
  const cardStatus = useSelector((state) => state.mqttcon.cardStatus);
  const cardId = useSelector((state) => state.mqttcon.cardId);
  const dispatch = useDispatch();
  //const [connectStatus, setConnectStatus] = useState("Connect");

  useEffect(() => {
    client.on("connect", (err) => {
      // setConnectStatus("Connected");
      client.subscribe("moph/ict/mqtt", (error) => {
        if (error) {
          console.log("Subscribe to topics error", error);
          return;
        }
      });
    });
    client.on("message", (topic, message) => {
      const payload = { topic, message: message.toString() };

      dispatch(setCardId(payload));
      dispatch(setcardStatus(payload.message));
      // setPayload(payload);
    });
  }, [client]);
  if (cardStatus === "CARD_EXITED") {
    // console.log("55", cardStatus);
  } else {
    // console.log("66", cardStatus);
  }

  return (
    <div>
      <Receiver payload={cardId} />
    </div>
  );
};

export default HookMqtt;
