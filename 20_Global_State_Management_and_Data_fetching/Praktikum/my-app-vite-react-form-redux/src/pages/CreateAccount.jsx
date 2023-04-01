import React, { useState } from "react";
import CreateAccountForm from "../components/FormAccount/CreateAccountForm";
import Navbar from "../components/Navbar/Navbar";
import TableAccount from "../components/TableList/TableAccount";

const CreateAccount = () => {
  const [isSubmitAccount, setSubmitAccount] = useState([]);
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="container pt-5">
        <div className="text-center">
          <div>
            <img
              src="https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png"
              alt="bootstrap-logo"
              width={"71.53px"}
            />
          </div>
          <div>
            <h2>Create Account</h2>
            <p>
              Below is an example form built entirely with Bootstrap’s form
              controls. Each required form group has a validation state that can
              be triggered by attempting to submit the form without completing
              it.
            </p>
          </div>
        </div>
        <div className="row container mx-auto w-75 pb-5">
          <CreateAccountForm
            isSubmitAccount={isSubmitAccount}
            setSubmitAccount={setSubmitAccount}
          />
        </div>
        <div>
          <TableAccount />
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;
