import React from "react";

import { Container, Detail, Title, Description, Img } from "./styles";

const Banner = () => {
  return (
    <Container>
      <Detail>
        <Title>Covers a friend</Title>
        <Description>
          Keep your partnerships up to date, use picpay to collect.
        </Description>
      </Detail>
      <Img source={require("../../../images/13.png")} />
    </Container>
  );
};

export default Banner;
