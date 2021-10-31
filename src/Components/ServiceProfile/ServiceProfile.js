import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Layout } from '../Layout/Layout';
import ReactStars from "react-rating-stars-component";
import { render } from "react-dom";

export const ServiceProfile = () => {
    // change for rating
    


    useState(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
        <>
            <Layout
                title="Emergency Situation Handling System"
                description="Emergency Situation Handling System"
            >
                <section className="profileSection">
                    <Container>
                        <Row>
                            <Col md={8} className="centerPosition">
                                <div className="card-wrapper">
                                    <div className="card">
                                        <div class="number-label">
                                            <img src={"/images/fireman.png"} alt="Profile" />
                                        </div>
                                        <div className="ribbon-wrapper">
                                            <div className="ribbon">
                                                <span>Fire</span>
                                            </div>
                                        </div>
                                        <div className="card-inner">
                                            <h1>
                                                <strong>ID:</strong> 2001
                                            </h1>
                                            <p>
                                                <strong>Email:</strong> anikaahammed2@gmail.com
                                            </p>
                                            <p>
                                                <strong>Phone:</strong> 01935640880
                                            </p>
                                            <p>
                                                <strong>Phone Extra:</strong> 01935640880
                                            </p>
                                            <p>
                                                <strong>LAT:</strong> 4353465
                                            </p>
                                            <p>
                                                <strong>LNG:</strong> 12344
                                            </p>
                                            <p>
                                                <strong>Address:</strong> 43/2, Shorui Borokoborsthan
                                                Road, Bagerhat Sadar, Sadar, Khulna
                                            </p>
                                            <p>
                                                <strong>Thana:</strong>Sadar
                                            </p>
                                            <p>
                                                <strong>District:</strong>Khulna
                                            </p>
                                            <p>
                                                <strong>Added By:</strong> 20001
                                            </p>
                                            <div className="ratingBox">
                                                <div className="ratingText">
                                                    <p> <strong>Rating:</strong> </p>
                                                </div>
                                                <div className="ratingIcon">
                                                    <ReactStars
                                                        count={5}
                                                        value={3}
                                                        size={20}
                                                        edit={false}
                                                        activeColor="#ff304d "
                                                    />
                                                </div>
                                            </div>
                                            <div className="ratingBox">
                                                <div className="ratingText">
                                                    <p> <strong>Rating:</strong> </p>
                                                </div>
                                                <div className="ratingIcon">
                                                <ReactStars
                                                        count={5}
                                                        value={0}
                                                        size={20}
                                                        edit={true}
                                                        activeColor="#ff304d "
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col md={8} className="centerPosition">
                                <div className="card-wrapper">
                                    <div className="card">
                                        <div class="number-label">
                                            <img src={"/images/policeman.png"} alt="Profile" />
                                        </div>
                                        <div className="ribbon-wrapper">
                                            <div className="ribbon">
                                                <span>Police</span>
                                            </div>
                                        </div>
                                        <div className="card-inner">
                                            <h1>
                                                <strong>ID:</strong> 2001
                                            </h1>
                                            <p>
                                                <strong>Email:</strong> anikaahammed2@gmail.com
                                            </p>
                                            <p>
                                                <strong>Phone:</strong> 01935640880
                                            </p>
                                            <p>
                                                <strong>Phone Extra:</strong> 01935640880
                                            </p>
                                            <p>
                                                <strong>LAT:</strong> 4353465
                                            </p>
                                            <p>
                                                <strong>LNG:</strong> 12344
                                            </p>
                                            <p>
                                                <strong>Address:</strong> 43/2, Shorui Borokoborsthan
                                                Road, Bagerhat Sadar, Sadar, Khulna
                                            </p>
                                            <p>
                                                <strong>Thana:</strong>Sadar
                                            </p>
                                            <p>
                                                <strong>District:</strong>Khulna
                                            </p>
                                            <p>
                                                <strong>Added By:</strong> 20001
                                            </p>
                                            <div className="ratingBox">
                                                <div className="ratingText">
                                                    <p> <strong>Rating:</strong> </p>
                                                </div>
                                                <div className="ratingIcon">
                                                    <ReactStars
                                                        count={5}
                                                        value={3}
                                                        size={20}
                                                        edit={false}
                                                        activeColor="#ff304d "
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </Layout>
        </>
    )
}
