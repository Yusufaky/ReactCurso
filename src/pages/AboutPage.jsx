import React from "react";
import { Link } from "react-router-dom";

import Card from "../components/shared/Card";
function AboutPage() {
  return (
    <Card>
      <div className="about">
        <h1> About do projecto</h1>
        <p>versao 1</p>
        <p>
          <Link to="/">Voltar</Link>
        </p>
      </div>
    </Card>
  );
}

export default AboutPage;
