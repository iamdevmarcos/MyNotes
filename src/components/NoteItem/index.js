import React from "react";
import { Box, Title } from "./styles";

export default ({ data, index, onPress }) => {
  return (
    <Box onPress={() => onPress(index)}>
      <Title
        style={{
          fontFamily: "Poppins-SemiBold",
        }}
        success={data.done}
      >
        {data.title}
      </Title>
    </Box>
  );
};
