import styled from "styled-components/native";

export const Header = styled.View`
  flex: 1;
  justify-content: space-between;
  flex-direction: row;
`;
export const FooterWapper = styled.View`
  flex: 1;
  flex-direction: row;
    background-color: black;
  justify-content: space-around;
  align-items: center;
  border-radius: 30px
`;

export const WrapperRadius50 = styled.View`
  border-width: ${(props) => (props.border ? "0px" : "2px")};
  border-color: ${(props) => (props.color ? props.color : "#222222")};
  border-radius: ${(props) => (props.border ? "0px" : "50%")};
  height: 48px;
  width: 48px;
  overflow: hidden;
  margin-left: ${(props) => (props.margLef ? "-17px" : "0px")};
  align-items: center;
  justify-content: center;
`;
export const DubleBoder = styled.View`
  border-width: 1px;
  border-color: pink;
  border-radius: ${(props) => (props.border ? "0px" : "50%")};
  height: 55px;
  width: 55px;
  margin-left: ${(props) => (props.margLef ? "-17px" : "0px")};
  align-items: center;
  justify-content: center;
`;
export const HeaderWrapper = styled.View`
  flex: 5;
  flex-direction: ${(props) => (props.end ? "row-reverse" : "row")};
`;
export const HeaderUser = styled.Image`
  height: ${(props) => (props.height ? props.height : "48px")};
  width: ${(props) => (props.width ? props.width : "48px")};
  margin-left: ${(props) => (props.left ? "6px" : "0px")};
`;
export const FooterIcon = styled.Image`
  height: 27px;
  width:27px;
  margin-top:${(props) => (props.top ? "-30px" : "0px")};
  tint-color:${(props) => (props.top ? "#8386FF" : "white")}; 
`;
export const Wrapper = styled.View`
  background-color: #222222;
  flex: 1;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 20px;
`;

export const CollaboraterWrapper = styled.View`
  flex: 7;
`;
export const SearchWrapper = styled.View`
  background-color: #222222;
  flex-direction: row;
  align-items: center;
  border-width: 1px;
  border-color: #4d4d4d;
  border-radius: 21px;
  height: 50px;
  padding-left: 20px;
`;
export const SearchIcon = styled.Image`
  width: 20px;
  height: 20px;
  margin-right: 10px;
`;
export const MoreIconManu = styled.Image`
  width: 30px;
  height: 30px;
`;
export const SearchTextInput = styled.TextInput`
  height: 50px;
  font-size: 18px;
  color: white;
`;
export const ListUser = styled.View`
  border-bottom-color: #4d4d4d;
  border-top-color: #222222;
  border-left-color: #222222;
  border-right-color: #222222;
  border-width: 0.5px;
  height: 80px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: ${(props) => (props.top ?  "20px" : "0px")};
`;
export const UserText = styled.Text`
  color: white;
  font-size:  ${(props) => (props.font ? props.font : "13px")};
  font-weight: ${(props) => (props.font ? "bold" : "normal")};
  padding-top: 2px;
  margin-left: 14px;
`;
export const UserWapper = styled.View`
  flex-direction: row;
`;
export const UserWapperClumn = styled.View`
  flex-direction: column;
`;