"use client"
import { Box, Typography, Paper, Grid, Avatar, TextField, FormControlLabel, Checkbox, Button } from '@mui/material';
import { useSession } from 'next-auth/react'
import React, { useState } from 'react'

export default function Profile() {
  const { data: session } = useSession();
  const names = session?.user?.name ? session.user.name.split(" ") :[];
  const firstName = names[0];
  const lastName = names.length > 1 ? names[names.length - 1] : "";
  const [formData, setFormData] = useState({
    firstName: firstName,
    lastName: lastName,
    email: session?.user?.email,
    password: "",
    confirmPassword: "",
  });

  const handleFormChange = (event:any) => {
    const { name, value, checked } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: name === "receiveEmails" ? checked : value,
    }));
  };

  const handleSubmit = (event:any) => {
    event.preventDefault();
    console.log(formData); 
  };


  return <>
   <h1>Profile</h1>
      <Box>
        <Typography variant={"h4"} sx={{ paddingBottom: 4 }}>
          Hey {session ? session?.user?.name : "User"}, welcome to your profile
          👋
        </Typography>
        <Paper sx={{ padding: "1rem 2rem" }}>
          <Grid container justifyContent="center">
            <Grid item xs={12} sm={8} md={6}>
              <Box display="flex" flexDirection="column" alignItems="center">
                <Avatar
                  sx={{
                    height: 100,
                    width: 100,
                    marginBottom: 2,
                  }}
                  src={session?.user?.image as string}
                />
              </Box>
              <form
                onSubmit={handleSubmit}
                style={{ maxWidth: 600, margin: "0 auto" }}
              >
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      label="First Name"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleFormChange}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      label="Last Name"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleFormChange}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      type="email"
                      label="Email"
                      name="email"
                      value={formData.email}
                      onChange={handleFormChange}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      type="password"
                      label="Password"
                      name="password"
                      value={formData.password}
                      onChange={handleFormChange}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      type="password"
                      label="Confirm Password"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleFormChange}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button type="submit" variant="contained" color="success">
                      Save Changes
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Grid>
          </Grid>
        </Paper>
      </Box>
  
  </>
}
