const ThumbnailWrapper = ({ children }) => {
	return (
		<img
			style={{ width: "40%", height: "28%", borderRadius: "12px" }}
			src={children}
			alt="thumbnail"
		/>
	);
};

export default ThumbnailWrapper;
