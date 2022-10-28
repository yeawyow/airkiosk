import React, { createContext, useEffect, useState } from "react";
import Connection from "./Connection";
import Publisher from "./Publisher";
import Subscriber from "./Subscriber";
import Receiver from "./Receiver";
import mqtt from "mqtt/dist/mqtt";
import { plugins } from "pretty-format";

export const QosOption = createContext([]);
const qosOption = [
  {
    label: "0",
    value: 0,
  },
  {
    label: "1",
    value: 1,
  },
  {
    label: "2",
    value: 2,
  },
];

const host = {
  host: "ws://localhost:10884/mqtt",
  clientId: `mqttjs_ + ${Math.random().toString(16).substr(2, 8)}`,
  username: "",
  password: "",
};
const mqttOption = {
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
};

const HookMqtt = () => {
  const [client, setClient] = useState(mqtt.connect("ws://localhost:10884"));
  const [isSubed, setIsSub] = useState(false);
  const [payload, setPayload] = useState({});
  //const [connectStatus, setConnectStatus] = useState("Connect");

  // const mqttConnect = () => {
  //  setConnectStatus("Connecting");
  //setClient(mqtt.connect(host, mqttOption));
  //};
  console.log(payload);
  useEffect(() => {
    client.on("connect", () => {
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
      setPayload(payload);
    });
  }, [client]);

  return (
    <>
      <Receiver payload={payload} />
    </>
  );
};

export default HookMqtt;
