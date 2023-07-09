import { FaExternalLinkAlt } from "react-icons/fa";

const BtnVisit = ({ link }) => {
	return (
		<a href={link} target="_blank" rel="noreferrer" className="btn-outline">
			<FaExternalLinkAlt/>
			Visit
		</a>
	);
};

export default BtnVisit;