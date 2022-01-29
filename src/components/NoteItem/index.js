import React from "react";
import { Box, Title } from "./styles";

export default ({ data, index, onPress }) => {
  return (
    <Box>
      <Title>{data.title}</Title>
    </Box>
  );
};
