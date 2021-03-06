import React from "react";

//style
import styleTB from "./Toolbar.module.css";

//components
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import SideDrawerToggle from "../SideDrawer/SideDrawerToggle/SideDrawerToggle";

const Toolbar = props => {
	return (
		<header className={styleTB.Toolbar}>
			<SideDrawerToggle toggleSideDrawer={props.toggleSideDrawer} />
			<div className={styleTB.Logo}>
				<Logo />
			</div>
			<nav className={styleTB.DesktopOnly}>
				{" "}
				<NavigationItems isAuthenticated={props.isAuthenticated} />
			</nav>
		</header>
	);
};

export default Toolbar;
