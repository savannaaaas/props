import Typography from "@mui/material/Typography";
export const Person = ({ name }) => {
  return (
    <Typography variant="h4" align="left" style={{ padding: "8px" }}>
      Name - {name}
    </Typography>
  );
};
