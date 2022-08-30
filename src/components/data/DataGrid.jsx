import React from "react";
import { Card, CardContent, Container, Grid, Typography } from "@mui/material";
import NoConcursantes from "../ui/NoConcursantes";

const DataGrid = () => {
  let concursantes = JSON.parse(localStorage.getItem("participantes"));
  const centrado = { display: "flex", justifyContent: "center" };
  return (
    <Grid container spacing={1}>
      {!concursantes ? (
        <NoConcursantes />
      ) : (
        concursantes.map((concursante, index) => (
          <Grid item xs={3} key={index} mb="25px">
            <Container>
              <Card sx={{ boxShadow: 3 }}>
                <CardContent>
                  <Grid container spacing={1} sx={{ borderRaidus: 8 }}>
                    <Grid item xs={12} sx={centrado}>
                      <Typography> {concursante.fullName} </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} sx={centrado}>
                      <Typography> {concursante.genero} </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} sx={centrado}>
                      <Typography> {concursante.dateOfBirth} </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} sx={centrado}>
                      <Typography> {concursante.carnet} </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} sx={centrado}>
                      <Typography> {concursante.carrer} </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} sx={centrado}>
                      <Typography> {concursante.tel} </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} sx={centrado}>
                      <Typography> {concursante.poetryGender} </Typography>
                    </Grid>
                    <Grid item xs={12} sx={centrado}>
                      <Typography> {concursante.address} </Typography>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Container>
          </Grid>
        ))
      )}
    </Grid>
  );
};

export default DataGrid;
