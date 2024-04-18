const Accordion = ({ items }) => {
	const renderedItems = items.map((item) => {
		return (
			<div key={item.label}>
				<h1>{item.label}</h1>
				<p>{item.content}</p>
			</div>
		);
	});

	return <div>{renderedItems}</div>;
};
export default Accordion;
