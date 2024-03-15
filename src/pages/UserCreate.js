import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";

export default function UserCreate() {
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      fname: fname,
      lname: lname,
      username: username,
      email: email,
      avatar: avatar,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("https://www.melivecode.com/api/users/create", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        alert(result["message"]);
        if (result["status"] === "ok") {
          window.location.href = "/";
        }
      })
      .catch((error) => console.error(error));
    // console.log("Form submitted:", { fname, lname, username, email, avatar });
  };
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [avatar, setAvatar] = useState("");

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm" sx={{ p: 2 }}>
        <Typography variant="h6" color="initial">
          Create new user
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            "& .MuiTextField-root": { m: 1, width: "25ch" },
            "& .MuiButton-root": { m: 1, width: "25ch" }, // Set width for button to 100%
          }}
          noValidate
          autoComplete="off"
        >
          <div>
            <TextField
              required
              id="fname"
              label="First Name"
              onChange={(e) => setFname(e.target.value)}
            />
            <TextField
              required
              id="lname"
              label="Last Name"
              onChange={(e) => setLname(e.target.value)}
            />
            <TextField
              required
              id="username"
              label="Username"
              onChange={(e) => setUsername(e.target.value)}
            />
            <TextField
              required
              id="email"
              label="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              required
              id="avatar"
              label="Avatar"
              onChange={(e) => setAvatar(e.target.value)}
            />
          </div>
          <Button type="submit" fullWidth variant="contained">
            Create
          </Button>
        </Box>
      </Container>
    </React.Fragment>
  );
}
