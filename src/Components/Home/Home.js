import React, { useEffect, useState } from "react";
import { Card, CardGroup, Carousel, Col, Container, Row } from "react-bootstrap";
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import { Layout } from "../Layout/Layout";
import './Home.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Button from "@restart/ui/esm/Button";



const Home = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  useState(() => {
    window.scrollTo(0, 0)
  }, [])
  return <>
  <Layout
   title="Emergency Situation Handling System"
   description="Emergency Situation Handling System"
    >
    <section>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100" style={{ height: '100vh' }}
            src="https://livedemo00.template-help.com/joomla_52578/images/slider/slide-1.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3 data-aos="fade-up" data-aos-duration="2000">Police Stations Service</h3>
            <p data-aos="fade-up" data-aos-duration="3000">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100" style={{ height: '100vh' }}
            src="http://smartdemowp.com/firbrigs/wp-content/uploads/2020/09/banner-3.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
          <h3 data-aos="fade-up" data-aos-duration="2000">Fire Station Service</h3>
            <p data-aos="fade-up" data-aos-duration="3000">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100" style={{ height: '100vh' }}
            src="https://images.unsplash.com/photo-1615461066159-fea0960485d5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Ymxvb2QlMjBkb25hdGlvbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
            alt="Third slide"
          />

          <Carousel.Caption>
          <h3 data-aos="fade-up" data-aos-duration="2000">Blood Donation Service</h3>
            <p data-aos="fade-up" data-aos-duration="3000">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100" style={{ height: '100vh' }}
            src="https://www.rrp.com.au/wp-content/uploads/2017/06/ambulance-called.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
          <h3 data-aos="fade-up" data-aos-duration="2000">Ambulance Service</h3>
            <p data-aos="fade-up" data-aos-duration="3000">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </section>

    <section className="cardSection">
      <Container>
        <Row>
          <Col md={12}>
            <h1 className="text-center">Services We’re Offering</h1>
          </Col>
          <Col md={3}>
            <CardGroup>
              <Card>
                <Card.Img variant="top" src="https://pngimage.net/wp-content/uploads/2018/06/police-station-png-1.png" />
                <Card.Body>
                  <Card.Title>Police Station</Card.Title>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in to
                    additional content. This content is a little bit longer.
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  {/* <small className="text-muted">Last updated 3 mins ago</small> */}
                  <Button variant="secondary"className="cardBtn btn">SEE MORE</Button>
                </Card.Footer>
              </Card>
            </CardGroup>
          </Col>
          <Col md={3}>
            <CardGroup>
              <Card>
                <Card.Img variant="top" src="https://png.pngtree.com/png-clipart/20200701/original/pngtree-red-fire-station-house-png-image_5402814.jpg" />
                <Card.Body>
                  <Card.Title>Fire Station</Card.Title>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in to
                    additional content. This content is a little bit longer.
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                <Button variant="secondary"className="cardBtn btn">SEE MORE</Button>
                </Card.Footer>
              </Card>
            </CardGroup>
          </Col>
          <Col md={3}>
            <CardGroup>
              <Card>
                <Card.Img variant="top" src="data:image/jpeg;base64,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" />
                <Card.Body>
                  <Card.Title>Ambulance Station</Card.Title>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in to
                    additional content. This content is a little bit longer.
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                <Button variant="secondary"className="cardBtn btn">SEE MORE</Button>
                </Card.Footer>
              </Card>
            </CardGroup>
          </Col>
          <Col md={3}>
            <CardGroup>
              <Card>
                <Card.Img variant="top" src="https://media.istockphoto.com/vectors/donate-blood-concept-with-blood-bag-and-heart-blood-donation-vector-vector-id1033906526" />
                <Card.Body>
                  <Card.Title>Blood Donations</Card.Title>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in to
                    additional content. This content is a little bit longer.
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                <Button variant="secondary"className="cardBtn btn">SEE MORE</Button>
                </Card.Footer>
              </Card>
            </CardGroup>
          </Col>
        </Row>
      </Container>
    </section>

    <section className="counterSection">
      <Container>
        <Row>
          <Col md={3}>
            <div className="counterNumber">
              <CountUp end={100} duration={2.75} redraw={true}>
                {({ countUpRef, start }) => (
                  <VisibilitySensor onChange={start} delayedCall>
                    <span ref={countUpRef} />
                  </VisibilitySensor>
                )}
              </CountUp>
              <p>Police services</p>
            </div>
          </Col>
          <Col md={3}>
            <div className="counterNumber">
              <CountUp end={100} duration={2.75} redraw={true}>
                {({ countUpRef, start }) => (
                  <VisibilitySensor onChange={start} delayedCall>
                    <span ref={countUpRef} />
                  </VisibilitySensor>
                )}
              </CountUp>
              <p>Fire station services</p>
            </div>
          </Col>
          <Col md={3}>
            <div className="counterNumber">
              <CountUp end={100} duration={2.75} redraw={true}>
                {({ countUpRef, start }) => (
                  <VisibilitySensor onChange={start} delayedCall>
                    <span ref={countUpRef} />
                  </VisibilitySensor>
                )}
              </CountUp>
              <p>Ambulance services</p>
            </div>
          </Col>
          <Col md={3}>
            <div className="counterNumber">
              <CountUp end={100} duration={2.75} redraw={true}>
                {({ countUpRef, start }) => (
                  <VisibilitySensor onChange={start} delayedCall>
                    <span ref={countUpRef} />
                  </VisibilitySensor>
                )}
              </CountUp>
              <p>Blood Donations</p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>

    </Layout>
  </>;
};

export default Home;
