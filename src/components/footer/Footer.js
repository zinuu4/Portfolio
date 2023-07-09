import "./style.css";

import vk from './../../img/icons/vk.svg';
import instagram from './../../img/icons/instagram.svg';
import twitter from './../../img/icons/twitter.svg';
import linkedIn from './../../img/icons/linkedIn.svg';
import gitHub from './../../img/icons/gitHub.svg';

const Footer = () => {
    return (
		<footer className="footer">
			<div className="container">
				<div className="footer__wrapper">
					<ul className="social">
						<li className="social__item">
							<a target="_blank" href="https://twitter.com/LebedZinoviy">
								<img src={twitter} alt="Link" />
							</a>
						</li>
						<li className="social__item">
							<a target="_blank" href="https://github.com/zinuu4">
								<img src={gitHub} alt="Link" />
							</a>
						</li>
						<li className="social__item">
							<a target="_blank" href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile">
								<img src={linkedIn} alt="Link" />
							</a>
						</li>
					</ul>
					<div className="copyright">
						<p>© 2022 frontend-dev.com</p>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;