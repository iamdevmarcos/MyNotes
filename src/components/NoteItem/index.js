import React from "react";
import {
  Box,
  BoxContainer,
  Title,
  Check,
  CheckImage,
  UnCheck,
  UnCheckImage,
} from "./styles";

import { useDispatch } from "react-redux";

export default ({ data, index, onPress }) => {
  const dispatch = useDispatch();

  const handleCheckNote = () => {
    dispatch({
      type: "SUCCESS_NOTE",
      payload: {
        key: index,
        title: data.title,
        body: data.body,
      },
    });
  };

  const handleUnCheckNote = () => alert("desmaque");

  return (
    <Box
      onPress={() => onPress(index)}
      underlayColor="#ffffff"
      check={data.done}
    >
      <BoxContainer>
        <Title
          style={{
            fontFamily: "WorkSans-SemiBold",
          }}
          success={data.done}
        >
          {data.title} - {data.done.toString()}
        </Title>
        {data.done !== true && (
          <Check onPress={handleCheckNote} underlayColor="transparent">
            <CheckImage source={require("../../assets/check.png")} />
          </Check>
        )}
        {data.done !== false && (
          <UnCheck onPress={handleUnCheckNote} underlayColor="transparent">
            <UnCheckImage source={require("../../assets/nocheck.png")} />
          </UnCheck>
        )}
      </BoxContainer>
    </Box>
  );
};
