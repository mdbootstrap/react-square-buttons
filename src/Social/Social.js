import React from "react";
import { MDBBtn, MDBContainer, MDBIcon } from "mdb-react-ui-kit";
import "./social.css";

export default function Social() {
  return (
    <MDBContainer className="py-5 ">
      <MDBBtn
        href="#!"
        className="square-social d-flex align-items-center justify-content-center"
        style={{ backgroundColor: "#3b5998" }}
      >
        <MDBIcon
          fab
          icon="facebook-f"
          className="d-flex align-items-center justify-content-center"
        />
      </MDBBtn>
    </MDBContainer>
  );
}
