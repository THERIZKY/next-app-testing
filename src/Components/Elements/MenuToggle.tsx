type MenuToggleProps = {
	isToggleClicked: boolean;
	onClick: () => void;
};

const MenuToggle = ({ onClick, isToggleClicked }: MenuToggleProps) => {
	return (
		<div
			className={`menu-toggle ${
				isToggleClicked ? "active" : ""
			} md:hidden`}
			onClick={onClick}
		>
			<div className="bar" />
			<div className="bar" />
			<div className="bar" />
		</div>
	);
};

export default MenuToggle;
