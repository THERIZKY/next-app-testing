import "@/styles/globals.css";
import { useState } from "react";

import MenuToggle from "@/Components/Elements/MenuToggle";
import NavbarButton from "@/Components/Elements/NavbarButton";

import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
	const [isToggleClicked, setIsToggleClicked] = useState(false);

	const toggleHandler = () => {
		console.log("toggle clicked");
		setIsToggleClicked(!isToggleClicked);
	};

	return (
		<nav className="w-full h-24  flex items-center fixed pl-10 bg-linear-gradient-navbar text-slate-200 z-30">
			<div className="flex gap-10 justify-between md:justify-start w-screen">
				<div className="navbar-logo flex ">
					<Image
						width={500}
						height={500}
						src="/img/h-logo_1.png"
						alt="Logo"
						className="w-12 object-contain"
					/>
				</div>
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
				<div
					className={`menu-toggle ${
						isToggleClicked ? "active" : ""
					} md:hidden`}
					onClick={toggleHandler}
				>
					<div className="bar" />
					<div className="bar" />
					<div className="bar" />
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
