import React, { useEffect } from "react";
import $ from "jquery";
import "jquery-validation";

const Contact = () => {
  useEffect(() => {
    if ($("#contact-form").length > 0) {
      $("#contact-form").validate({
        rules: {
          conName: "required",
          conEmail: {
            required: true,
            email: true,
          },
        },
        messages: {
          conName: "Please enter your first name.",
          conEmail: "Please enter a valid email address.",
        },
        submitHandler: function (form) {
          // start ajax request
          $.ajax({
            type: "POST",
            url: "assets/mail/contact-form.php",
            data: $("#contact-form").serialize(),
            cache: false,
            success: function (data) {
              if (data === "Y") {
                $("#message_sent").modal("show");
                $("#contact-form").trigger("reset");
              } else {
                $("#message_fail").modal("show");
              }
            },
          });
        },
      });
    }
  }, []);

  return (
    <>
      {/* CONTACT SECTION START */}
      <section className="contact-section" id="contact-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-7 order-2 order-md-1">
              <div
                className="contact-form-box wow fadeInLeft"
                data-wow-delay=".3s"
              >
                <div className="section-header">
                  <h5 className="section-title">Let’s Work Together!</h5>
                  <p>
                    I design and code beautifully simple things, and I love what
                    I do. Let's make something amazing together!
                  </p>
                </div>
                <div className="tj-contact-form">
                  <form id="contact-form" aria-labelledby="contact-form-title">
                    <div className="row gx-3">
                      <div className="col-sm-6">
                        <div className="form_group">
                          <label htmlFor="conName" className="visually-hidden">
                            First Name
                          </label>
                          <input
                            type="text"
                            name="conName"
                            id="conName"
                            placeholder="First Name"
                            autoComplete="off"
                          />
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form_group">
                          <label htmlFor="conLName" className="visually-hidden">
                            Last Name
                          </label>
                          <input
                            type="text"
                            name="conLName"
                            id="conLName"
                            placeholder="Last Name"
                            autoComplete="off"
                          />
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form_group">
                          <label htmlFor="conEmail" className="visually-hidden">
                            Email Address
                          </label>
                          <input
                            type="email"
                            name="conEmail"
                            id="conEmail"
                            placeholder="Email Address"
                            autoComplete="off"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form_group">
                          <label htmlFor="conPhone" className="visually-hidden">
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            name="conPhone"
                            id="conPhone"
                            placeholder="Phone Number"
                            autoComplete="off"
                          />
                        </div>
                      </div>
                      {/* <div className="col-12">
                        <div className="form_group">
                          <label htmlFor="conService" className="visually-hidden">Service Required</label>
                          <select
                            name="conService"
                            id="conService"
                            className="tj-nice-select"
                            aria-label="Select the service you are interested in"
                          >
                            <option value="" disabled>Choose Service</option>
                            <option value="branding">Branding Design</option>
                            <option value="web">Web Design</option>
                            <option value="uxui">UI/UX Design</option>
                            <option value="app">App Design</option>
                          </select>
                        </div>
                      </div> */}
                      <div className="col-12">
                        <div className="form_group">
                          <label
                            htmlFor="conMessage"
                            className="visually-hidden"
                          >
                            Message
                          </label>
                          <textarea
                            name="conMessage"
                            id="conMessage"
                            placeholder="Message"
                            rows="4"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form_btn">
                          <button type="submit" className="btn tj-btn-primary">
                            Send Message
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-lg-5 offset-lg-1 col-md-5 d-flex flex-wrap align-items-center order-1 order-md-2">
              <div className="contact-info-list">
                <ul className="ul-reset">
                  <li
                    className="d-flex flex-wrap align-items-center position-relative wow fadeInRight"
                    data-wow-delay=".4s"
                  >
                    <div className="icon-box">
                      <i className="flaticon-phone-call" />
                    </div>
                    <div className="text-box">
                      <p>Phone</p>
                      <a href="tel:+919971520309">+91 9971520309</a>
                    </div>
                  </li>
                  <li
                    className="d-flex flex-wrap align-items-center position-relative wow fadeInRight"
                    data-wow-delay=".5s"
                  >
                    <div className="icon-box">
                      <i className="flaticon-mail-inbox-app" />
                    </div>
                    <div className="text-box">
                      <p>Email</p>
                      <a href="mailto:jindalkeshav20@gmail.com">
                        jindalkeshav20@gmail.com
                      </a>
                    </div>
                  </li>
                  <li
                    className="d-flex flex-wrap align-items-center position-relative wow fadeInRight"
                    data-wow-delay=".6s"
                  >
                    <div className="icon-box">
                      <i className="flaticon-location" />
                    </div>
                    <div className="text-box">
                      <p>Address</p>
                      <a
                        href="https://www.google.com/maps?q=Delhi,+India"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Preet Vihar, New Delhi - 110051
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* CONTACT SECTION END */}
      {/* BEGIN: Contact Form Success Modal Message */}
      <div className="modal contact_modal" id="message_sent" tabIndex={-1}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">
                <strong>Message Sent Successfully</strong>
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <p>
                Thank you for contacting us. We will get back to you shortly.
                <br />
                Have a great day!
              </p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-primary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* END: Contact Form Success Modal Message */}
      {/* BEGIN: Contact Form Fail Modal Message */}
      <div
        className="modal contact_modal failed"
        id="message_fail"
        tabIndex={-1}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">
                <strong>Error</strong>
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <p>Oops! Something went wrong, please try again.</p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-primary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* END: Contact Form Fail Modal Message */}
    </>
  );
};

export default Contact;
