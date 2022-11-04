import { useState } from "react";
import Button from "../Button";
import CheckBox from "../CheckBox";
import Input from "../InputBox";
import TextArea from "../TextArea";

const ContactMe = () => {
  const [checked, setChecked] = useState(true);

  const handleChecked = () => {
    setChecked(!checked);
  };

  const handleClick = (e) => {
    e.preventDefault();
  };

  console.log(checked);

  return (
    <>
      <div>
        <div className=" mt-16 mb-12">
          <h1 className=" text-4xl font-bold pb-4">Contact Me</h1>
          <p className=" leading-7 text-gray-600">
            Hi there, contact me to ask me about anything you have in mind.
          </p>
        </div>

        <form>
          <Input label="First Name" placeholder="Enter your first name" />

          <Input label="Last Name" placeholder="Enter your last name" />

          <Input label="Email" placeholder="youremail@email.com" />

          <TextArea
            label="Message"
            placeholder="Send me a message and I'll reply you as soon as possible"
          />

          <CheckBox
            label="You agree to providing your data to Seun who may contact you."
            handleChecked={() => handleChecked()}
          />

          <Button
            checked={checked}
            title="Send message"
            handleClick={(e) => handleClick(e)}
          />
        </form>
      </div>
    </>
  );
};

export default ContactMe;
