import { Typography } from "@mui/material";
import Wrapper from "../wrappers/SectionWrapper";
import { HeaderWrapper } from "../wrappers/WordChipWrapper";

const AboutMe = () => {
	return (
		<Wrapper>
			<HeaderWrapper id="me">About Me</HeaderWrapper>
			<p>
				Previously, I worked as a digital content strategist and front-end
				developer who designs brand experience and incorporates
				multi-stakeholders' values with advertisements. Drawing on these
				experiences, I engaged in several research projects focused on
				AI-generated idol voices and algorithm biases of social media platforms.
			</p>
		</Wrapper>
	);
};

export default AboutMe;
