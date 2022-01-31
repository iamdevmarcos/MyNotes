import React from "react";
import { Box, BoxContainer, Title, Check, CheckImage } from "./styles";

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

  return (
    <Box onPress={() => onPress(index)} underlayColor="#ffffff">
      <BoxContainer>
        <Title
          style={{
            fontFamily: "WorkSans-SemiBold",
          }}
          success={data.done}
        >
          {data.title}
        </Title>
        <Check onPress={handleCheckNote} underlayColor="transparent">
          <CheckImage source={require("../../assets/check.png")} />
        </Check>
      </BoxContainer>
    </Box>
  );
};
