import { Stack, Typography } from "@mui/material";
import Wrapper from "../wrappers/SectionWrapper";
import { HeaderWrapper } from "../wrappers/WordChipWrapper";
import MiniCardWrapper from "../wrappers/MiniCardWrapper";
import { story_content } from "../sources/textContent";

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
			<Stack direction={"row"} flexWrap="wrap" justifyContent={"space-evenly"}>
				{story_content.map((story, index) => (
					<MiniCardWrapper
						key={index}
						title={story.title}
						content={story.content}
					/>
				))}
			</Stack>
		</Wrapper>
	);
};

export default AboutMe;
