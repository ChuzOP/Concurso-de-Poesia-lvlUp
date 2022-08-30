import React from "react";

import { Box, Card, CardContent, Typography } from "@mui/material";
import { useParams } from 'react-router-dom';

import "../styles/concursoDay.css";

const ConcursoDay = () => {
  let concursantes = JSON.parse(localStorage.getItem("participantes"));

  const {id} = useParams();

  const getConcursante = (id) => {
    const concursante = concursantes.find( (concur) => concur.id === id);

    return concursante;
  }

  const concursante = getConcursante(id);

  let sujeto1 = concursante;
  let lastChar = sujeto1.carnet.charAt(5);
  let poetryGender = sujeto1.poetryGender;
  let dateOfBirth = sujeto1.dateOfBirth;
  let inscriptionDay = new Date();


  function calcAge(fecha) {
    let today = new Date();
    let birthDay = new Date(fecha);
    let edad = today.getFullYear() - birthDay.getFullYear();
    let month = today.getMonth() - birthDay.getMonth();
    if (month < 0 || (month === 0 && today.getDate() < birthDay.getDate())) {
      edad--;
    }
    return edad;
  }

  function calcDate(fecha, dias) {
    fecha.setDate(fecha.getDate() + dias);
    return fecha.toLocaleDateString("en-GB");
  }

  let days;
  if (lastChar === "1" && poetryGender === "Dramática") {
    days = 5;
    console.log("+5");
  }
  else if (lastChar === "3" && poetryGender === "Épica") {
    days = 7;
    console.log("+7");
  }
  else if (
    lastChar === ("1" || "3" || "9") && poetryGender === ("Dramática" || "Épica" || "Lírica")
  ) {
    days = 9;
    console.log("+9");
  }

  const edadActual = calcAge(dateOfBirth);
  const declamationDay = calcDate(inscriptionDay, days);

  return (
    <div className="concurso-container">
      <div className="concurso-content">
        <Box sx={{ minWidth: 575 }}>
          <Card variant="outlined" sx={{ height: "350px" }}>
            <CardContent
              sx={{
                display: "flex",
                flexDirection: " column",
                alignItems: "center",
                justifyContent: "center",
                height: "100%",
              }}
            >
              {edadActual >= "17" ? (
                <>
                  <Typography variant="h4" fontWeight="bolder">
                    Fecha de declamación:
                  </Typography>
                  <Typography variant="h4" mt="10px">
                    {declamationDay}
                  </Typography>
                </>
              ) : (
                <>
                  <Typography variant="h4" fontWeight="bolder">
                    No podra declamar...
                  </Typography>
                  <Typography variant="h4" mt="10px">
                    Usted es menor de 17 años
                  </Typography>
                </>
              )}
            </CardContent>
          </Card>
        </Box>
      </div>
    </div>
  );
};

export default ConcursoDay;
