import { useState } from "react";

import MenuToggle from "@/Components/Elements/MenuToggle";
import NavbarButton from "@/Components/Elements/NavbarButton";

import Image from "next/image";

const Navbar = () => {
	const [isToggleClicked, setIsToggleClicked] = useState(false);

	const toggleHandler = () => {
		console.log("toggle clicked");
		setIsToggleClicked(!isToggleClicked);
	};

	return (
		<nav className="w-full h-24 fixed flex items-center pl-10 bg-linear-gradient-navbar text-slate-200 z-30">
			<div className="flex gap-10 justify-between md:justify-start w-screen">
				<div className="navbar-logo flex ">
					<Image
						width={1000}
						height={1000}
						src="/img/h-logo_1.png"
						alt="Logo"
						className="w-12 object-contain"
					/>
				</div>
				<NavbarButton />
				<MenuToggle
					onClick={toggleHandler}
					isToggleClicked={isToggleClicked}
				/>
			</div>
		</nav>
	);
};

export default Navbar;
