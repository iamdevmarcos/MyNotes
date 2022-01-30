import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background: #333;
`;

export const TitleInput = styled.TextInput`
  font-size: 20px;
  font-weight: bold;
  padding: 15px;
  color: #fff;
`;

export const BodyInput = styled.TextInput`
  flex: 1;
  padding: 15px;
  font-size: 15px;
  color: #fff;
`;

export const SaveButton = styled.TouchableHighlight`
  margin-right: 15px;
  padding: 10px;
`;

export const SaveButtonImage = styled.Image`
  width: 24px;
  height: 24px;
`;

export const CloseButton = styled.TouchableHighlight`
  margin-left: 15px;
  padding: 10px;
`;

export const CloseButtonImage = styled.Image`
  width: 16px;
  height: 16px;
`;
