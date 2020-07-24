import React from "react";

import { Container, Option, Img, Lable } from "./styles";

interface Item {
  key: string;
  img: any;
  label: string;
}

const items: Item[] = [
  {
    key: String(Math.random()),
    img: require("../../../images/01.png"),
    label: "Donation",
  },
  {
    key: String(Math.random()),
    img: require("../../../images/02.png"),
    label: "Donation",
  },
  {
    key: String(Math.random()),
    img: require("../../../images/03.png"),
    label: "Donation",
  },
  {
    key: String(Math.random()),
    img: require("../../../images/04.png"),
    label: "Donation",
  },
  {
    key: String(Math.random()),
    img: require("../../../images/05.png"),
    label: "Donation",
  },
  {
    key: String(Math.random()),
    img: require("../../../images/06.png"),
    label: "Donation",
  },
  {
    key: String(Math.random()),
    img: require("../../../images/07.png"),
    label: "Donation",
  },
];

const Suggestions = () => {
  return (
    <Container>
      {items.map(({ key, img, label }) => (
        <Option key={key}>
          <Img source={img} />
          <Lable>{label}</Lable>
        </Option>
      ))}
    </Container>
  );
};

export default Suggestions;
