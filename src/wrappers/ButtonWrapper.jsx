import { Button, Stack } from "@mui/material";

const ButtonWrapper = ({
	link,
	text,
	abs,
	index,
	activeIndex,
	handleClick,
}) => {
	if (link) {
		return (
			<Stack sx={{ mr: 1, mt: 2 }}>
				<Button variant="outlined" href={link} target="_blank">
					{text}
				</Button>
			</Stack>
		);
	}

	if (abs) {
		return (
			<Stack sx={{ mr: 1, mt: 2 }}>
				<Button
					key={index}
					variant="outlined"
					onClick={() => handleClick(index)}
					style={
						activeIndex == index
							? {
									backgroundColor: "#bf55cf",
									color: "white",
									borderColor: "white",
							  }
							: null
					}
				>
					{text}
				</Button>
			</Stack>
		);
	}
};

export default ButtonWrapper;
