import {
  WrapperRadius50,
  CollaboraterWrapper,
  HeaderUser,
  SearchWrapper,
  SearchIcon,
  SearchTextInput,
  ListUser,
  UserText,
  UserWapper,
  MoreIconManu,
  UserWapperClumn,
} from "../../styles/common.styled";
import {
  FlatList
} from 'react-native';
const users = "https://picsum.photos/200";
const addGroup = require("./../../assets/search-normal.png");
const moreIcon = require("./../../assets/more.png");
export default function Collaborater({listOfUsers}) {
  const ItemView = ({ item,index }) => {
    return (
      <ListUser top={index === 0}>
      <UserWapper>
        <WrapperRadius50>
          <HeaderUser src={users} />
        </WrapperRadius50>
        <UserWapperClumn>
          <UserText font={"17px"}>{item.name}</UserText>
          <UserText>{item.email}</UserText>
        </UserWapperClumn>
      </UserWapper>
      <MoreIconManu source={moreIcon} />

    </ListUser>
    );
  };
  return (
    <CollaboraterWrapper>
      <SearchWrapper>
        <SearchIcon source={addGroup} />
        <SearchTextInput
          placeholderTextColor="white"
          placeholder="Search for collaborater"
        />
      </SearchWrapper>
      <FlatList
          data={listOfUsers}
          renderItem={ItemView}
          keyExtractor={(item, index) => index.toString()}
        />
    </CollaboraterWrapper>
  );
}
