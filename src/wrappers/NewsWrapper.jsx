const NewsWrapper = ({ children, date }) => {
	return (
		<div>
			<div>{date}</div>
			{children}
		</div>
	);
};

export default NewsWrapper;
