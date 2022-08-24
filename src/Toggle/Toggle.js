import React from "react";
import { MDBBtn, MDBContainer } from "mdb-react-ui-kit";

export default function Toggle() {
  return (
    <MDBContainer className="py-5 text-center">
      <MDBBtn className="square-lg" toggle>
        Toggle button
      </MDBBtn>
      <MDBBtn className="mx-2 square-lg" toggle active>
        Active toggle button
      </MDBBtn>
      <MDBBtn className="square-lg" toggle disabled>
        Disabled toggle button
      </MDBBtn>
    </MDBContainer>
  );
}
