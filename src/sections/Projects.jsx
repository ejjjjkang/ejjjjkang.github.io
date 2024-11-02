import Wrapper from "../wrappers/SectionWrapper";
import CardWrapper from "../wrappers/CardWrapper";
import { project_content } from "../sources/textContent";
import { Button, Stack, Typography, Skeleton, Box } from "@mui/material";
import { ConferenceChipWrapper } from "../wrappers/WordChipWrapper";
import ThumbnailWrapper from "../wrappers/ThumbnailWrapper";
import { HeaderWrapper } from "../wrappers/WordChipWrapper";
import ButtonWrapper from "../wrappers/ButtonWrapper";

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
								<ThumbnailWrapper>{project.img}</ThumbnailWrapper>
							) : (
								<Skeleton variant="rectangular" width={300} height={150} />
							)}
							<Stack
								direction={"column"}
								alignItems={"flex-start"}
								sx={{ p: 2 }}
							>
								<Box variant="span" sx={{ lineHeight: "150%", pb: 1 }}>
									<ConferenceChipWrapper>
										{project.conference}
									</ConferenceChipWrapper>
									{project.title}
								</Box>
								<Box variant="span">
									{project.author.map((author) => (
										<Typography key={author} sx={{ display: "inline", pr: 1 }}>
											{author === "Eun Jeong Kang" ? (
												<strong style={{ color: "#556fcf" }}>{author}</strong>
											) : (
												author
											)}
										</Typography>
									))}
								</Box>
								<Stack direction={"row"} justifyContent={"flex-end"}>
									{project.published ? (
										<>
											<ButtonWrapper link={project.link_abs} text="Abs" />
											<ButtonWrapper link={project.link_doi} text="Doi" />
											<ButtonWrapper link={project.link_pdf} text="PDF" />
										</>
									) : (
										<>
											<Stack sx={{ mr: 1, mt: 2 }}>
												<Button variant="outlined" disabled>
													To appear
												</Button>
											</Stack>
										</>
									)}
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
