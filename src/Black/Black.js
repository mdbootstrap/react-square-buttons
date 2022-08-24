import React from "react";
import { MDBBtn, MDBContainer } from "mdb-react-ui-kit";
import "./black.css";

export default function Black() {
  return (
    <MDBContainer className="py-5 text-center">
      <MDBBtn color="dark" className="square-responsive">
        Button
      </MDBBtn>
    </MDBContainer>
  );
}
