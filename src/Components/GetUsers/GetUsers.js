import React, { useState } from 'react';
import { Col, Container, Pagination, Row, Table } from "react-bootstrap";
import { Layout } from "../Layout/Layout";
import { Link } from 'react-router-dom';

export const GetUsers = () => {
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
                                <h1 className="text-center">User List</h1>
                            </Col>
                            <Col md={12}>
                                <Table striped bordered hover className="text-center">
                                    <thead>
                                        <tr style={{ backgroundColor: '#222', color: '#ff304d' }}>
                                            <th>List No</th>
                                            <th>ID</th>
                                            <th>E-mail</th>
                                            <th>Phone</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>01</td>
                                            <td>
                                            1000
                                            </td>
                                            <td>sumonbiswas2010@gmail.com</td>
                                            <td>01672836364</td>
                                        
                                        </tr>
                                        <tr>
                                            <td>02</td>
                                            <td>
                                                1001
                                            </td>
                                            <td>sumonbiswas2010@gmail.com</td>
                                            <td>01672836364</td>
                                        </tr>
                                        <tr>
                                            <td>03</td>
                                            <td>
                                    1002
                                            </td>
                                            <td>sumonbiswas2010@gmail.com</td>
                                            <td>01672836364</td>
                                          
                                        </tr>
                                        <tr>
                                            <td>04</td>
                                            <td>
                                              1003
                                            </td>
                                            <td>sumonbiswas2010@gmail.com</td>
                                            <td>01672836364</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </Col>
                        </Row>
                        <Row>

                            <Col md={12}>
                                <div className="servicePagination">
                                    <Pagination>
                                        <Pagination.Prev />
                                        <Pagination.Item>{1}</Pagination.Item>
                                        <Pagination.Item>{2}</Pagination.Item>
                                        <Pagination.Item>{3}</Pagination.Item>
                                        <Pagination.Item active>{4}</Pagination.Item>
                                        <Pagination.Item>{5}</Pagination.Item>
                                        <Pagination.Ellipsis />
                                        <Pagination.Next />
                                    </Pagination>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </Layout>
        </>
    )
}
