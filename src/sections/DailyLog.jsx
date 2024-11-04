import Wrapper from "../wrappers/SectionWrapper";
import { Typography } from "@mui/material";
import { HeaderWrapper } from "../wrappers/WordChipWrapper";

const DailyLog = () => {
	return (
		<Wrapper>
			<HeaderWrapper id="resource">Resource / Entertainment</HeaderWrapper>I
			This section is for sharing resources that I found useful for research!
			{/* <iframe
				style={{ borderRadius: "12px" }}
				src="https://open.spotify.com/embed/playlist/4PK5g801rWmxgHVTDBBbtd?utm_source=generator&theme=0"
				width="30%"
				height="352"
				frameBorder="0"
				allowFullScreen
				allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
				loading="lazy"
			></iframe> */}
			<iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQI3qO38r8_RDM0uvG4EjVZBp6ttgE6_-569Guz8BHcpOM8T14kA_FktfMw8RUb21zAtQknF0iqvLUK/pubhtml?gid=0&amp;single=true&amp;widget=true&amp;headers=false"></iframe>
		</Wrapper>
	);
};

export default DailyLog;
