import Button from "@restart/ui/esm/Button";
import React, { useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { Layout } from "../Layout/Layout";

export const AddService = () => {
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
                            <Col md={6} className="centerPosition getService">
                            <div className="serviceHeading">
                                <h1 className="text-center">Add Services</h1>
                            </div>
                                <Form>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Phone</Form.Label>
                                        <Form.Control type="text" placeholder="Enter your phone number" />
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Label>E-mail</Form.Label>
                                        <Form.Control type="text" placeholder="Enter your e-mail" />
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="password" placeholder="Enter your Password" />
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Label>District</Form.Label>
                                        <Form.Control type="text" placeholder="Enter your district" />
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Select Service</Form.Label>
                                        <Form.Select aria-label="Default select example">
                                            <option>Service Type</option>
                                            <option value="1">Fire Services</option>
                                            <option value="2">Police Station</option>
                                            <option value="3">Others</option>
                                        </Form.Select>
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Phone Extra</Form.Label>
                                        <Form.Control type="text" placeholder="Enter your extra phone number" />
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Thana</Form.Label>
                                        <Form.Control type="text" placeholder="Enter your thana" />
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Address</Form.Label>
                                        <Form.Control type="text" placeholder="Enter your address" />
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Latitude</Form.Label>
                                        <Form.Control type="text" placeholder="Enter your latitude" />
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Longitude</Form.Label>
                                        <Form.Control type="text" placeholder="Enter your longitude" />
                                    </Form.Group>

                                    <div className="serviceBtn">
                                        <Button type="submit" className="btn">Add Service</Button>
                                    </div>

                                </Form>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </Layout>
        </>
    )
}
