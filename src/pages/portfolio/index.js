import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import { dataportfolio, meta } from "../../content_option";
// import { Link } from "react-router-dom";

export const Portfolio = () => {
  return (
    <HelmetProvider>
      <Container className='About-header'>
        <Helmet>
          <meta charSet='utf-8' />
          <title> Projects | {meta.title} </title>{" "}
          <meta name='description' content={meta.description} />
        </Helmet>
        <Row className='mb-5 mt-3 pt-md-3'>
          <Col lg='8'>
            <h1 className='display-4 mb-4'> Projects </h1>{" "}
            <hr className='t_border my-4 ml-0 text-left' />
          </Col>
        </Row>
      </Container>
      <Container>
        {dataportfolio.map((entry, index) => (
          <Accordion key={index}>
            <Accordion.Item eventKey={index}>
              <Accordion.Header>{entry.projectTitle}</Accordion.Header>
              <Accordion.Body>
                <p>{entry.description}</p>
                <img src={entry.image} />
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        ))}
      </Container>
    </HelmetProvider>
  );
};
