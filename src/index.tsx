import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import Navigation from "./navigations";

export default function Main() {
  return (
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
  );
}
