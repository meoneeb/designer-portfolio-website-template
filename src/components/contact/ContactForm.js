"use client";
import React, { use, useState } from "react";
import emailjs from "emailjs-com";
import { useDevice } from "../../../helpers/useDevice";

const options = ["Hire for a project", "I want to learn", "Collaboration"];

const projectOptions = [
  "UX Design",
  "UI Design",
  "Graphic Design",
  "Digital Marketing",
  "SEO",
  "Web/Mobile App Development",
  "WordPress Development",
];

export default function ContactForm() {
  const { IsMob } = useDevice();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [purpose, setPurpose] = useState("");
  const [projectType, setProjectType] = useState("");
  const [additionalInfo, setAdditionalInfo] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validatePhone = (phone) => {
    const regex = /^\d{11}$/;
    return regex.test(phone);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrors({});

    if (!validateEmail(email)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "Invalid email format",
      }));
      setLoading(false);
      return;
    }

    if (!validatePhone(phone)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        phone: "Invalid phone number format (10 digits)",
      }));
      setLoading(false);
      return;
    }

    const serviceId = "service_wmhv4kn";
    const templateId = "template_dmxb8jd";
    const userId = "s9NYqZm5I8TyJdxi4";

    const templateParams = {
      from_name: name,
      phone: phone,
      from_email: email,
      purpose: purpose,
      project_type: projectType,
      additional_info: additionalInfo,
    };

    try {
      const response = await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        userId
      );
      console.log("Email sent successfully!", response);
      setSuccess(true);
    } catch (error) {
      console.error("Error sending email:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleRetry = () => {
    setName("");
    setPhone("");
    setEmail("");
    setPurpose("");
    setProjectType("");
    setAdditionalInfo("");
    setSuccess(false);
  };

  return (
    <>
      {!success ? (
        <form onSubmit={handleSubmit}>
          <div
            className="d-flex flex-column p-4 form-style mb-5 containerDiv"
            style={{
              gap: 20,
            }}
          >
            <div>
              {/* <label>Name:</label> */}
              <input
                className="form-control"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                required
              />
            </div>
            <div>
              {/* <label>Phone no.:</label> */}
              <input
                className="form-control"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Enter your phone number"
                required
              />
              {errors.phone && <p className="error-message">{errors.phone}</p>}
            </div>
            <div>
              {/* <label>Email:</label> */}
              <input
                className="form-control"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
              />
              {errors.email && <p className="error-message">{errors.email}</p>}
            </div>
            <div>
              {/* <label>Purpose:</label> */}
              <select
                className="form-control"
                value={purpose}
                onChange={(e) => setPurpose(e.target.value)}
                required
              >
                <option className="form-control" value="">
                  Select purpose
                </option>
                {options.map((option, index) => (
                  <option
                    style={{ color: "var(--text)", padding: 20 }}
                    key={index}
                    value={option}
                  >
                    {option}
                  </option>
                ))}
              </select>
            </div>
            {purpose === "Hire for a project" && (
              <div>
                {/* <label>Project Type:</label> */}
                <select
                  className="form-control"
                  value={projectType}
                  onChange={(e) => setProjectType(e.target.value)}
                  required
                >
                  <option style={{ color: "var(--text)" }} value="">
                    Select project type
                  </option>
                  {projectOptions.map((option, index) => (
                    <option
                      style={{ color: "var(--text)" }}
                      key={index}
                      value={option}
                    >
                      <div>{option}</div>
                    </option>
                  ))}
                </select>
              </div>
            )}
            <div>
              {/* <label>Additional Info:</label> */}
              <textarea
                className="form-control"
                value={additionalInfo}
                onChange={(e) => setAdditionalInfo(e.target.value)}
                placeholder="Additional information"
              ></textarea>
            </div>
            <div
              className="d-flex flex-row align-items-center justify-content-end"
              style={{ width: "100%" }}
            >
              <button
                className="btn-primary px-4"
                style={{ width: IsMob ? "100%" : "fit-content" }}
                type="submit"
              >
                Send Message
              </button>
            </div>
          </div>
        </form>
      ) : (
        <div
          className="success-message containerDiv p-4 justify-content-center align-items-center p-5"
          style={{ gap: 10 }}
        >
          <h3>Message sent successfully!</h3>
          <div
            className="button-container d-flex flex-row flex-wrap"
            style={{ gap: 10 }}
          >
            <button onClick={handleRetry} className="btn-primary">
              Send Again
            </button>
            <button
              className="btn-text"
              onClick={() => (window.location.href = "/")}
            >
              Go Back to Home
            </button>
          </div>
        </div>
      )}
      {loading && (
        <div
          className="d-flex justify-content-center align-items-center"
          style={{
            position: "fixed",
            top: 0,
            right: 0,
            height: "100vh",
            width: "100vw",
            background: "rgba(0,0,0,0.5",
          }}
        >
          <p
            style={{
              padding: 20,
              background: "var(--primary)",
              color: "var(--dark)",
            }}
          >
            Loading...
          </p>
        </div>
      )}
    </>
  );
}
