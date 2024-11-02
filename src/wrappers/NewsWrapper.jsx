import { Stack } from "@mui/material";

const NewsWrapper = ({ children, date }) => {
	return (
		<Stack direction={"row"} sx={{ alignItems: "center", mb: 1 }}>
			<Stack>{date}</Stack>
			<Stack sx={{ pl: 2 }}>{children}</Stack>
		</Stack>
	);
};

export default NewsWrapper;
