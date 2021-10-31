import Button from "@restart/ui/esm/Button";
import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Layout } from "../Layout/Layout";
import "./Category.css";

export const Category = () => {
  useState(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <Layout
          title="Emergency Situation Handling System"
          description="Emergency Situation Handling System"
      >
        <section className="categorySection">
          <Container>
            <Row>
              <Col md={12}>
                <h1 className="text-center">
                  Emergency Services. Hi Anika
                </h1>
              </Col>

              <Col md={4} className="categoryCard">
                <div class="card">
                  <div class="card__image-container">
                    <img
                      class="card__image"
                      src={"/images/fire.jpg"}
                      alt=" "
                    />
                  </div>


                  <div class="card__content">
                    <h1 class="card__title">Fire Station</h1>
                    <p>
                      We believe in providing valuable insights for brands to
                      improve their presence on shelf and to be able to create
                      an impact at every single retailer and store in the
                      region.
                    </p>
                    <Button className="btn"> <Link to="/fire">Explore Service</Link></Button>
                   
                  </div>
                </div>
              </Col>
              <Col md={4} className="categoryCard">
                <div class="card">
                  <div class="card__image-container">
                    <img
                      class="card__image"
                      src={"/images/police.jpg"}
                      alt=" "
                    />
                  </div>


                  <div class="card__content">
                    <h1 class="card__title">Police Station</h1>
                    <p>
                      We believe in providing valuable insights for brands to
                      improve their presence on shelf and to be able to create
                      an impact at every single retailer and store in the
                      region.
                    </p>
                    <Button className="btn"> <Link to="/police">Explore Service</Link></Button>
                  </div>
                </div>
              </Col>
              <Col md={4} className="categoryCard">
                <div class="card">
                  <div class="card__image-container">
                    <img
                      class="card__image"
                      src={"/images/ambu.jpg"}
                      alt=" "
                    />
                  </div>


                  <div class="card__content">
                    <h1 class="card__title">Ambulance</h1>
                    <p>
                      We believe in providing valuable insights for brands to
                      improve their presence on shelf and to be able to create
                      an impact at every single retailer and store in the
                      region.
                    </p>
                    <Button className="btn"> <Link to="/police">Explore Service</Link></Button>
                  </div>
                </div>
              </Col>

            </Row>
          </Container>
        </section>
      </Layout>
    </>
  );
};
