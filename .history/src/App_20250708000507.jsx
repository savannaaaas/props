import "./App.css";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Person1 } from "./components/Person1";
import { Person2 } from "./components/Person2";
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
  const hobbies = ["swim", "sing", "play vollleyball", "play basketball"];
  return (
    <Box
      sx={{
        width: 500,
        height: 500,
        borderRadius: 1,
        bgcolor: "pink",
      }}
    >
      <Typography variant="h2" align="center" style={{ padding: "5px" }}>
        Profile person
      </Typography>
      <Person1
        name={"Anna"}
        age={5}
        men={false}
        obj={obj}
        sayHello={sayHello}
        hobbies={hobbies}
      />
      <Person2
        name={"Anna"}
        age={5}
        men={false}
        obj={obj}
        sayHello={sayHello}
        hobbies={hobbies}
      />
      <Person3
        name={"Anna"}
        age={5}
        men={false}
        obj={obj}
        sayHello={sayHello}
        hobbies={hobbies}
      />
      <Person4
        name={"Anna"}
        age={5}
        men={false}
        obj={obj}
        sayHello={sayHello}
        hobbies={hobbies}
      />
      <Person5
        name={"Anna"}
        age={5}
        men={false}
        obj={obj}
        sayHello={sayHello}
        hobbies={hobbies}
      />
    </Box>
  );
}

export default App;
