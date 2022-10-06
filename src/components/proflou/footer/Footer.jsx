import React, { useState } from 'react'
import './Footer.css'
import footerlogo from "../../../assets/images/proflou/footer logo.png"
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa'
import { AiOutlineTwitter, AiOutlineInstagram } from 'react-icons/ai'


const Footer = () => {

	const [userData, setUserData] = useState({
		email: "",
		question: "",

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
		const { email, question } = userData;

		if (email && question) {
			const res = fetch(
				`https://proflou-chic-website-default-rtdb.asia-southeast1.firebasedatabase.app/feedback.json`,
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({
						email,
						question,

					}),
				}
			);

			if (res) {
				setUserData({
					email: "",
					question: "",
				});
				alert("Thank you for contacting");
			} else {
				alert("plz fill the data");
			}
		} else {
			alert("plz fill the data");
		}
	};



	return (
		<div>

			<footer class="footer">
				<div class="footercontainer flex absolute-center max-width">
					<div class="row  ">
						<div class="footer-col ">

							<img src={footerlogo} className="footerlogo" ></img>
							<div className="logotext flex flex-col flex-start">


								<div className="logopt">Prantae Solutions Private Limited</div>
								<div className="logopt">Corporate Office: KIIT-TBI, Patia,</div>
								<div className="logopt">Bhubaneswar 751024</div>
								<div className="logopt">Email:<a id='mail' href="mailto:proflou@prantae.com"> proflou@prantae.com</a></div>


							</div>
							<div className='flex flex-col flex-start'>
								<div className="social-links  ">
									<a href="https://www.facebook.com/prantaesolutions"><FaFacebookF /></a>
									<a href="https://twitter.com/prantae"><AiOutlineTwitter /></a>
									<a href="https://www.instagram.com/prantaesolutionsprivatelimited/"><AiOutlineInstagram /></a>
									<a href="https://www.linkedin.com/company/prantae/mycompany/"><FaLinkedinIn /></a>

								</div>
							</div>
						</div>
						<div className="footer-col ">
							<h4>get help</h4>
							<ul>
								<li><a href="#faq">FAQ</a></li>
								<li><a href="https://buy.proflou.com">shipping</a></li>
								<li><a href="https://buy.proflou.com">returns</a></li>
								<li><a href="https://buy.proflou.com">order status</a></li>
								<li><a href="https://buy.proflou.com">payment options</a></li>
							</ul>
						</div>
						{false && <>
							<div class="footer-col feedback ">

								<h4>Have any Question or Feedback?</h4>
								<div className="formtext">

									<label htmlFor="name">Email</label>
									<input
										type="email"
										name="email"
										id=""
										className="form-control"
										placeholder="Email"
										value={userData.email}
										onChange={postUserData}
									/>

									<label htmlFor="question">Question</label>
									<input
										type="text"
										name="question"
										id=""
										className="form-control"
										placeholder="question"
										value={userData.question}
										onChange={postUserData}
									/>

									<button className='footerformbutton' onClick={submitData}>Submit</button>
								</div>
							</div>
						</>}

					</div>
				</div>
			</footer>
			<div className="copyright flex flex-col absolute-center ">
				<h4> &#169;2022 by Prantae Solutions Pvt. Ltd. | Email- info@prantae.com - v1.0.3</h4>
			</div>
		</div>

	)
}

export default Footer