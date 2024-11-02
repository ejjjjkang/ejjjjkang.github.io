import Wrapper from "../wrappers/SectionWrapper";
import CardWrapper from "../wrappers/CardWrapper";
import { project_content } from "../sources/textContent";
import { Button, Stack, Typography, Skeleton } from "@mui/material";
import { ConferenceChipWrapper } from "../wrappers/WordChipWrapper";
import ThumbnailWrapper from "../wrappers/ThumbnailWrapper";
import { HeaderWrapper } from "../wrappers/WordChipWrapper";

const Projects = () => {
	return (
		<Wrapper>
			<Stack direction={"column"} sx={{ p: 2 }}>
				<HeaderWrapper id="publications">Publications</HeaderWrapper>
				<Typography variant="p">
					This is a collection of projects I have worked on. You can find more
					information in the PDFs.
				</Typography>
			</Stack>
			<Stack direction={"row"} flexWrap={"wrap"}>
				{project_content.map((project, index) => (
					<CardWrapper key={index}>
						<Stack direction={"row"}>
							{project.img ? (
								<ThumbnailWrapper>project.img</ThumbnailWrapper>
							) : (
								<Skeleton variant="rectangular" width={300} height={150} />
							)}
							<Stack
								direction={"column"}
								alignItems={"flex-start"}
								sx={{ p: 2 }}
							>
								<span>
									<ConferenceChipWrapper>
										{project.conference}
									</ConferenceChipWrapper>
									{project.title}
								</span>
								<span>
									{project.author.map((author) => (
										<Typography key={author} sx={{ display: "inline", pr: 1 }}>
											{author === "Eun Jeong Kang" ? (
												<strong>{author}</strong>
											) : (
												author
											)}
										</Typography>
									))}
								</span>
								<Stack direction={"row"} justifyContent={"flex-end"}>
									<Stack>
										<Button href={project.link}>Abs</Button>
									</Stack>
									<Stack>
										<Button href={project.link}>DOI</Button>
									</Stack>
									<Stack>
										<Button href={project.link}>PDF</Button>
									</Stack>
								</Stack>
							</Stack>
						</Stack>
					</CardWrapper>
				))}
			</Stack>
		</Wrapper>
	);
};

export default Projects;
