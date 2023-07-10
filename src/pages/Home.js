import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';

import motionParams from '../services/motionParams';
import Header from './../components/header/Header';

const Home = () => {
    return (
		<motion.div {...motionParams}>

			<Helmet>
				<meta name="description" content="Zinovy Lebed Portfolio"/>
    		<title>Zinovy Lebed</title>
			</Helmet>

			<Header />
			<main className="section">
				<div className="container">
					<ul className="content-list">
						<li className="content-list__item">
							<h2 className="title-2">Frontend</h2>
							<p>
								HTML, CSS, SCSS, JavaScript, React, Redux, TypeScript, REST API, Git
							</p>
						</li>
						<li className="content-list__item">
							<h2 className="title-2">Backend</h2>
							<p>Firebase</p>
						</li>
					</ul>
				</div>
			</main>
		</motion.div>
	);
}

export default Home;