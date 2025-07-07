import Typography from "@mui/material/Typography";
export const Person2 = ({ name, age, men, obj, sayHello, hobbies }) => {
  return (
    <>
      <Typography variant="subtitle1" align="left" style={{ padding: "5px" }}>
        {sayHello(name)}
      </Typography>
      <Typography variant="subtitle1" align="left" style={{ padding: "5px" }}>
        Name - {name}
      </Typography>
      <Typography variant="subtitle1" align="left" style={{ padding: "5px" }}>
        Age - {age}
      </Typography>
      <Typography variant="subtitle1" align="left" style={{ padding: "5px" }}>
        Gender - {men ? "men" : "female"}
      </Typography>
      <Typography variant="subtitle1" align="left" style={{ padding: "5px" }}>
        Country - {obj.country}
      </Typography>
      <Typography variant="subtitle1" align="left" style={{ padding: "5px" }}>
        Hobby - {hobbies[2]}
      </Typography>
    </>
  );
};
