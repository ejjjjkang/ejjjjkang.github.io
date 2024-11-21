import { Card } from "@mui/material";
import { Fade } from "react-awesome-reveal";

const CardWrapper = ({ children }) => {
	return (
		<Card variant="outline" sx={{ p: 2, m: 1, width: "100%" }}>
			<Fade>{children}</Fade>
		</Card>
	);
};

export default CardWrapper;
