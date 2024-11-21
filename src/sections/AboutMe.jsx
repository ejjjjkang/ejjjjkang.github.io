import { Stack, Typography } from "@mui/material";
import Wrapper from "../wrappers/SectionWrapper";
import { HeaderWrapper } from "../wrappers/WordChipWrapper";
import MiniCardWrapper from "../wrappers/MiniCardWrapper";
import { story_content } from "../sources/textContent";

const AboutMe = () => {
	return (
		<Wrapper>
			<HeaderWrapper id="me">
				Other Projects (Web development / Exhibition){" "}
			</HeaderWrapper>

			<Stack direction={"row"}>
				<Stack
					direction={"column"}
					flexWrap="wrap"
					justifyContent={"space-evenly"}
				>
					{story_content.map((story, index) => (
						<MiniCardWrapper
							key={index}
							img={story.img}
							title={story.title}
							content={story.content}
							link={story.link}
						/>
					))}
				</Stack>
				<Stack></Stack>
			</Stack>
		</Wrapper>
	);
};

export default AboutMe;
