import React from "react";
import { MDBBtn, MDBContainer } from "mdb-react-ui-kit";
import "./basic.css";

export default function Basic() {
  return (
    <MDBContainer className="py-5 text-center">
      <MDBBtn className="square-md">Button</MDBBtn>
    </MDBContainer>
  );
}
