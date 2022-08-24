import React from "react";
import { MDBBtn, MDBContainer } from "mdb-react-ui-kit";
import "./sizes.css";

export default function Sizes() {
  return (
    <MDBContainer className="py-5 text-center">
      <MDBBtn color="secondary" className="square-sm me-1">
        Button
      </MDBBtn>
      <MDBBtn color="secondary" className="square-md me-1">
        Button
      </MDBBtn>
      <MDBBtn color="secondary" className="square-lg me-1">
        Button
      </MDBBtn>
      <MDBBtn color="secondary" className="square-xl me-1">
        Button
      </MDBBtn>
    </MDBContainer>
  );
}
