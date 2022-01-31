import React from "react";
import { Box, BoxContainer, Title, Check, CheckImage } from "./styles";

export default ({ data, index, onPress }) => {
  return (
    <Box onPress={() => onPress(index)}>
      <BoxContainer>
        <Title
          style={{
            fontFamily: "WorkSans-SemiBold",
          }}
          success={data.done}
        >
          {data.title}
        </Title>
        <Check>
          <CheckImage source={require("../../assets/check.png")} />
        </Check>
      </BoxContainer>
    </Box>
  );
};
