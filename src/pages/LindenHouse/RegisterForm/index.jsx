import React from "react";
import Select from "react-select";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import "./style.css";

const CustomForm = ({ status, message, onValidated }) => {
  const navigate = useNavigate();
  const options = [
    {
      value: "Signage",
      label: "Signage",
    },
    { value: "Realtor", label: "Realtor" },
    { value: "Walk/Drive By", label: "Walk/Drive By" },
    { value: "REW", label: "REW" },
    { value: "Livabl", label: "Livabl" },
    { value: "Online Advertising", label: "Online Advertising" },
  ];
  const communityOptions = [
    { value: "Ascot", label: "Ascot" },
    { value: "Linden House", label: "Linden House" },
    { value: "New Brighton Homes", label: "New Brighton Homes" },
    { value: "Laburnum House", label: "Laburnum House" },
    { value: "Nanton House", label: "Nanton House" },
    { value: "Paton Homes", label: "Paton Homes" },
  ];
  const RealtorOptions = [
    { value: "Yes", label: "Yes" },
    {
      value: "No",
      label: "No",
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
    tags: 7216375,
    fname: null,
    lname: null,
    phone: null,
    city: null,
    postalCode: null,
    hearus: null,
    realtorStatus: null,
    allowContact: "No",
  });

  const changeHandler = (event) => {
    setFormData({
      ...formData,
      [event.target.id]: event.target.value,
    });
  };

  const changeHearUsHandler = (event) => {
    setFormData({
      ...formData,
      hearus: event.value,
    });
    console.log(formData.hearus);
  };
  const changeSelectHandler = (event) => {
    setFormData({
      ...formData,
      community: event.value,
    });
    console.log(formData.community);
  };
  const changeSelectRealtorStatusHandler = (event) => {
    setFormData({
      ...formData,
      realtorStatus: event.value,
    });
  };
  const allowContactHandler = (event) => {
    if (event.target.checked) {
      setFormData({
        ...formData,
        allowContact: "Yes",
      });
    } else {
      setFormData({
        ...formData,
        allowContact: "No",
      });
    }
  };

  useEffect(() => {
    if (status === "success") {
      setFormData({
        email: null,
        tags: 7215988,
        fname: null,
        lname: null,
        phone: null,
        city: null,
        postalCode: null,
        hearus: null,
        IamRealtor: null,
        allowContact: "No",
      });
      navigate("/thankyou");
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
      formData.city &&
      formData.postalCode &&
      formData.hearus &&
      formData.realtorStatus &&
      //formData.allowContact &&
      formData.email.indexOf("@") > -1 &&
      onValidated({
        MERGE0: formData.email,
        tags: formData.tags,
        MERGE1: formData.fname,
        MERGE2: formData.lname,
        MERGE4: formData.phone,
        MERGE12: formData.city,
        MMERGE9: formData.postalCode,
        MMERGE10: formData.hearus,
        MMERGE11: formData.realtorStatus,
      });
  };

  return (
    <div className="register-form register-form-contact">
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
            <input
              type="text"
              id="city"
              placeholder="*City"
              name="contact[city]"
              value={formData.city}
              onChange={changeHandler}
              className=""
              required={true}
            />
          </div>
          <div className="wrapper">
            <input
              type="text"
              id="postalCode"
              placeholder="*Postal Code"
              name="contact[postcode]"
              value={formData.postalCode}
              onChange={changeHandler}
              className=""
              required={true}
            />
          </div>
          <div className="wrapper">
            <Select
              name="answers[21653][answers]"
              options={options}
              placeholder={
                <div className="selectPlaceholderText">
                  *How did you hear about us?
                </div>
              }
              className="registerSelect"
              onChange={changeHearUsHandler}
              styles={customStyles}
              components={{
                IndicatorSeparator: () => null,
              }}
              required={true}
            />
          </div>
          <div className="wrapper">
            <Select
              name="answers[21844][answers]"
              options={RealtorOptions}
              placeholder={
                <div className="selectPlaceholderText">*Are you a Realtor?</div>
              }
              className="registerSelect"
              onChange={changeSelectRealtorStatusHandler}
              styles={customStyles}
              components={{
                IndicatorSeparator: () => null,
              }}
              required={true}
            />
          </div>
        </div>
        <div className="wrapper checkbox-contianer">
          <div className="checkbox-wrapper">
            <input
              className="checkbox"
              onChange={allowContactHandler}
              type="checkbox"
              name="answers[21728][answers][]"
              value="Yes"
              required={true}
            />
            <div className="agreement">
              *Yes, I consent to receiving emails from Crescent Legacy
              Properties.
              <br />
              <span className="desktop-version is-small">
                The information that you provide will be used by Crescent Legacy
                Properties to enhance your home ownership experience. I
                understand this may take the form of communication via
                telephone, apps, sms, email (including via third party providers
                and platforms) or post. E&OE. Select members of our Sales Team
                are licensed Real Estate Professionals and cannot provide
                representation to potential buyers of Linden House.
              </span>
            </div>
          </div>
          <div className="mobile-version is-small">
            The information that you provide will be used by Crescent Legacy
            Properties to enhance your home ownership experience. I understand
            this may take the form of communication via telephone, apps, sms,
            email (including via third party providers and platforms) or post.
            E&OE. Select members of our Sales Team are licensed Real Estate
            Professionals and cannot provide representation to potential buyers
            of Linden House.
          </div>
        </div>
        <button className="btn submit-btn" type="submit" value="Submit">
          Submit
        </button>
      </form>
      <div className="message">
        {/* {status === "success" ? (
          <div className="signup-message">
            Thank you for contacting us!
            <br />
            We will be in touch with you shortly.
          </div>
        ) : null} */}
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
