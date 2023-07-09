import gitHubIcon from './gitHub-black.svg';
import "./style.css"

const BtnGitHub = ({ link }) => {
	return (
		<a style={{'marginRight': '10px'}} href={link} target="_blank" rel="noreferrer" className="btn-outline">
			<img src={gitHubIcon} alt="" />
			GitHub repo
		</a>
	);
};

export default BtnGitHub;