import React from "react";
import { MDBBtn, MDBContainer } from "mdb-react-ui-kit";
import "./colors.css";

export default function Colors() {
  return (
    <MDBContainer className="py-5 text-center">
      <MDBBtn color="primary" className="square-md me-1">
        Primary
      </MDBBtn>
      <MDBBtn color="secondary" className="square-md me-1">
        Secondary
      </MDBBtn>
      <MDBBtn color="success" className="square-md me-1">
        Success
      </MDBBtn>
      <MDBBtn color="danger" className="square-md me-1">
        Danger
      </MDBBtn>
      <MDBBtn color="warning" className="square-md me-1">
        Warning
      </MDBBtn>
      <MDBBtn color="info" className="square-md me-1">
        Info
      </MDBBtn>
      <MDBBtn color="light" rippleColor="dark" className="square-md me-1">
        Light
      </MDBBtn>
      <MDBBtn color="dark" className="square-md me-1">
        Dark
      </MDBBtn>
      <MDBBtn color="link" rippleColor="dark" className="square-md me-1">
        Link
      </MDBBtn>
    </MDBContainer>
  );
}
