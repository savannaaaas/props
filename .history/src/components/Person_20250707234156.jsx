import Typography from "@mui/material/Typography";
export const Person = ({ name, age }) => {
  return (
    <Typography variant="h4" align="left" style={{ padding: "5px" }}>
      Name - {name}
      Age - {age}
    </Typography>
  );
};
