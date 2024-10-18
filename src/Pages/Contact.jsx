import React from "react";
import contactImg from "../assets/contactImg.jpg";
import { BiLogoGithub, BiLogoGmail, BiLogoLinkedin } from "react-icons/bi";
import "./Home.css";
import "./contact.css";
import "./font.css";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

const Contact = () => {
  const initialValues = {
    email: "",
    name: "",
    message: "",
  };
  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    name: Yup.string().required("Name is required"),
    message: Yup.string().required("Message is required"),
  });

  const handleSubmit = async (values, { resetForm }) => {
    try {
      const response = await fetch("https://manojportfoliobackend.onrender.com/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const data = await response.json();

      if (data.success) {
        alert("Your message was sent successfully!");
        resetForm();
      } else {
        alert("There was an issue sending your message.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("There was an error submitting your message.");
    }
  };

  return (
    <div>
      <div className="container-lg">
        <div className="row">
          <div className="col-md-6 col-sm-12">
            <img className="w-100 h-100" src={contactImg} alt="" />
          </div>
          <div className="col-md-6 col-sm-12">
            <h1 className="text-center titleFonts">Contact Me</h1>
            <h5 className=" subTitleFonts text-center">
              Got something on your mind? I usually respond within an hour, but
              as a developer who occasionally takes 3 to 4 hours of sleep, there
              might be a slight delay. Thank you for your understanding, and I
              look forward to hearing from you!
            </h5>
            <div className="d-flex justify-content-center mt-2">
            <a
              href="mailto:manojannadurai2265@gmail.com"
              className="gmail logo">
              <BiLogoGmail />
            </a>
            <a href="https://www.linkedin.com/in/manoj312/" target="_blank" className="linkedin logo">
              <BiLogoLinkedin />
            </a>
            <a href="https://github.com/manoj-hubgit" target="_blank" className="github logo">
              <BiLogoGithub />
            </a>
            </div>
          </div>
        </div>
      </div>
      <div className="container-lg formPlacing">
        <div className="row">
          <div className="col-md-12">
            <div className="formStyle">
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
                <Form>
                  <div className="form-group">
                    <Field
                      name="email"
                      type="email"
                      placeholder="Your Email"
                      className="form-control border-0"
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="text-danger"
                    />
                  </div>
                  <div className="form-group">
                    <Field
                      name="name"
                      type="text"
                      placeholder="Your Name"
                      className="form-control border-0"
                    />
                    <ErrorMessage
                      name="name"
                      component="div"
                      className="text-danger"
                    />
                  </div>
                  <div className="form-group">
                    <Field
                      name="message"
                      as="textarea"
                      placeholder="Message"
                      className="form-control-textarea border-0"
                    />
                    <ErrorMessage
                      name="message"
                      component="div"
                      className="text-danger"
                    />
                  </div>
                  <div className="form-group">
                    <button type="submit" className="btn btn-primary py-2 px-3">
                      Send
                    </button>
                  </div>
                </Form>
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
