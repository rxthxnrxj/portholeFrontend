import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row, Col, Card } from "react-bootstrap";

function HomeScreen() {
  return (
    <div>
      <Container>
        <Row className="mt-5">
          <Col>
            <h4>About the App:</h4>
            <p>
              Gives a React based seamless “Navigation-Map” like experience for
              the user in displaying the presence of potholes en-route.
            </p>
          </Col>
          <Row className="text-center mt-5 p-0">
            <Card
              xl={12}
              className="shadow border-0"
              style={{ backgroundColor: "#A4A4A6", color: "white" }}
            >
              <Card.Body>
                <u>
                  <Card.Title>Guide</Card.Title>
                </u>
                <Card.Title>Dr. Lekshmi R. R.</Card.Title>
              </Card.Body>
            </Card>
          </Row>
          <Row className="mt-5 justify-content-between">
            <Col className="d-flex text-center" xl={3}>
              <Card>
                <Card.Body>
                  <Card.Title>Bhavana Kanna Vadupu</Card.Title>
                  <Card.Text>CB.EN.U4ELC19010</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col className="d-flex text-center" xl={3}>
              <Card style={{ width: "100%" }}>
                <Card.Body>
                  <Card.Title>Naresh R</Card.Title>
                  <Card.Text>CB.EN.U4ELC19031</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col className="d-flex text-center" xl={3}>
              <Card style={{ width: "100%" }}>
                <Card.Body>
                  <Card.Title style={{ fontWeight: "1000" }}>
                    Rathin Raj R S
                  </Card.Title>
                  <Card.Text>CB.EN.U4ELC19041</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col className="d-flex text-center" xl={3}>
              <Card style={{ width: "100%" }}>
                <Card.Body>
                  <Card.Title>Sadanya Gundu</Card.Title>
                  <Card.Text>CB.EN.U4ELC19045</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Row>
      </Container>
    </div>
  );
}

export default HomeScreen;
