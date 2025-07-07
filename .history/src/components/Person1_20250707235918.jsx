import Typography from "@mui/material/Typography";
export const Person1 = ({ name, age, men, obj, sayHello, hobbies }) => {
  return (
    <>
      <Typography variant="h2" align="center" style={{ padding: "5px" }}>
        Profile person
      </Typography>
      <Typography variant="h4" align="center" style={{ padding: "5px" }}>
        {sayHello(name)}
      </Typography>

      <Typography variant="h4" align="left" style={{ padding: "5px" }}>
        Name - {name}
      </Typography>
      <Typography variant="h4" align="left" style={{ padding: "5px" }}>
        Age - {age}
      </Typography>
      <Typography variant="h4" align="left" style={{ padding: "5px" }}>
        Gender - {men ? "men" : "female"}
      </Typography>
      <Typography variant="h4" align="left" style={{ padding: "5px" }}>
        Country - {obj.country}
      </Typography>
      <Typography variant="h4" align="left" style={{ padding: "5px" }}>
        Hobby - {hobbies[1]}
      </Typography>
    </>
  );
};
