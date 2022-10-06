import React, { useEffect, useState } from "react";
import "./DiscoverWatch.css";
import poster from "../../../assets/images/proflou/windowpeekjpg.jpg";

function useNotification() {
  const [message, setMessage] = React.useState(null);
  const [messageType, setMessageType] = React.useState('info');
  const DELAY = 5000;

  React.useEffect(() => {
    if (!message) { return; }

    const timer = window.setTimeout(() => setMessage(null), DELAY);

    return () => {
      window.clearTimeout(timer);
    };
  }, [message]);

  function addNotification(notification, type = 'info') {
    setMessage(notification);
    setMessageType(type);
  }

  function Notification() {
    return (
      <div className={`notification notification-${messageType}`} role="alert">
        {message && <div className="notification-content">{message}</div>}
      </div>
    );
  }

  return [Notification, addNotification];
}


const DiscoverWatch = () => {
  const [Notification, addNotification] = useNotification();

  


  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    querry: "",
    product:"",
  });

  let name, value;
  const postUserData = (event) => {
    name = event.target.name;
    value = event.target.value;

    setUserData({ ...userData, [name]: value });
  };

  // connect with firebase
  const submitData = async (event) => {
    event.preventDefault();
    const { firstName, lastName, email, querry,  } = userData;

    if (firstName && lastName && email && querry ) {
      const res = fetch(
        `https://proflou-chic-website-default-rtdb.asia-southeast1.firebasedatabase.app/contact.json`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            firstName,
            lastName,
            querry,
            

            email,
          }),
        }
      );

      if (res) {
        setUserData({
          firstName: "",
          lastName: "",
          email: "",
          
          
          querry: "",
        });
        addNotification(`Thanks for your message, ${firstName}!`, 'success');
      } else {
        addNotification('Please fill all the fields. Try again!', 'error');
      }
    } else {
      addNotification('Please fill all the fields. Try again!', 'error');
    }
  };

  return (
    <div>
      <div id="contact" className=" contact-container flex ">
        <div className="left-col flex flex-col absolute-center  non-mobile">
          <div className="postertext flex flex-col absolute-center max-width">
            <div className="poster-headline  absolute-center max-width ">
              GET YOUR DEVICE NOW
            </div>
            <span className="poster-para absolute-center flex flex-col">
              <div className="poster-para-ani absolute-center">KNOW YOUR</div>
              <div className="poster-para-ani absolute-center">
                KIDNEY HEALTH
              </div>
              <div className="poster-para-ani absolute-center">USING</div>
              <div className="poster-para-ani absolute-center">
                PROFLO-U DEVICE{" "}
              </div>
            </span>
          </div>
        </div>
        <div className="right-col max-width flex  flex-col">
          <div className="only-mobile contactmobileimg flex flex-col ">
            <img
              className="img-center contactimg"
              src={poster}
              alt="watch"
            ></img>
          </div>
          <h1 className="sideheading ">Contact us</h1>
          <p className="sidepara ">
            We value every visitor and customer and opinions from you about us
            and about the product. And, here we promise to go above and beyond
            to you get what you need.
          </p>

          <form className="formwrapper flex flex-col " method="POST">
            <label htmlFor="fname">First Name</label>
            <input
              type="text"
              name="firstName"
              id=""
              className="form-control"
              placeholder="First Name"
              value={userData.firstName}
              onChange={postUserData}
            />

            <label htmlFor="name">Last Name</label>
            <input
              type="text"
              name="lastName"
              id=""
              className="form-control"
              placeholder="Last Name"
              value={userData.lastName}
              onChange={postUserData}
            />

            <label htmlFor="country">Email id</label>
            <input
              type="email" id="email" name="email"
              className="form-control"
              placeholder="Email ID"
              value={userData.email}
              onChange={postUserData}
            />
            <label>
              Choose Product:
              <select placeholder="--Choose and option--" value={userData.product}
              onChange={postUserData}>
                <option disabled={true}  defaultValue >
                  --Choose and option--
                </option>
                <option value="Proflo-U® Max">Proflo-U® Max</option>
                <option value="Proflo-U® Pro">Proflo-U® Pro</option>
                <option value="Proflo-U® Cartridge uAlb">
                  Proflo-U® Cartridge uAlb
                </option>
                <option value="Other">Other</option>
              </select>
            </label>

            <label htmlFor="subject">Querries</label>
            <textarea
              type="text"
              name="querry"
              id=""
              className="form-control"
              placeholder="Enter Your querry"
              value={userData.querry}
              onChange={postUserData}
            />

            <input type="submit" value="Submit" onClick={submitData} />
            <Notification />
          </form>
        </div>
      </div>
    </div>
  );
};

export default DiscoverWatch;
