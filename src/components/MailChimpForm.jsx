// components/MailchimpForm.js
import React from "react";
import Modal from "./common/Modal";
import { Images } from "@/data/images";

const MailchimpForm = ({ isOpen, onHide }) => {
  return (
    <Modal isOpen={isOpen} onHide={onHide}>
      <div id="mc_embed_signup">
        <form
          action="https://gohealthcompass.us10.list-manage.com/subscribe/post?u=b427fa6815-9e0ee3bd63&id=6cb40504e4"
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          className="validate"
          target="_blank"
          noValidate
        >
          <div id="mc_embed_signup_scroll">
            <h2 className="text-[24px] sm:text-3xl font-semibold relative mb-7 sm:mb-10 me-5">
              Join the Health Compass list{" "}
              <img
                className="title-pattern top-[100%] sm:block"
                src={Images.other.titlePattern}
                alt=""
              />
            </h2>

            <div className="mc-field-group mb-5 sm:mb-6">
              <label
                htmlFor="mce-FNAME"
                className="mb-1 block text-sm font-medium text-text-primary"
              >
                First Name
              </label>
              <input
                type="text"
                name="FNAME"
                id="mce-FNAME"
                className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>

            <div className="mc-field-group mb-8 sm:mb-10">
              <label
                htmlFor="mce-EMAIL"
                className="mb-1 block text-sm font-medium text-text-primary"
              >
                Email Address *
              </label>
              <input
                type="email"
                name="EMAIL"
                className="required email w-full rounded-md border border-gray-300 px-4 py-2 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                id="mce-EMAIL"
                required
              />
            </div>

            <div id="mce-responses" className="clear">
              <div
                className="response"
                id="mce-error-response"
                style={{ display: "none" }}
              ></div>
              <div
                className="response"
                id="mce-success-response"
                style={{ display: "none" }}
              ></div>
            </div>

            <div
              style={{ position: "absolute", left: "-5000px" }}
              aria-hidden="true"
            >
              <input
                type="text"
                name="b_b427fa6815_9e0ee3bd63"
                tabIndex="-1"
                value=""
              />
            </div>

            <div className="clear">
              <input
                type="submit"
                value="Subscribe"
                name="subscribe"
                id="mc-embedded-subscribe"
                className="button btn-teal w-full block cursor-pointer"
              />
            </div>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default MailchimpForm;
