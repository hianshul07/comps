import Button from '../components/Button';
import { GoBell } from 'react-icons/go';

const ButtonPage = () => {
	const handleClick = () => {
		console.log('hehehehehehe car');
	};

	return (
		<div>
			<div>
				<Button secondary outline onClick={handleClick} className='text-2xl'>
					<GoBell />
					Click me!!
				</Button>
			</div>
			<div>
				<Button danger outline>
					Buy Now!
				</Button>
			</div>
			<div>
				<Button warning>See Deal!</Button>
			</div>
			<div>
				<Button secondary outline>
					Hide Ads!
				</Button>
			</div>
			<div>
				<Button primary rounded>
					Something!
				</Button>
			</div>
		</div>
	);
};
export default ButtonPage;
