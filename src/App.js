import { Route} from "react-router-dom";

//HOC
import DefaultHoc from "./hoc/Default.hoc";

//Components
import Temp from "./components/temp";

function App() {
  return (
    <>
      <DefaultHoc path = "/" exact component={Temp}/>
    
      
    </>

  );
}

export default App;