import React, { useState } from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { dataportfolio, meta } from "../../content_option";

export const Portfolio = () => {
  const [portfolioData, setPortfolioData] = useState(dataportfolio);

  const toggleContent = (index) => {
    const updatedData = [...portfolioData];
    updatedData[index].showContent = !updatedData[index].showContent;
    setPortfolioData(updatedData);
  };

  return (
    <HelmetProvider>
      <Container className='About-header'>
        <Helmet>
          <meta charSet='utf-8' />
          <title> My Projects | {meta.title}</title>
          <meta name='description' content={meta.description} />
        </Helmet>
        <Row className='mb-5 mt-3 pt-md-3'>
          <Col lg='8'>
            <h1 className='display-4 mb-4'>My projects</h1>
            <hr className='t_border my-4 ml-0 text-left' />
          </Col>
        </Row>

        {/* Mapping the projects */}
        <Row>
          {dataportfolio.map((project, index) => (
            <Col key={index} lg='12' className='mb-4'>
              <div className='portfolio-item'>
                <div className='center-content'>
                  <div className='project-header'>
                    <a onClick={() => toggleContent(index)}>
                      <h3>{project.projectTitle}</h3>
                    </a>
                    <button
                      className='toggle'
                      onClick={() => toggleContent(index)}
                    >
                      {project.showContent ? (
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width='20'
                          height='20'
                          fill='currentColor'
                          className='bi bi-chevron-up'
                          viewBox='0 0 16 16'
                        >
                          <path
                            fillRule='evenodd'
                            d='M1.646 11.646a.5.5 0 0 1 .708 0L8 5.293l5.646 5.647a.5.5 0 0 1-.708.708L8 6.707 2.354 12.354a.5.5 0 0 1-.708-.708z'
                          />
                        </svg>
                      ) : (
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width='20'
                          height='20'
                          fill='currentColor'
                          className='bi bi-chevron-down'
                          viewBox='0 0 16 16'
                        >
                          <path
                            fillRule='evenodd'
                            d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'
                          />
                        </svg>
                      )}
                    </button>
                  </div>

                  {project.showContent && (
                    <div className='project-content'>
                      <p className='portfolio-description'>
                        {project.description}
                      </p>
                      <div className='right-content'>
                        {project.images.map((image, idx) => (
                          <img
                            key={idx}
                            src={image}
                            alt={project.projectTitle}
                            className='project-image'
                          />
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </HelmetProvider>
  );
};

export default Portfolio;
