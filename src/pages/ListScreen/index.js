import React, { useEffect, useLayoutEffect } from "react";
import { BackHandler } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";

import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";

import {
  Container,
  AddButton,
  AddButtonImage,
  NotesList,
  NoNotes,
  NoNotesImage,
  NoNotesText,
} from "./styles";

import NoteItem from "../../components/NoteItem";

export default () => {
  const navigation = useNavigation();
  const list = useSelector((state) => state.notes.list);

  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", () => true);
  }, []);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Suas notas",
      headerLeft: false,
      headerRight: () => (
        <AddButton
          underlayColor="transparent"
          onPress={() => navigation.navigate("EditNote")}
        >
          <AddButtonImage source={require("../../assets/more.png")} />
        </AddButton>
      ),
    });
  }, []);

  const handleNotePress = (index) => {
    navigation.navigate("EditNote", {
      key: index,
    });
  };

  let [fontsLoaded, error] = useFonts({
    "Poppins-SemiBold": require("../../../assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Regular": require("../../../assets/fonts/Poppins-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <Container>
      {list.length > 0 && (
        <NotesList
          data={list}
          renderItem={({ item, index }) => (
            <NoteItem data={item} index={index} onPress={handleNotePress} />
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      )}
      {list.length === 0 && (
        <NoNotes>
          <NoNotesImage source={require("../../assets/note.png")} />
          <NoNotesText style={{ fontFamily: "Poppins-SemiBold" }}>
            Nenhuma anotação
          </NoNotesText>
        </NoNotes>
      )}
    </Container>
  );
};
