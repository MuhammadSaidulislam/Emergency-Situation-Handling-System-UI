import Button from "@restart/ui/esm/Button";
import React, { useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { Layout } from "../Layout/Layout";
import "./GetServices.css";

const GetServices = () => {
  useState(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <Layout
        title="Emergency Situation Handling System"
        description="Emergency Situation Handling System"
      >
        <section className="serviceSection">
          <Container>
            <Row>
              <Col md={12} className="serviceHeading">
                <h1 className="text-center">Get Services</h1>
              </Col>
            </Row>
            <Row>
              <Col md={6} className="centerPosition getService">
                <Form>
                  <Form.Group className="mb-3">
                    <Form.Label>Select Category</Form.Label>
                    <Form.Select aria-label="Default select example">
                      <option>Service Type</option>
                      <option value="1">Fire Services</option>
                      <option value="2">Police Station</option>
                      <option value="3">Others</option>
                    </Form.Select>
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Select your Location</Form.Label>
                    <Form.Select aria-label="Default select example">
                      <option>Choose area</option>
                      <option value="1">Registered Location</option>
                      <option value="2">Other Location</option>
                    </Form.Select>
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Other Service</Form.Label>
                    <Form.Control type="text" placeholder="Other Service" />
                  </Form.Group>
                  <div className="serviceBtn">
                  <Button type="submit" className="btn">Get Help Now</Button>
                  </div>

                </Form>
              </Col>
            </Row>
          </Container>
        </section>
      </Layout>
    </>
  );
};

export default GetServices;
