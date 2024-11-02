import { Card } from "@mui/material";
import styled from "styled-components";

const StyledCard = styled.a`
	text-decoration: none !important;
	color: #7d7d7d;
	font-size: 1.8em;
	font-weight: 900;
`;

const MiniCardWrapper = ({ title, content }) => {
	return (
		<Card
			sx={{
				p: 3,
				m: 2,
				width: "150px",
				height: "150px",
				borderRadius: "10%",
			}}
		>
			<StyledCard>{title}</StyledCard>
		</Card>
	);
};

export default MiniCardWrapper;
