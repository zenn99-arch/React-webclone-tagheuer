import React, { useEffect, useState } from "react";
import "./FreshDesk.css";
import poster from "../../../assets/images/proflou/windowpeekjpg.jpg";
import FreshdeskWidget from '@personare/react-freshdesk-widget';

function useNotification() {
  const [message, setMessage] = React.useState(null);
  const [messageType, setMessageType] = React.useState('info');
  const DELAY = 5000;
  


  useEffect(() => {

  }, [])

  useEffect(() => {
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


const FreshDesk = () => {
  const [Notification, addNotification] = useNotification();
  const showRestContent = true
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    querry: "",
    product: "",
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
    const { firstName, lastName, email, querry, } = userData;

    if (firstName && lastName && email && querry) {


      if (false) {
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
        {showRestContent &&
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
        }

        <div className="right-col max-width flex  flex-col">
          {showRestContent && <>
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
            </p></>}


          <FreshdeskWidget
            url="https://prantae.freshdesk.com"
            buttonText="Send"
            submitThanks="Thank you!!!"
          />
        </div>
      </div>
    </div>
  );
};

export default FreshDesk;
