import React from "react";
import { Box, Title } from "./styles";

export default ({ data, index, onPress }) => {
  return (
    <Box onPress={() => onPress(index)}>
      <Title
        style={{
          fontFamily: "WorkSans-SemiBold",
        }}
        success={data.done}
      >
        {data.title}
      </Title>
    </Box>
  );
};
