import React from "react";

import { Container, Option, Title, Img } from "./styles";

interface Item {
  key: string;
  img: any;
  title: string;
  color: string;
}

const items: Item[] = [
  {
    key: String(Math.random()),
    img: require("../../../images/08.png"),
    title: "Pay your bills without leaving home",
    color: "#172c4a",
  },
  {
    key: String(Math.random()),
    img: require("../../../images/09.png"),
    title: "Pay your bills without leaving home",
    color: "#6a0159",
  },
  {
    key: String(Math.random()),
    img: require("../../../images/10.png"),
    title: "Pay your bills without leaving home",
    color: "#4139c8",
  },
  {
    key: String(Math.random()),
    img: require("../../../images/11.png"),
    title: "Pay your bills without leaving home",
    color: "#00ab4b",
  },
  {
    key: String(Math.random()),
    img: require("../../../images/12.png"),
    title: "Pay your bills without leaving home",
    color: "#ba2f76",
  },
];

const Tips = () => {
  return (
    <Container>
      {items.map(({ key, img, title, color }) => (
        <Option bgColor={color} key={key}>
          <Title>{title}</Title>
          <Img source={img} />
        </Option>
      ))}
    </Container>
  );
};

export default Tips;
