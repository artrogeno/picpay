import React from "react";
import { Feather, AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";

import {
  Container,
  Header,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Title,
  Avatar,
  Description,
  Bold,
  UserName,
  Details,
  Values,
  Divider,
  Date,
  Actions,
  Option,
  OptionLabel,
} from "./styles";

const Activities = () => {
  return (
    <Container>
      <Header>
        <Title>Activities</Title>
      </Header>
      <Card>
        <CardHeader>
          <Avatar source={require("../../../images/avatar.png")} />
          <Description>
            <Bold>You</Bold> paid <Bold>@artrogeno</Bold>
          </Description>
        </CardHeader>
        <CardBody>
          <UserName>Arthur Silva</UserName>
        </CardBody>
        <CardFooter>
          <Details>
            <Values>$ 22.00</Values>
            <Divider />
            <Feather name="lock" size={14} color="#fff" />
            <Date>Two years ago</Date>
          </Details>

          <Actions>
            <Option>
              <MaterialCommunityIcons
                name="comment-outline"
                size={14}
                color="#fff"
              />
              <OptionLabel>0</OptionLabel>
            </Option>
            <Option>
              <AntDesign name="hearto" size={14} color="#fff" />
              <OptionLabel>0</OptionLabel>
            </Option>
          </Actions>
        </CardFooter>
      </Card>
    </Container>
  );
};

export default Activities;
