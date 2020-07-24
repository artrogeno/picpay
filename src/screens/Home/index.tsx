import React from "react";
import { MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";

import Suggestions from "../../shared/components/Suggestions";
import Activities from "../../shared/components/Activities";
import Tips from "../../shared/components/Tips";
import Banner from "../../shared/components/Banner";
import {
  Wrapper,
  Container,
  Header,
  BalanceContainer,
  BalanceTitle,
  Balance,
} from "./styles";

const Home = () => {
  return (
    <Wrapper>
      <Container>
        <Header>
          <MaterialCommunityIcons
            name="qrcode-scan"
            size={30}
            color="#10c86e"
          />

          <BalanceContainer>
            <BalanceTitle>My balance</BalanceTitle>
            <Balance>$ 0.00</Balance>
          </BalanceContainer>

          <AntDesign name="gift" size={30} color="#10c86e" />
        </Header>

        <Suggestions />
        <Activities />
        <Tips />
        <Banner />
      </Container>
    </Wrapper>
  );
};

export default Home;
