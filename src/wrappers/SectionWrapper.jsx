import { Stack } from "@mui/material";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";

const Wrapper = ({ children }) => {
	return (
		<Stack direction="column" sx={{ height: "100vh", overflow: "auto", p: 5 }}>
			{children}
		</Stack>
	);
};

export default Wrapper;
