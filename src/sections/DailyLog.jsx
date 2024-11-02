import Wrapper from "../wrappers/SectionWrapper";
import { Typography } from "@mui/material";
import { HeaderWrapper } from "../wrappers/WordChipWrapper";

const DailyLog = () => {
	return (
		<Wrapper>
			<HeaderWrapper id="resource">Resource / Entertainment</HeaderWrapper>I
			enjoy listening to music on spotify!
			<iframe
				style={{ borderRadius: "12px" }}
				src="https://open.spotify.com/embed/playlist/4PK5g801rWmxgHVTDBBbtd?utm_source=generator&theme=0"
				width="30%"
				height="352"
				frameBorder="0"
				allowFullScreen
				allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
				loading="lazy"
			></iframe>
		</Wrapper>
	);
};

export default DailyLog;
