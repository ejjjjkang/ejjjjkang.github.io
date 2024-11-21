import React, { useState } from "react";
import { Card, Stack, Button } from "@mui/material";
import styled from "styled-components";
import ButtonWrapper from "./ButtonWrapper";

const StyledCard = styled.a`
	text-decoration: none !important;
	color: #666666;
	font-size: 1em;
	font-weight: 300;
	z-index: 10;
	/* position: absolute; */
`;

const MiniCardWrapper = ({ title, img, content, link }) => {
	const [visible, setVisible] = useState(false);

	return (
		<Card
			variant="outline"
			sx={{
				m: 2,
				borderRadius: "10px",
				position: "relative",
			}}
		>
			<Stack direction={"row"} sx={{ p: 2, m: 1, width: "100%" }}>
				<img src={img} style={{ width: "30%" }}></img>
				<Stack direction={"column"} sx={{ ml: 3 }}>
					<StyledCard>{title}</StyledCard>
					<ButtonWrapper link={link} text={"More"}></ButtonWrapper>
				</Stack>
			</Stack>
		</Card>
	);
};

export default MiniCardWrapper;
