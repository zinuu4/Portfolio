import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';

import motionParams from '../services/motionParams.js';
import Project from '../components/project/Project';
import {projects} from "./../helpers/projectsList"

const Projects = () => {
	return (
		<motion.main {...motionParams} className="section">

			<Helmet>
				<meta name="description" content="Portfolio projects"/>
    		<title>Projects</title>
			</Helmet>

			<div className="container">
				<h2 className="title-1">Projects</h2>
				<ul className="projects">
					{projects.map((project, index) => {
						return (
							<Project
								key={index}
								title={project.title}
								img={project.img}
								index={index}
							/>
						);
					})}
				</ul>
			</div>
		</motion.main>
	);
};

export default Projects;
