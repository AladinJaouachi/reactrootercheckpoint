import React from "react";
import { Form } from "react-bootstrap";
import "../Css/CompFilter.css";

const CompFilter = ({setSearchTitleFilm,setsearchRateFilm}) => {
  return (
    <div className="searched">
      <Form className="d-flex">
        <Form.Control
          type="search"
          placeholder="Search by title"
          className="recherche"
          aria-label="Search"
          onChange={(event) => setSearchTitleFilm(event.target.value)}
        />
      </Form>

      <Form className="d-flex">
        <Form.Control
          type="search"
          placeholder="Search by rate"
          className="recherche"
          aria-label="Search"
          onChange={(event) => setsearchRateFilm(event.target.value)}
        />
      </Form>
    </div>
  );
};

export default CompFilter;
