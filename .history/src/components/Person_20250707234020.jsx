import Typography from "@mui/material/Typography";
export const Person = ({ name }) => {
  return (
    <Typography variant="h4" align="left">
      Name - {name}
    </Typography>
  );
};
