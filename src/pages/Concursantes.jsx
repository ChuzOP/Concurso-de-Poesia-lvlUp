import { Typography } from "@mui/material";
import React from "react";
import DataGrid from "../components/data/DataGrid";
import "../styles/concursantes.css";

const Concursantes = () => {
  return (
    <div className="concursantes-container">
      <div className="content-container">
        <Typography variant="h3" fontWeight="bolder" mb="25px" mt="25px">
          Listado de concursantes
        </Typography>
        <DataGrid />
      </div>
    </div>
  );
};

export default Concursantes;
