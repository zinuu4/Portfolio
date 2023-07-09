import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {useParams} from "react-router-dom";

import motionParams from "../services/motionParams";
import BtnGitHub from "../components/btnGitHub/BtnGitHub";
import BtnVisit from "../components/btnVisit/BtnVisit";
import {projects} from "./../helpers/projectsList"

const Project = () => {
	const {id} = useParams();
	const project = projects[id];

    return (
		<motion.main {...motionParams} className="section">
			<div className="container">
			<Link to='/projects' style={{'fontSize': '18px', 'cursor': 'pointer', 'color': 'var(--title-1)'}} >&larr; Back</Link>
				<div className="project-details">
					<h1 className="title-1">{project.title}</h1>

					<img
						src={project.imgBig}
						alt={project.title}
						className="project-details__cover"
					/>

					<div className="project-details__desc">
						<p>Skills: {project.skills}</p>
					</div>

					<div style={{'display': "flex"}}>
						{project.gitHubLink && (
							<BtnGitHub link={project.gitHubLink}/>
						)}
						{project.gitHubLink && (
							<BtnVisit link={project.visitLink}/>
						)}
					</div>

				</div>
			</div>
		</motion.main>
	);
}

export default Project;