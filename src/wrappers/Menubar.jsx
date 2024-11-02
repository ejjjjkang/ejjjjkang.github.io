import { Box, Menu, Stack, Typography } from "@mui/material";
import "./index.css";
import { MenuItemWrapper } from "./WordChipWrapper";
import { Link } from "react-router-dom";

const Menubar = () => {
	return (
		<Stack
			direction={"column"}
			alignItems={"flex-end"}
			sx={{ position: "fixed", right: "18%", zIndex: 3, opacity: 0.8 }}
		>
			<MenuItemWrapper>
				<Link to="/#me">About me</Link>
			</MenuItemWrapper>
			<MenuItemWrapper>
				<Link to="/#publications">Publications</Link>
			</MenuItemWrapper>
			{/* <MenuItemWrapper>
				<Link to="/#reading-list">Reading List</Link>
			</MenuItemWrapper> */}
			{/* <MenuItemWrapper>
				<Link to="/#fun-project">Fun Projects</Link>
			</MenuItemWrapper> */}
			<MenuItemWrapper>
				<Link to="/#resource">Resource</Link>
			</MenuItemWrapper>
			{/* <MenuItemWrapper>
				<Link to="/#resource">Korea</Link>
			</MenuItemWrapper> */}
		</Stack>
	);
};

export default Menubar;
