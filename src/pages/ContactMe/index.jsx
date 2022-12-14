import { useState } from "react";
import Button from "../../components/Button";
import CheckBox from "../../components/CheckBox";
import Input from "../../components/InputBox";
import TextArea from "../../components/TextArea";
import Layout from "../../components/Layout";
import { Form } from "antd";

const ContactMe = () => {
  const [checked, setChecked] = useState(true);

  const handleChecked = () => {
    setChecked(!checked);
  };

  const handleSubmit = (e) => {
    alert("Form submitted");
  };

  // console.log(checked);

  return (
    <>
      <Layout>
        <div>
          <div className=" mt-16 mb-12">
            <h1 className=" text-4xl font-bold pb-4">Contact Me</h1>
            <p className=" leading-7 text-gray-600">
              Hi there, contact me to ask me about anything you have in mind.
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="md:flex md:gap-6">
              <Input
                label="First name"
                id="first_name"
                type="text"
                validate="Please enter your first name"
                placeholder="Enter your first name"
              />

              <Input
                label="Last name"
                id="last_name"
                type="text"
                validate="Please enter your last name"
                placeholder="Enter your last name"
              />
            </div>

            <Input
              label="Email"
              id="email"
              type="email"
              validate="Please enter a valid email address"
              placeholder="youremail@email.com"
              required="required"
            />

            <TextArea
              label="Message"
              placeholder="Send me a message and I'll reply you as soon as possible"
            />

            <CheckBox
              label="You agree to providing your data to Seun who may contact you."
              handleChecked={() => handleChecked()}
            />

            <Button checked={checked} title="Send message" />
          </form>
        </div>
      </Layout>
    </>
  );
};

export default ContactMe;
