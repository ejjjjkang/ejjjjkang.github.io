import Wrapper from "../wrappers/SectionWrapper";
import { HeaderWrapper } from "../wrappers/WordChipWrapper";

export const ReadingList = () => {
	return (
		<Wrapper>
			<HeaderWrapper id="reading-list">Reading List</HeaderWrapper>
			This is a list of papers and books that I got recommended or read. The
			reading list includes topics related to Human-AI interactions, responsible
			computing, and creator economy.
			<ul>
				<li>How to Win Friends and Influence People by Dale Carnegie</li>
				<li>Atomic Habits by James Clear</li>
				<li>Deep Work by Cal Newport</li>
				<li>Thinking, Fast and Slow by Daniel Kahneman</li>
			</ul>
		</Wrapper>
	);
};
