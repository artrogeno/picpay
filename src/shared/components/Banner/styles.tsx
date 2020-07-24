import styled from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  height: 140px;
  margin: 25px 16px;
  padding: 15px;
  border-radius: 8px;
  background: #6882bb;
`;

export const Detail = styled.View`
  flex: 1;
`;

export const Img = styled.Image``;

export const Title = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
`;

export const Description = styled.Text`
  color: #fff;
  font-size: 14px;
  margin-top: 15px;
  padding-right: 10px;
`;
