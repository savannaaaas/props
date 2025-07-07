import "./App.css";
import Box from "@mui/material/Box";
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
        width: 100,
        height: 100,
        borderRadius: 1,
        bgcolor: "primary.main",
      }}
    >
      <Person name={"Anna"} />
    </Box>
  );
}

export default App;
