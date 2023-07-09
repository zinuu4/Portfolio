import { motion } from 'framer-motion';

import motionParams from '../services/motionParams.js';

const Contacts = () => {
    return (
		<motion.main {...motionParams} className="section">
			<div className="container">
				<h1 className="title-1">Contacts</h1>

				<ul className="content-list">
					<li className="content-list__item">
						<h2 className="title-2">Location</h2>
						<p>Dnipro, Ukraine</p>
					</li>
					<li className="content-list__item">
						<h2 className="title-2">Telegram</h2>
						<p>
							<a href="https://t.me/zinu_4">@zinu_4</a>
						</p>
					</li>
					<li className="content-list__item">
						<h2 className="title-2">Email</h2>
						<p>
							<a href="mailto:lebedzinovij4@gmail.com">
								lebedzinovij4@gmail.com
							</a>
						</p>
					</li>
				</ul>
			</div>
		</motion.main>
	);
}

export default Contacts;