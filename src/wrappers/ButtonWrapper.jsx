import { Button, Stack } from "@mui/material";

const ButtonWrapper = ({ link, text }) => {
	return (
		<Stack sx={{ mr: 1, mt: 2 }}>
			<Button variant="outlined" href={link} target="_blank">
				{text}
			</Button>
		</Stack>
	);
};

export default ButtonWrapper;
