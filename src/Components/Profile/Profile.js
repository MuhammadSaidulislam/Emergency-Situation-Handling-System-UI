import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Layout } from "../Layout/Layout";
import "./Profile.css";

export const Profile = () => {
  // state
  const [edit, setEdit] = useState(false);

  //toggle edit button
  const toggleEdit = () => {
    setEdit(!edit);
  };
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
              <Col md={7} className="centerPosition">
                <Row className="profile">
                  <Col md={12} className="profileImg">
                   
                    <div className="float-end">
                      {!edit && (
                        <button
                          type="button"
                          className="btn btn-warning"
                          onClick={() => toggleEdit()}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-2 w-2"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            width="20px" 
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                            />
                          </svg>
                          Edit
                        </button>
                      )}

                      {edit && (
                        <button
                          type="button"
                          className="btn btn-success"
                          onClick={() => toggleEdit()}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            width="20px"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"
                            />
                          </svg>
                          Save
                        </button>
                      )}
                    </div>
                  </Col>
                  <Col md={12}>
                    {!edit && (
                      <div className="profileInfo">
                        <h1>Name: Saidul Islam</h1>
                        <p><strong>Email:</strong> saidul@gmail.com</p>
                        <p><strong>Phone:</strong> 01632663430</p>
                        <p><strong>Phone Extra:</strong> 01632663430</p>
                        <p><strong>Blood Group:</strong> AB+</p>
                        <p><strong>Gender:</strong> Male</p>
                        <p><strong>Address:</strong> Narayanganj,Bangladesh</p>
                        <p><strong>Thana:</strong> Fatullah</p>
                        <p><strong>District:</strong> Narayanganj</p>
                      </div>
                    )}

                    {edit && (
                      <div className="profileInfo">
                        <p>Name:</p>
                        <input type="text" value="Saidul Islam" />

                        <p>Email:</p>
                        <input type="text" value="saidul@gmail.com" />

                        <p>Phone:</p>
                        <input type="text" value=" 01632663430" />

                        <p>Phone Extra:</p>
                        <input type="text" value=" 01632663430" />
                        <p>Blood Group:</p>
                        <input type="text" value="AB+" />

                        <p>Gender:</p>
                        <input type="text" value="Male" />
                        <p>Address:</p>
                        <input type="text" value="Narayanganj,Bangladesh" />
                        <p>Thana:</p>
                        <input type="text" value="Fatullah" />

                        <p>District:</p>
                        <input type="text" value="Narayanganj" />
                      </div>
                    )}
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </section>
      </Layout>
    </>
  );
};
