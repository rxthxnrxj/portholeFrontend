import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import {
  Row,
  Col,
  Card,
  Image,
  Button,
  Container,
  Form,
  FloatingLabel,
} from "react-bootstrap";
import camera from "./camera.js";
import Webcam from "react-webcam";

import { getPothole, sendImage } from "../actions/potholeActions";

import "../images/LastRow.png";
import "../images/LastRowNtg.png";
import "../images/MiddleRow.png";
import "../images/MiddleRowNtg.png";
import "../images/FirstRow.png";
import "../images/FirstRowNtg.png";
import "../images/RoadBorderLeft.png";
import "../images/RoadBorderRight.png";
import Loader from "../components/Loader.js";

function DeployScreen({ history }) {
  const WebcamComponent = () => <Webcam />;

  const videoConstraints = {
    width: 600,
    height: 400,
    facingMode: "user",
  };

  const webcamRef = React.useRef(null);

  const [potholes, setPotholes] = useState([]);
  const [imageText, setImageText] = useState("");
  const [locStatus, setLocStatus] = useState(false);

  const dispatch = useDispatch();

  const [v1, setV1] = useState();
  const [v2, setV2] = useState();
  const [v3, setV3] = useState();
  const [v4, setV4] = useState();
  const [v5, setV5] = useState();
  const [v6, setV6] = useState();
  const [v7, setV7] = useState();
  const [v8, setV8] = useState();
  const [v9, setV9] = useState();

  const videoRef = useRef(null);
  let photoRef = useRef(null);

  const [curSpeed, setCurSpeed] = useState(0);
  const [direction, setDirection] = useState(0);

  const [lon, setLon] = useState("");
  const [lat, setLat] = useState("");

  //testing
  // setLat(13.1334144);
  // setLon(80.1308672);

  const getPotholeRed = useSelector((state) => state.getPotholeRed);
  const { loading, error, pothole } = getPotholeRed;

  const sendImageRed = useSelector((state) => state.sendImageRed);
  const { loadingImgRed, errorImgRed, successImgRed, imageDataRed } =
    sendImageRed;

  const [trigger, setTrigger] = useState(Date.now());

  useEffect(() => {
    if (lon && lat) {
      setLocStatus(true);
      console.log(lon, lat);
      dispatch(getPothole(lon, lat));
    }
  }, [lon, lat]);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.watchPosition(function (position) {
        setLat(position.coords.latitude);
        setLon(position.coords.longitude);
        setCurSpeed(position.coords.speed);
        setDirection(position.coords.heading);
        console.log("Latitude is :", position.coords.latitude);
        console.log("Longitude is :", position.coords.longitude);
        setLocStatus(true);
      });
    }
  }, [navigator.geolocation]);

  useEffect(() => {
    setV1(pothole.v1);
    setV2(pothole.v2);
    setV3(pothole.v3);
    setV4(pothole.v4);
    setV5(pothole.v5);
    setV6(pothole.v6);
    setV7(pothole.v7);
    setV8(pothole.v8);
    setV9(pothole.v9);
  }, [pothole, history]);

  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImageText(String(imageSrc));
    console.log("set state");
    dispatch(sendImage(lat, lon, imageSrc));
  }, [webcamRef, lat, lon]);

  // useEffect(() => {
  //   const imageSrc = webcamRef.current.getScreenshot();
  //   dispatch(sendImage(lat, lon, imageSrc));
  //   setImageText(String(imageSrc));
  //   console.log(imageSrc);
  // }, [trigger,webcamRef, lat, lon]);

  useEffect(() => {
    const interval = setInterval(() => setTrigger(Date.now()), 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <Row className="justify-content-md-center text-center">
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Latitude</Card.Title>
              {lat ? <Card.Text>{lat}</Card.Text> : <Card.Text>-</Card.Text>}
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Longitude</Card.Title>
              {lon ? <Card.Text>{lon}</Card.Text> : <Card.Text>-</Card.Text>}
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Speed</Card.Title>
              {curSpeed ? (
                <Card.Text>{curSpeed}</Card.Text>
              ) : (
                <Card.Text>-</Card.Text>
              )}
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Direction</Card.Title>
              {direction ? (
                <Card.Text>{direction}</Card.Text>
              ) : (
                <Card.Text>-</Card.Text>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="my-5">
        <Col xl={2} sm={2} xs={2} md={2}>
          <img
            className="gridImageBorder"
            src={require("../images/RoadBorderLeft.png")}
            alt={"roadBOrder"}
          />
        </Col>
        <Col>
          <Row
            className="text-center justify-content-center mx-0"
            style={{ paddingLeft: "0 !important" }}
          >
            <Col xl={3} sm={3} xs={3} md={3} className="justify-content-center">
              {v1 ? (
                <img
                  className="gridImage"
                  src={require("../images/FirstRow.png")}
                  alt={"pothole"}
                />
              ) : (
                <img
                  className="gridImage"
                  src={require("../images/FirstRowNtg.png")}
                  alt={"pothole"}
                />
              )}
            </Col>
            <Col xl={3} sm={3} xs={3} md={3} className="justify-content-center">
              {v2 ? (
                <img
                  className="gridImage"
                  src={require("../images/FirstRow.png")}
                  alt={"pothole"}
                />
              ) : (
                <img
                  className="gridImage"
                  src={require("../images/FirstRowNtg.png")}
                  alt={"pothole"}
                />
              )}
            </Col>
            <Col xl={3} sm={3} xs={3} md={3}>
              {v3 ? (
                <img
                  className="gridImage"
                  src={require("../images/FirstRow.png")}
                  alt={"pothole"}
                />
              ) : (
                <img
                  className="gridImage"
                  src={require("../images/FirstRowNtg.png")}
                  alt={"pothole"}
                />
              )}
            </Col>
          </Row>
          <Row className="text-center justify-content-center">
            <Col xl={3} sm={3} xs={3} md={3}>
              {v4 ? (
                <img
                  className="gridImage"
                  src={require("../images/MiddleRow.png")}
                  alt={"pothole"}
                />
              ) : (
                <img
                  className="gridImage"
                  src={require("../images/MiddleRowNtg.png")}
                  alt={"pothole"}
                />
              )}
            </Col>
            <Col xl={3} sm={3} xs={3} md={3}>
              {v5 ? (
                <img
                  className="gridImage"
                  src={require("../images/MiddleRow.png")}
                  alt={"pothole"}
                />
              ) : (
                <img
                  className="gridImage"
                  src={require("../images/MiddleRowNtg.png")}
                  alt={"pothole"}
                />
              )}
            </Col>
            <Col xl={3} sm={3} xs={3} md={3}>
              {v6 ? (
                <img
                  className="gridImage"
                  src={require("../images/MiddleRow.png")}
                  alt={"pothole"}
                />
              ) : (
                <img
                  className="gridImage"
                  src={require("../images/MiddleRowNtg.png")}
                  alt={"pothole"}
                />
              )}
            </Col>
          </Row>
          <Row className="text-center justify-content-center">
            <Col xl={3} sm={3} xs={3} md={3}>
              {v7 ? (
                <img
                  className="gridImage"
                  src={require("../images/LastRow.png")}
                  alt={"pothole"}
                />
              ) : (
                <img
                  className="gridImage"
                  src={require("../images/LastRowNtg.png")}
                  alt={"pothole"}
                />
              )}
            </Col>
            <Col xl={3} sm={3} xs={3} md={3}>
              {v8 ? (
                <img
                  className="gridImage"
                  src={require("../images/LastRow.png")}
                  alt={"pothole"}
                />
              ) : (
                <img
                  className="gridImage"
                  src={require("../images/LastRowNtg.png")}
                  alt={"pothole"}
                />
              )}
            </Col>
            <Col xl={3} sm={3} xs={3} md={3} className="gridImageBorder">
              {v9 ? (
                <img
                  className="gridImage"
                  src={require("../images/LastRow.png")}
                  alt={"pothole"}
                />
              ) : (
                <img
                  className="gridImage"
                  src={require("../images/LastRowNtg.png")}
                  alt={"pothole"}
                />
              )}
            </Col>
          </Row>
        </Col>
        <Col xl={2} sm={2} xs={2} md={2}>
          <img
            className="gridImageBorder"
            src={require("../images/RoadBorderRight.png")}
            alt={"roadBOrder"}
          />
        </Col>
      </Row>
      <Row className="justify-content-center p-5 shadow">
        <Col className="m-0 text-center videoPlayer">
          <Webcam
            audio={false}
            height={400}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            width={600}
            videoConstraints={videoConstraints}
            mirrored="true"
            id="myVideo"
          />
        </Col>
        <Col>
          <Button variant="info" style={{ width: "100%" }} onClick={capture}>
            {" "}
            Capture Image
          </Button>
          {loadingImgRed ? (
            <Loader />
          ) : errorImgRed ? (
            <Row className="m-0 p-0">
              <Button variant="danger">{errorImgRed}</Button>
            </Row>
          ) : successImgRed ? (
            <div>
              <Row className="m-0 p-0">
                <Button variant="success" disabled>
                  Image Uploaded Successfully
                </Button>
              </Row>
              <Row className="mt-3">
                <Row className="text-center mb-1">
                  <h6>Data Received by Backend</h6>
                </Row>
                <Row className="m-0 p-0">
                  <Col>
                    <Card className="p-3">
                      <Card.Title className="text-center">Latitude</Card.Title>
                      <Card.Text className="text-center">
                        {imageDataRed.latitude}
                      </Card.Text>
                    </Card>
                  </Col>
                  <Col>
                    <Card className="p-3">
                      <Card.Title className="text-center">Longitude</Card.Title>
                      <Card.Text className="text-center">
                        {imageDataRed.longitude}
                      </Card.Text>
                    </Card>
                  </Col>
                </Row>

                <Row className="mt-2 mx-0 p-0 justify-content-center">
                  <Col>
                    {imageText != "" && !errorImgRed ? (
                      <div>
                        <p className="text-center mt-3 mb-0">Data Sent:</p>
                        <p className="text-break overflowControl p-0 m-0">
                          {imageText}
                        </p>
                      </div>
                    ) : (
                      <p className="text-center mt-2">Tap the button</p>
                    )}
                  </Col>
                  <Col className="justify-content-center">
                    <Card>
                      <img
                        className="capturedImage"
                        src={imageDataRed.capture}
                      ></img>
                    </Card>
                  </Col>
                </Row>
              </Row>
            </div>
          ) : (
            <Row className="m-0 p-0">
              <Button variant="info" disabled></Button>
            </Row>
          )}
          {/* <Col>
            {imageText != "" && !errorImgRed ? (
              <div>
                <p className="text-center mt-3 mb-0">Data Sent:</p>
                <p className="text-break overflowControl p-0 m-0">
                  {imageText}
                </p>
              </div>
            ) : (
              <p className="text-center mt-2">Tap the button</p>
            )}
          </Col> */}
        </Col>
      </Row>

      {/* <button
      onClick={(e)=>{e.preventDefault();capture();}>
      Capture</button> */}
      {/* <Row>
        <Col>
          <Row>
            <video ref={videoRef} autoPlay />
          </Row>
        </Col>
        <Col>
          <Row>
            <canvas ref={photoRef} />
          </Row>
        </Col>
      </Row> */}
    </div>
  );
}

export default DeployScreen;
