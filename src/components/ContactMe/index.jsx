const ContactMe = () => {
  return (
    <>
      <div>
        <div>
          <h1>Contact Me</h1>
          <p>Hi there, contact me to ask me about anything you have in mind.</p>
        </div>

        <form>
          <div>
            <label>First Name</label>
            <input
              type="text"
              placeholder="Enter your first name"
              id="first_name"
            />
          </div>

          <div>
            <label>Last Name</label>
            <input
              type="text"
              placeholder="Enter your last name"
              id="last_name"
            />
          </div>

          <div>
            <label>Email</label>
            <input type="email" placeholder="youremail@email.com" id="email" />
          </div>

          <div>
            <label>Message</label>
            <textarea
              type="text"
              placeholder="Send me a message and I'll reply you as soon as possible"
              id="message"
            />
          </div>

          <div>
            <input type="checkbox" />
            <span>
              You agree to providing your data to Seun who may contact you.
            </span>
          </div>

          <button id="btn__submit">Send Message</button>
        </form>
      </div>
    </>
  );
};

export default ContactMe;
