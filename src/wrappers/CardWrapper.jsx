import { Card } from "@mui/material";

const CardWrapper = ({ children }) => {
	return (
		<Card variant="outline" sx={{ p: 3, m: 3, width: "100%" }}>
			{children}
		</Card>
	);
};

export default CardWrapper;
