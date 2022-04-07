import React from "react";
import './home.scss';

//TestComponent
import Button from "../../atoms/Button";
const Home = () => (
  <>
    <p>Home</p>

    <div className="temporal--container">
        <Button onClick={() => {console.log("Clicked");}} type="button" buttonStyle="btn--primary">
        Primary
        </Button>
        <Button onClick={() => {console.log("Clicked");}} type="button" buttonStyle="btn--secondary--solid" disabled={true}>
        Primary disabled
        </Button>
        <Button onClick={() => {console.log("Clicked");}} type="button" buttonStyle="btn--secondary">
        Secondary
        </Button>
        <Button onClick={() => {console.log("Clicked");}} type="button" buttonStyle="btn--success">
        Success
        </Button>
        <Button onClick={() => {console.log("Clicked");}} type="button" buttonStyle="btn--danger">
        Danger
        </Button>
        <Button onClick={() => {console.log("Clicked");}} type="button" buttonStyle="btn--warning">
        Warning
        </Button>
        <Button onClick={() => {console.log("Clicked");}} type="button" buttonStyle="btn--link">
        Link
        </Button>
    </div>


  </>
);

export default Home;
