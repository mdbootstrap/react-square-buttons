import React from "react";
import { MDBBtn, MDBContainer } from "mdb-react-ui-kit";
import "./disabled.css";

export default function Disabled() {
  return (
    <MDBContainer className="py-5 text-center">
      <MDBBtn className="me-2 square-lg" disabled>
        Primary button
      </MDBBtn>
      <MDBBtn className="square-lg" color="secondary" disabled>
        Button
      </MDBBtn>
    </MDBContainer>
  );
}
