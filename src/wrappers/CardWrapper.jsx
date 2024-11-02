import { Card } from "@mui/material";

const CardWrapper = ({ children }) => {
	return (
		<Card variant="outline" sx={{ p: 2, m: 1, width: "100%" }}>
			{children}
		</Card>
	);
};

export default CardWrapper;
