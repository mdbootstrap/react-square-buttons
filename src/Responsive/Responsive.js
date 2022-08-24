import React from "react";
import { MDBBtn, MDBContainer } from "mdb-react-ui-kit";
import "./responsive.css";

export default function Responsive() {
  return (
    <MDBContainer className="py-5 text-center">
      <MDBBtn color="dark" className="square-responsive">
        Button
      </MDBBtn>
    </MDBContainer>
  );
}
