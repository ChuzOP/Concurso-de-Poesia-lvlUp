import React from "react";

import Inputs from "../components/data/Inputs";
import { Container } from "@mui/material";
import "../styles/home.css";

const Home = () => {
  return (
    <div className="home-container">
      <Container
        component="main"
        maxWidth="sm"
        sx={{
          backgroundColor: "white",
          borderRadius: 6,
          height: '530px'
        }}
      >
        <Inputs />
      </Container>
    </div>
  );
};

export default Home;
