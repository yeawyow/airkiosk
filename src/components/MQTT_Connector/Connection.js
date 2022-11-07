import React, { useEffect, useState } from "react";
import Receiver from "./Receiver";
import { useSelector, useDispatch } from "react-redux";
import mqtt from "mqtt/dist/mqtt";
import { setCardId } from "../../app/conMqttSlice";
import { useNavigate } from "react-router-dom";
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
  const cardId = useSelector((state) => state.mqttcon.cardId);
  const dispatch = useDispatch();
  let navigate = useNavigate();
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
      //   navigate("/keyid");

      // setPayload(payload);
    });
  }, [client]);

  if (cardId) {
    var jj = JSON.parse(cardId.message);
    console.log(`cid`, jj?.data?.cid);
  }

  return (
    <div>
      <Receiver payload={jj} />
    </div>
  );
};

export default HookMqtt;
