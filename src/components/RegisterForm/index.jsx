import React from "react";
import Select from "react-select";
import { useEffect, useState } from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import "./style.css";

const CustomForm = ({ status, message, onValidated }) => {
  const communityOptions = [
    { value: "Ascot", label: "Ascot" },
    { value: "Linden House", label: "Linden House" },
    { value: "New Brighton Homes", label: "New Brighton Homes" },
    { value: "Laburnum House", label: "Laburnum House" },
    { value: "Nanton House", label: "Nanton House" },
    { value: "Paton Homes", label: "Paton Homes" },
  ];
  const RealtorOptions = [
    { value: "Owner", label: "Owner" },
    {
      value: "Tenant",
      label: "Tenant",
    },
  ];

  const customStyles = {
    control: (base, state) => ({
      ...base,
      background: "transparent",
      // match with the menu
      borderRadius: "none",
      // Overwrittes the different states of border
      borderColor: "none",
      // Removes weird border around container
      boxShadow: state.isFocused ? null : null,
      "&:hover": {
        // Overwrittes the different states of border
        borderColor: "none",
      },
    }),
    menu: (base) => ({
      ...base,
      // override border radius to match the box
      borderRadius: 0,
      // kill the gap
      marginTop: 0,
    }),
    menuList: (base) => ({
      ...base,
      // kill the white space on first and last option
      padding: 0,
    }),
  };

  const [formData, setFormData] = useState({
    email: null,
    tags: 7215980,
    fname: null,
    lname: null,
    phone: null,
    // postalCode: null,
    community: "Select",
    realtorStatus: null,
    // allowContact: "No",
    enquiry: null,
  });

  const changeHandler = (event) => {
    setFormData({
      ...formData,
      [event.target.id]: event.target.value,
    });
  };

  const changeSelectHandler = (event) => {
    setFormData({
      ...formData,
      community: event.value,
    });
  };
  const changeSelectRealtorStatusHandler = (event) => {
    setFormData({
      ...formData,
      realtorStatus: event.value,
    });
  };
  useEffect(() => {
    if (status === "success") {
      setFormData({
        email: null,
        tags: 7215980,
        fname: null,
        lname: null,
        phone: null,
        community: "Select",
        realtorStatus: null,
        enquiry: null,
      });
    }
  }, [status]);

  const handleSubmit = (e) => {
    console.log(formData);
    e.preventDefault();
    formData.email &&
      formData.tags &&
      formData.fname &&
      formData.lname &&
      formData.phone &&
      formData.community &&
      formData.realtorStatus &&
      formData.enquiry &&
      formData.email.indexOf("@") > -1 &&
      onValidated({
        MERGE0: formData.email,
        tags: formData.tags,
        MERGE1: formData.fname,
        MERGE2: formData.lname,
        MERGE4: formData.phone,
        MMERGE7: formData.realtorStatus,
        MMERGE8: formData.community,
        MMERGE5: formData.enquiry,
      });
  };

  return (
    <div className="register-form">
      <form
        id="contact-form"
        className="form"
        onSubmit={(e) => handleSubmit(e)}
      >
        <input
          type="hidden"
          name="authenticity_token"
          value="5Ulm2eVUu/gSPsHGiRBkTV9WzrPnGAMiidIAbgzjO4sYy7VxVKeK8t/6Xn4vyCuFQzxquqtW4vJ0QdILHHVc5w=="
          autocomplete="off"
        />
        <div className="details">
          <div className="wrapper">
            <input
              type="text"
              id="fname"
              placeholder="*First Name"
              name="contact[first_name]"
              value={formData.fname}
              onChange={changeHandler}
              className=""
              required={true}
            />
          </div>
          <div className="wrapper">
            <input
              type="text"
              id="lname"
              placeholder="*Last Name"
              name="contact[last_name]"
              value={formData.lname}
              onChange={changeHandler}
              className=""
              required={true}
            />
          </div>
          <div className="wrapper">
            <input
              id="email"
              placeholder="*Email"
              name="contact[email]"
              type="email"
              value={formData.email}
              onChange={changeHandler}
              className=""
              required={true}
            />
          </div>
          <div className="wrapper">
            <input
              type="text"
              id="phone"
              placeholder="*Phone Number"
              name="contact[phone]"
              value={formData.phone}
              onChange={changeHandler}
              className=""
              required={true}
            />
          </div>
          <div className="wrapper">
            <Select
              name="answers[21844][answers]"
              options={RealtorOptions}
              placeholder={<div className="selectPlaceholderText">I Am An</div>}
              className="registerSelect"
              onChange={changeSelectRealtorStatusHandler}
              styles={customStyles}
              components={{
                IndicatorSeparator: () => null,
              }}
              required={true}
            />
          </div>
          <div className="wrapper">
            <Select
              name="answers[21653][answers]"
              options={communityOptions}
              placeholder={
                <div className="selectPlaceholderText">
                  Which community do you live in?
                </div>
              }
              className="registerSelect"
              onChange={changeSelectHandler}
              styles={customStyles}
              components={{
                IndicatorSeparator: () => null,
              }}
              required={true}
            />
          </div>
          <div className="wrapper enquiry-wrapper">
            <textarea
              id="enquiry"
              name="enquiry"
              value={formData.enquiry}
              onChange={changeHandler}
              placeholder="How can we help?"
              required
            ></textarea>
          </div>
        </div>
        <button className="btn submit-btn" type="submit" value="Submit">
          Submit
        </button>
      </form>
      <div className="message">
        {status === "success" ? (
          <div className="signup-message">
            Thank you for contacting us!
            <br />
            We will be in touch with you shortly.
          </div>
        ) : null}
        {status === "error" ? <div className="error">{message}</div> : null}
      </div>
    </div>
  );
};

function RegisterForm() {
  // const postUrl = `${process.env.REACT_APP_MAILCHIMP_ACTION_URL}?u=${process.env.REACT_APP_MAILCHIMP_U_VALUE}&id=${process.env.REACT_APP_MAILCHIMP_ID_VALUE}&amp;id=${process.env.REACT_APP_MAILCHIMP_AMP_ID}&amp;f_id=${process.env.REACT_APP_MAILCHIMP_AMP_F_ID}`;
  const postUrl = `https://harlowehouse.us13.list-manage.com/subscribe/post?u=245019965428e6d4bcc210d39&id=ec1b0158ef`;

  return (
    <div>
      <MailchimpSubscribe
        url={postUrl}
        render={({ subscribe, status, message }) => (
          <CustomForm
            status={status}
            message={message}
            onValidated={(formData) => subscribe(formData)}
          />
        )}
      />
    </div>
  );
}

export default RegisterForm;
