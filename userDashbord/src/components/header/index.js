import {
  Header,
  WrapperRadius50,
  DubleBoder,
  HeaderWrapper,
  HeaderUser,
  Wrapper,
} from "./../../styles/common.styled";
const users = "https://picsum.photos/200";
const addGroup = require("./../../assets/addGroup.png");
const Notification = require("./../../assets/Notification.png");
export default function HeadApp() {
  return (
      <Header>
        <HeaderWrapper>
          <WrapperRadius50>
            <HeaderUser src={users} />
          </WrapperRadius50>
          <WrapperRadius50 margLef>
            <HeaderUser src={users} />
          </WrapperRadius50>
          <WrapperRadius50 border>
            <HeaderUser left height={"40px"} width={"40px"} source={addGroup} />
          </WrapperRadius50>
        </HeaderWrapper>
        <HeaderWrapper end>
          <DubleBoder color={"red"}>
            <WrapperRadius50>
              <HeaderUser src={users} />
            </WrapperRadius50>
          </DubleBoder>
          <WrapperRadius50 border>
            <HeaderUser height={"24px"} width={"24px"} source={Notification} />
          </WrapperRadius50>
        </HeaderWrapper>
      </Header>
  );
}
