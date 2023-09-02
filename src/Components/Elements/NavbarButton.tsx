import Link from "next/link";

const NavbarButton = () => {
	return (
		<div className="navbar-content hidden md:flex text-center items-center gap-14 text-2xl">
			<Link
				href="/"
				className="hover:text-orange-500 transition-all duration-200"
			>
				Home
			</Link>
			<Link
				href="/store"
				className="hover:text-orange-500 transition-all duration-200"
			>
				Store
			</Link>
			<Link
				href="/rules"
				className="hover:text-orange-500 transition-all duration-200"
			>
				Rules
			</Link>
			<Link
				href="/staff"
				className="hover:text-orange-500 transition-all duration-200"
			>
				Staff
			</Link>
		</div>
	);
};
export default NavbarButton;
