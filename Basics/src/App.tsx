import { useState } from "react";
import Alert from "./components/alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";
function App() {
  let items = ['NewYork','SanFrancisko','Atlanta','Japan'];
  const handleSelectItem = (item : string) => console.log(item);
  const [alertVisible,setAlertVisibility] = useState(false);
  return (
    <div>
      {alertVisible && <Alert onClose ={()=> setAlertVisibility(false)}> <div>Alert Message incoming </div></Alert>}
      <Button type="primary" onClick={() => setAlertVisibility(true)}> Alert </Button>
      <ListGroup items={items} heading= "Cities" onSelectItem={handleSelectItem} />
    </div>
  )
}

export default App;