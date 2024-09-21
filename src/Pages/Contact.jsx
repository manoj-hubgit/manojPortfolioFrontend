import React from "react";
import contactImg from "../assets/contactImg.jpg";
import { BiLogoGithub, BiLogoGmail, BiLogoLinkedin } from "react-icons/bi";
import "./Home.css";
import "./contact.css";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
const Contact = () => {
  const initialValues = () => {};

  const validationSchema = () => {};
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <div className="container-lg">
        <div className="row">
          <div className="col-6">
            <img className="w-100 h-100" src={contactImg} alt="" />
          </div>
          <div className="col-6">
            <h1 className="text-center">Contact Me</h1>
            <p>
              Got something on your mind? I usually respond within an hour, but
              as a developer who occasionally takes 3 to 4 hours of sleep, there
              might be a slight delay. Thank you for understanding, and I look
              forward to hearing from you!
            </p>
            <div className="d-flex justify-content-center mt-2">
              <div className="gmail logo">
                <BiLogoGmail />
              </div>
              <div className="linkedin logo">
                <BiLogoLinkedin />
              </div>
              <div className="github logo">
                <BiLogoGithub />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-lg ">
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
                Submit
              </button>
            </div>
          </Form>
        </Formik>
      </div>
      </div>
      
    </div>
  );
};

export default Contact;
