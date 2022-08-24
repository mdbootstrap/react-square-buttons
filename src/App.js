import React from "react";
import { MDBBtn, MDBContainer } from "mdb-react-ui-kit";
import { Link } from "react-router-dom";

function App() {
  return (
    <MDBContainer className="d-flex justify-content-center">
      <Link to="/Basic">
        <MDBBtn className="ms-3 mt-3">Basic</MDBBtn>
      </Link>
      <Link to="/Black">
        <MDBBtn className="ms-3 mt-3">Black</MDBBtn>
      </Link>
      <Link to="/Sizes">
        <MDBBtn className="ms-3 mt-3">Sizes</MDBBtn>
      </Link>
      <Link to="/Colors">
        <MDBBtn className="ms-3 mt-3">Colors</MDBBtn>
      </Link>
      <Link to="/Outline">
        <MDBBtn className="ms-3 mt-3">Outline</MDBBtn>
      </Link>
      <Link to="/Social">
        <MDBBtn className="ms-3 mt-3">Social</MDBBtn>
      </Link>
      <Link to="/Brands">
        <MDBBtn className="ms-3 mt-3">Brands</MDBBtn>
      </Link>
      <Link to="/Disabled">
        <MDBBtn className="ms-3 mt-3">Disabled</MDBBtn>
      </Link>
      <Link to="/Toggle">
        <MDBBtn className="ms-3 mt-3">Toggle</MDBBtn>
      </Link>
    </MDBContainer>
  );
}

export default App;
