import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Form from "./components/Form/Form";
import Table from "./components/Table/Table";
import HeaderToggle from "./components/HeaderToggle/HeaderToggle";
import Formtest1 from "./components/Test/Formtest1";

function App() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="container text-center pt-5">
        <div>
          <img
            src="https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png"
            alt="bootstrap-logo"
            width={"71.53px"}
          />
        </div>
        <div className="text-center">
          <HeaderToggle />
          {/* <h1 className="fs-2 fw-semibold">Create Product</h1>
          <p>
            Below is an example form built entirely with Bootstraps form
            controls. Each required form group has a validation state that can
            be triggered by attempting to submit the form without completing it.
          </p> */}
        </div>
        <div>
          
        </div>
      </div>
      <section className="row container mx-auto w-75 pb-5">
        {/* <Form /> */}
        <Formtest1/>
      </section>
      <section className="row container mx-auto w-75 pb-5">
        <Table />
      </section>
    </div>
  );
}

export default App;
