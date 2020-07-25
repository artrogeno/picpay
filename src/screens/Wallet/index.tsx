import React, { useState } from "react";
import { Switch } from "react-native";
import {
  Feather,
  MaterialCommunityIcons,
  FontAwesome,
  AntDesign,
} from "@expo/vector-icons";

import {
  Wrapper,
  Header,
  HeaderContainer,
  Title,
  BalanceContainer,
  Value,
  Bold,
  EyeButton,
  Info,
  Actions,
  Action,
  ActionLabel,
  UseBalance,
  UseBalanceTitle,
  PaymentMethods,
  PaymentMethodsTitle,
  Card,
  CardBody,
  CardFooter,
  CardDetails,
  CardTitle,
  CardInfo,
  Img,
  AddButton,
  AddLabel,
  UseTicketContainer,
  UseTicketButton,
  Label,
} from "./styles";

const Wallet = () => {
  const [isVisible, setIsVisible] = useState<Boolean>(true);
  const [useBalance, setUseBalance] = useState<Boolean>(true);

  const handleToggleVisibility = () => {
    setIsVisible((prevState) => !prevState);
  };

  const handleToggleUseBalance = () => {
    setUseBalance((prevState) => !prevState);
  };

  return (
    <Wrapper>
      <Header
        colors={useBalance ? ["#52e78c", "#1ab563"] : ["#d3d3d3", "#868686"]}
      >
        <HeaderContainer>
          <Title>Balance PicPay</Title>

          <BalanceContainer>
            <Value>
              $ <Bold>{isVisible ? "0.00" : "----"}</Bold>
            </Value>
            <EyeButton onPress={handleToggleVisibility}>
              <Feather
                name={isVisible ? "eye" : "eye-off"}
                size={28}
                color="#fff"
              />
            </EyeButton>
          </BalanceContainer>

          <Info>This is your total account balance</Info>

          <Actions>
            <Action>
              <MaterialCommunityIcons name="cash" size={28} color="#fff" />
              <ActionLabel>Add</ActionLabel>
            </Action>
            <Action>
              <FontAwesome name="bank" size={20} color="#fff" />
              <ActionLabel>Add</ActionLabel>
            </Action>
          </Actions>
        </HeaderContainer>
      </Header>

      <UseBalance>
        <UseBalanceTitle>Use balance when paying</UseBalanceTitle>
        <Switch value={useBalance} onValueChange={handleToggleUseBalance} />
      </UseBalance>

      <PaymentMethods>
        <PaymentMethodsTitle>Payment methods</PaymentMethodsTitle>

        <Card>
          <CardBody>
            <CardDetails>
              <CardTitle>Register your credit card</CardTitle>
              <CardInfo>
                Register your credit card to be able to make payments even when
                there is no balance in your picpay
              </CardInfo>
            </CardDetails>

            <Img
              resizeMode="contain"
              source={require("../../images/credit-card.png")}
            />
          </CardBody>

          <CardFooter>
            <AddButton>
              <AntDesign name="pluscircleo" size={30} color="#0db060" />
              <AddLabel>Add Credit Card</AddLabel>
            </AddButton>
          </CardFooter>
        </Card>

        <UseTicketContainer>
          <UseTicketButton>
            <MaterialCommunityIcons
              name="ticket-outline"
              size={20}
              color="#0db060"
            />
            <Label>Use promotional code</Label>
          </UseTicketButton>
        </UseTicketContainer>
      </PaymentMethods>
    </Wrapper>
  );
};

export default Wallet;
