import "./App.css";
import Box from "@mui/material/Box";
import { Person1 } from "./components/Person1";
/**1. Создать 6 любых компонент.
2. В компоненты передать props следующих типов данных:
number
string
boolean
object
function
array
3. Использовать в компонентах каждый prop.
4. Сделать деструктуризацию props. */
function App() {
  const obj = { country: "Minsk" };
  const sayHello = (name) => ` Hello, ${name}`;
  const hobbies = ["swim", "sing", "play vollleyball"];
  return (
    <Box
      sx={{
        width: 500,
        height: 500,
        borderRadius: 1,
        bgcolor: "pink",
      }}
    >
      <Person1
        name={"Anna"}
        age={5}
        men={false}
        obj={obj}
        sayHello={sayHello}
      />
    </Box>
  );
}

export default App;
