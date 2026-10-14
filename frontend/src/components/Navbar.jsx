import { Link } from "react-router-dom";

const Navbar = ({ pageName }) => {
	return (
		<nav>
			<div className="right">
				<Link to="/"></Link>
			</div>
		</nav>
	);
};
export default Navbar;
