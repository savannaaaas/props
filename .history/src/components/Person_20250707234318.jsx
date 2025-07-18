import Typography from "@mui/material/Typography";
export const Person = ({ name, age }) => {
  return (
    <>
      <Typography variant="h2" align="center" style={{ padding: "5px" }}>
        Profile person
      </Typography>
      <Typography variant="h4" align="left" style={{ padding: "5px" }}>
        Name - {name}
      </Typography>
      <Typography variant="h4" align="left" style={{ padding: "5px" }}>
        Age - {age}
      </Typography>
    </>
  );
};
