import { Card } from "@mui/material";
import styled from "styled-components";

const StyledCard = styled.a`
	text-decoration: none !important;
	color: #ffffff;
	font-size: 3em;
	font-weight: 900;
	z-index: 10;
	position: absolute;
`;

const MiniCardWrapper = ({ title, content }) => {
	return (
		<Card
			sx={{
				width: "60%",
				height: "100px",
				m: 2,
				borderRadius: "10px",
				position: "relative",
			}}
		>
			<StyledCard>{title}</StyledCard>
			<img
				src={content}
				style={{ zIndex: 10, width: "200%", margin: "auto", display: "block" }}
			></img>
		</Card>
	);
};

export default MiniCardWrapper;
