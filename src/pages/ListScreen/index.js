import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Container, Text, Button } from "./styles";

export default () => {
  const navigation = useNavigation();

  return (
    <Container>
      <Text>ListScreen</Text>
      <Button
        title="Go to Edit"
        onPress={() => navigation.navigate("EditNote")}
      />
    </Container>
  );
};
