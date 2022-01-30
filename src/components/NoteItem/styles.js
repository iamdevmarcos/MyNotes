import styled from "styled-components/native";

export const Box = styled.TouchableHighlight`
  padding: 15px;
  border-style: solid;
  border-bottom-color: #222;
  border-bottom-width: 1px;
`;

export const Title = styled.Text`
  font-size: 17px;
  color: #000;
  text-decoration: ${(props) =>
    props.success === true ? "line-through" : "none"};
`;
