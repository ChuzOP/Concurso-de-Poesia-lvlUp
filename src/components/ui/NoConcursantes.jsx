import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Container, Typography } from "@mui/material";

const NoConcursantes = () => {
  let navigate = useNavigate();
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "calc(100vh - 100px)",
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",
      }}
    >
      <Typography variant="h2" fontWeight="bolder">
        Aun no hay concursantes
      </Typography>
      <Typography variant="h4">Volver al formulario?</Typography>
      <Button onClick={() => navigate("/", { replace: true })} variant='contained' >
        Formulario
      </Button>
    </Container>
  );
};

export default NoConcursantes;
