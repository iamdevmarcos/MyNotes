import React, { useState, useEffect, useLayoutEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRoute, useNavigation } from "@react-navigation/native";

import {
  Container,
  TitleInput,
  BodyInput,
  SaveButton,
  SaveButtonImage,
  CloseButton,
  CloseButtonImage,
} from "./styles";

export default () => {
  const navigation = useNavigation();
  const route = useRoute();
  const dispatch = useDispatch();
  const list = useSelector((state) => state.notes.list);

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [status, setStatus] = useState("new");

  useEffect(() => {
    if (route.params?.key !== undefined && list[route.params.key]) {
      setStatus("edit");
      setTitle(list[route.params.key].title);
      setBody(list[route.params.key].body);
    }
  }, []);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: status === "new" ? "Nova Anotação" : "Editar Anotação",
      headerLeft: () => (
        <CloseButton underlayColor="transparent" onPress={handleCloseButton}>
          <CloseButtonImage source={require("../../assets/close.png")} />
        </CloseButton>
      ),
      headerRight: () => (
        <SaveButton underlayColor="transparent" onPress={handleSaveButton}>
          <SaveButtonImage source={require("../../assets/save.png")} />
        </SaveButton>
      ),
    });
  }, [status, title, body]);

  const handleSaveButton = () => {
    if (title !== "" && body !== "") {
    } else {
      alert("Preencha titulo e corpo");
    }
  };

  const handleCloseButton = () => navigation.navigate("List");

  return (
    <Container>
      <TitleInput
        value={title}
        onChangeText={(t) => setTitle(t)}
        placeholder="Digite o titulo da anotação"
        placeholderTextColor="#ccc"
        autoFocus={true}
      />
      <BodyInput
        value={body}
        onChangeText={(t) => setBody(t)}
        placeholder="Digite o corpo da anotação"
        placeholderTextColor="#ccc"
        multiline={true}
        textAlignVertical="top"
      />
    </Container>
  );
};
