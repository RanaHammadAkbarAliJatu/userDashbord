import HeadApp  from "./src/components/header";
import FooterApp  from "./src/components/footer";
import Collaborater  from "./src/components/collaborater";
import {
  SafeAreaView,
} from 'react-native';
import {Wrapper} from "./src/styles/common.styled"
export default function App() {
const listOfUsers =[{name:"Esther Howard",email:"Esther@gmail.com"},{name:"Esther Howard",email:"Esther@gmail.com"},{name:"Esther Howard",email:"Esther@gmail.com"},{name:"Esther Howard",email:"Esther@gmail.com"}]
  return (
    <>
    <SafeAreaView style={{ flex:0, backgroundColor: "#222222" }} />
      <SafeAreaView style={{ flex:1, backgroundColor: "#222222" }}>
        <Wrapper>
           <HeadApp />
           <Collaborater listOfUsers={listOfUsers}/>
           <FooterApp />
    </Wrapper>
    </SafeAreaView>
    </>
  );
}
