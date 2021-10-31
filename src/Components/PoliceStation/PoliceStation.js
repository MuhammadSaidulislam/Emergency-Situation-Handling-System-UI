import React, { useState } from 'react';
import { Col, Container, Row, Pagination, Table } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { Layout } from "../Layout/Layout";


export const PoliceStation = () => {
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
                <h1 className="text-center">Police Station Services</h1>
              </Col>
              <Col md={12}>
                <Table striped bordered hover className="text-center">
                  <thead>
                    <tr style={{ backgroundColor: '#222', color: '#ff304d' }}>
                      <th>List No</th>
                      <th>ID</th>
                      <th>E-mail</th>
                      <th>Phone</th>
                      <th>Address</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>01</td>
                      <td>
                        <Link to="details">1000</Link>
                      </td>
                      <td>sumonbiswas2010@gmail.com</td>
                      <td>01672836364</td>
                      <td>43/2, Shorui Borokoborsthan Road, Bagerhat Sadar, Bagerhat Sadar, Bagerhat</td>
                    </tr>
                    <tr>
                    <td>02</td>
                      <td>
                        <Link to="details">1001</Link>
                      </td>
                      <td>sumonbiswas2010@gmail.com</td>
                      <td>01672836364</td>
                      <td>43/2, Shorui Borokoborsthan Road, Bagerhat Sadar, Bagerhat Sadar, Bagerhat</td>
                    </tr>
                    <tr>
                    <td>03</td>
                      <td>
                        <Link to="details">1002</Link>
                      </td>
                      <td>sumonbiswas2010@gmail.com</td>
                      <td>01672836364</td>
                      <td>43/2, Shorui Borokoborsthan Road, Bagerhat Sadar, Bagerhat Sadar, Bagerhat</td>
                    </tr>
                    <tr>
                    <td>04</td>
                      <td>
                        <Link to="details">1003</Link>
                      </td>
                      <td>sumonbiswas2010@gmail.com</td>
                      <td>01672836364</td>
                      <td>43/2, Shorui Borokoborsthan Road, Bagerhat Sadar, Bagerhat Sadar, Bagerhat</td>
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
