import { Stack } from "@mui/material";

const ThumbnailWrapper = ({ children }) => {
	return (
		<Stack sx={{ width: { md: "40%", xs: "100%" }, height: "28%" }}>
			<img style={{ borderRadius: "12px" }} src={children} alt="thumbnail" />
		</Stack>
	);
};

export default ThumbnailWrapper;
