import { useEffect, useState } from "react";

import {
  Box,
  Button,
  Container,
  Grid,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";

import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";

//array de opciones

const Inputs = () => {
  const generos = [
    { value: "Masculino" },
    { value: "Femenino" },
    { value: "Otro" },
  ];

  const categorias = [
    { value: "Lírica" },
    { value: "Épica" },
    { value: "Dramática" },
  ];
  //estados
  let concursantes = JSON.parse(localStorage.getItem("participantes")) || [];

  const [dataParticipante, setDataParticipante] = useState({
    id: uuidv4(),
    fullName: "",
    genero: "",
    dateOfBirth: "",
    carnet: "",
    carrer: "",
    tel: "",
    poetryGender: "",
    address: "",
  });
  const [participantes, setParticipantes] = useState(concursantes);

  //handleFunctions
  const handleChange = (e) => {
    setDataParticipante({
      ...dataParticipante,
      [e.target.name]: e.target.value,
    });
  };

  let navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setParticipantes([...participantes, dataParticipante]);
    // localStorage.setItem("participantes", JSON.stringify(participantes));
    navegacion();
  };

  const navegacion = () =>{
    setTimeout( () => (
      navigate( `/concursoDate/${dataParticipante.id}` )
    ), 2000 )
  }

  useEffect(() => {
    localStorage.setItem("participantes", JSON.stringify(participantes));
  }, [participantes]);

  

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography variant="h4" mt="15px" fontWeight="bolder">
        Formulario de Participantes
      </Typography>
      <Box component="form" sx={{ mt: 3 }} onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              name="fullName"
              type="text"
              inputProps={{
                pattern: "^[a-zA-ZÀ-ÿ\\s]{1,40}$",
                title: "El nombre no debe contener caracteres alfanúmericos",
              }}
              label="Nombre Completo"
              placeholder="Juan Perez"
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              name="genero"
              value={dataParticipante.genero}
              label="Género"
              select
              onChange={handleChange}
            >
              {generos.map((genero) => (
                <MenuItem key={genero.value} value={genero.value}>
                  {genero.value}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              name="dateOfBirth"
              label="Fecha de nacimiento"
              type="date"
              InputLabelProps={{ shrink: true }}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            {/* <TextField
              required
              fullWidth
              name="carnet"
              label="No. carnet"
              placeholder="Ax5xx1"
              type="text"
              // inputProps={{
              //   pattern: "/^A\d[5]\d\d[1,3,9]$/",
              //   title:
              //     "La longitud del carnet debe de ser mayor a 6 caracteres, debe empezar con A, el tercer caracter debe de ser 5 y el último caracter debe ser 1, 3 o 9",
              // }}
              onChange={handleChange}
            /> */}
            <input
              className="textfield-input"
              required={true}
              name="carnet"
              placeholder="  Carnet *"
              type="text"
              onChange={handleChange}
              pattern="^A\d[5]\d\d[1,3,9]$"
              title="La longitud del carnet debe de ser mayor a 6 caracteres, debe empezar con A, el tercer caracter debe de ser 5 y el último caracter debe ser 1, 3 o 9"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              name="carrer"
              label="Carrera"
              placeholder="Ingenieria"
              type="text"
              inputProps={{
                pattern: "[a-zA-ZÀ-ÿ]{1,40}",
                title: "La carrera no debe llevar caracteres alfanúmericos",
              }}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              name="tel"
              label="Teléfono"
              placeholder="12345678"
              type="text"
              inputProps={{
                pattern: "[0-9]{8,16}$",
                title:
                  "El numero de telefono no debe tener letras y debe ser de minimo 8 digitos",
              }}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              name="poetryGender"
              value={dataParticipante.poetryGender}
              label="Género de Poesia"
              select
              onChange={handleChange}
            >
              {categorias.map((categoria) => (
                <MenuItem key={categoria.value} value={categoria.value}>
                  {categoria.value}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              label="Dirección"
              name="address"
              placeholder="Zona 7, Bethania"
              onChange={handleChange}
              inputProps={{
                pattern: "[a-zA-ZÀ-ÿ0-9\\s]{1,60}$",
                title: "La Dirección no debe llevar caracteres alfanúmericos",
              }}
            />
          </Grid>
        </Grid>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2, fontWeight: "bolder" }}
        >
          Enviar
        </Button>
      </Box>
    </Container>
  );
};

export default Inputs;
