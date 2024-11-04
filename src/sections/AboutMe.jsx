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
				Previously, I worked as a digital marketing strategist and front-end
				developer that designs brand experience and incorporates
				multi-stakeholders' values with advertisements. Drawing on these
				experiences, I engaged in research projects that investigate societal
				impacts of AI technologies on end-users.
			</p>
			<Stack direction={"row"}>
				<Stack
					direction={"column"}
					flexWrap="wrap"
					justifyContent={"space-evenly"}
				>
					{story_content.map((story, index) => (
						<MiniCardWrapper
							key={index}
							title={story.title}
							content={story.content}
						/>
					))}
				</Stack>
				<Stack></Stack>
			</Stack>
		</Wrapper>
	);
};

export default AboutMe;
