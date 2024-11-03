import { Stack } from "@mui/material";
import ProfileWrapper from "../wrappers/ProfileWrapper";
import Wrapper from "../wrappers/SectionWrapper";

import "./index.css";
import NewsWrapper from "../wrappers/NewsWrapper";
import { news_content } from "../sources/textContent";

const Main = () => {
	return (
		<Wrapper>
			<Stack
				sx={{
					maxWidth: "100%",
					maxHeight: "100%",
					margin: "auto",
				}}
			>
				<Stack direction={"row"} alignItems={"center"}>
					<ProfileWrapper />
					<Stack direction={"column"} sx={{ p: 5 }}>
						<Stack sx={{ lineHeight: "160%" }}>
							<p>
								I am a third-year PhD student in{" "}
								<a className="inline_link" href="https://infosci.cornell.edu/">
									Information Science
								</a>{" "}
								at Cornell University. I am currently working with{" "}
								<a
									className="inline_link"
									href="https://infosci.cornell.edu/content/fussell"
								>
									Susan Fussell
								</a>
								. <br />
								My research focuses on designing AI systems and communication
								technologies that incorporates social values. Utilizing
								user-centered methods (e.g., surveys, interviews, speculative
								design), I aim to design AI systems that promote appropriate
								reliance with responsibility, which aligns with stakeholder
								values. <br />
							</p>
						</Stack>
						{news_content.map((news, index) =>
							news.featureds ? (
								<NewsWrapper key={index} date={news.date}>
									{news.content}
								</NewsWrapper>
							) : null
						)}
					</Stack>
				</Stack>
			</Stack>
		</Wrapper>
	);
};

export default Main;