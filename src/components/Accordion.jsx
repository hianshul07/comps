import { useState } from 'react';
import { FaChevronCircleDown, FaChevronCircleLeft } from 'react-icons/fa';

const Accordion = ({ items }) => {
	const [expandedIndex, setExpandedIndex] = useState(-1);

	const handleClick = (nextIndex) => {
		if (nextIndex === expandedIndex) {
			setExpandedIndex(-1);
		} else {
			setExpandedIndex(nextIndex);
		}
	};

	const renderedItems = items.map((item, index) => {
		const isExpanded = index === expandedIndex;

		const icon = (
			<span className='text-2xl'>
				{isExpanded ? <FaChevronCircleDown /> : <FaChevronCircleLeft />}
			</span>
		);

		return (
			<div key={item.label} className='cursor-pointer'>
				<div
					onClick={() => handleClick(index)}
					className='flex items-center justify-between p-2 cursor-pointer border-b-2 bg-gray-50'
				>
					{item.label}
					{icon}
				</div>
				{isExpanded && <div className=' border-b-2 p-4 bg-gray-200'>{item.content}</div>}
			</div>
		);
	});

	return <div>{renderedItems}</div>;
};
export default Accordion;
