import React, { useState } from 'react';
import { Col, Container, Dropdown, Form, Row, Table } from "react-bootstrap";
import { Layout } from "../Layout/Layout";
import './MyService.css';

export const MyService = () => {
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
                                <h1 className="text-center">My Services</h1>
                            </Col>
                            <Col md={10} className="centerPosition">
                                <div className="serviceDropdown">
                                    <Form.Select aria-label="Default select example">
                                        <option>Choose service</option>
                                        <option value="1">Fire service</option>
                                        <option value="2">Ambulance</option>
                                        <option value="3">Police station</option>
                                    </Form.Select>
                                </div>
                                <Table striped bordered hover className="text-center">
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>Service Type</th>
                                            <th>Status</th>
                                            <th>Creation Time</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1000</td>
                                            <td>Fire Service</td>
                                            <td>Pending</td>
                                            <td>2021-10-28</td>
                                        </tr>
                                        <tr>
                                            <td>1001</td>
                                            <td>Fire Service</td>
                                            <td>Pending</td>
                                            <td>2021-10-28</td>
                                        </tr>
                                        <tr>
                                            <td>1002</td>
                                            <td>Fire Service</td>
                                            <td>Pending</td>
                                            <td>2021-10-28</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </Layout>
        </>
    )
}
