import "./App.css";
import Box from "@mui/material/Box";
import { Person } from "./components/Person";
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
  return (
    <Box
      sx={{
        width: 500,
        height: 500,
        borderRadius: 1,
        bgcolor: "pink",
      }}
    >
      <Person name={"Anna"} age={5} man={false} />
    </Box>
  );
}

export default App;
