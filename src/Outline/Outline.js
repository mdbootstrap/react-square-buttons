import React from "react";
import { MDBBtn, MDBContainer } from "mdb-react-ui-kit";
import "./outline.css";

export default function Outline() {
  return (
    <MDBContainer className="py-5 text-center">
      <MDBBtn
        outline
        color="primary"
        rippleColor="dark"
        className="square-md me-1"
      >
        Primary
      </MDBBtn>
      <MDBBtn
        outline
        color="secondary"
        rippleColor="dark"
        className="square-md me-1"
      >
        Secondary
      </MDBBtn>
      <MDBBtn
        outline
        color="success"
        rippleColor="dark"
        className="square-md me-1"
      >
        Success
      </MDBBtn>
      <MDBBtn
        outline
        color="danger"
        rippleColor="dark"
        className="square-md me-1"
      >
        Danger
      </MDBBtn>
      <MDBBtn
        outline
        color="warning"
        rippleColor="dark"
        className="square-md me-1"
      >
        Warning
      </MDBBtn>
      <MDBBtn
        outline
        color="info"
        rippleColor="dark"
        className="square-md me-1"
      >
        Info
      </MDBBtn>
      <MDBBtn
        outline
        color="light"
        rippleColor="dark"
        className="square-md me-1"
      >
        Light
      </MDBBtn>
      <MDBBtn
        outline
        color="dark"
        rippleColor="dark"
        className="square-md me-1"
      >
        Dark
      </MDBBtn>
    </MDBContainer>
  );
}
