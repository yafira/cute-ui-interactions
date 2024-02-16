import React from 'react'
import Card from './components/Card'
import { loremIpsum } from 'lorem-ipsum'

const Header = () => {
	return (
		<header className='bg-white text-black text-center py-4'>
			<h1 className='text-8xl font-bold'>cute ui interactions</h1>
		</header>
	)
}

function App() {
	const colors = [
		'blue-200',
		'green-200',
		'indigo-200',
		'lime-100',
		'fuchsia-100',
		'purple-200',
	]

	const animations = [
		{
			whileHover: { scale: 1.1, rotate: 0 },
			whileTap: { scale: 0.9 },
			initial: { scale: 1, rotate: 0 },
			animate: { scale: 1, rotate: 0 },
			transition: {
				ease: 'linear',
				duration: 2,
				x: { duration: 1 },
			},
		},
		{
			whileHover: { scale: 1.2 },
			whileTap: { scale: 0.8 },
			initial: { scale: 1 },
			animate: { scale: 1 },
		},
		{
			whileHover: { scale: 1.15, rotate: -5 },
			whileTap: { scale: 0.4 },
			initial: { scale: 1, rotate: 0 },
			animate: { scale: 1, rotate: 0 },
		},
		{
			whileHover: { scale: 1.05, rotate: 0 },
			whileTap: { scale: 0.7 },
			initial: { scale: 1, rotate: 0 },
			animate: { scale: 1, rotate: 0 },
			transition: { type: 'tween' },
		},
		{
			whileHover: { scale: 1.3, rotate: 0 },
			whileTap: { scale: 0.6 },
			initial: { scale: 1 },
			animate: { scale: 1 },
			transition: { type: 'spring', stiffness: 100 },
		},
		{
			whileHover: { scale: 1.1, rotate: 5 },
			whileTap: { scale: 0.8 },
			initial: { scale: 1, rotate: 0 },
			animate: { scale: 1, rotate: 0 },
		},
	]

	const texts = [
		loremIpsum({ count: 1, units: 'sentences' }),
		loremIpsum({ count: 1, units: 'sentences' }),
		loremIpsum({ count: 1, units: 'sentences' }),
		loremIpsum({ count: 1, units: 'sentences' }),
		loremIpsum({ count: 1, units: 'sentences' }),
		loremIpsum({ count: 1, units: 'sentences' }),
	]

	const images = [
		require('./assets/1.png'),
		require('./assets/2.png'),
		require('./assets/3.png'),
		require('./assets/4.png'),
		require('./assets/5.png'),
		require('./assets/6.png'),
	]

	return (
		<>
			<Header />
			<div className='flex justify-center flex-wrap max-w-screen-lg mx-auto'>
				{colors.map((color, index) => (
					<Card
						key={index}
						title={`Card ${index + 1}`}
						text={texts[index]}
						animation={animations[index]}
						color={color}
						image={images[index]}
					/>
				))}
			</div>
		</>
	)
}
export default App
