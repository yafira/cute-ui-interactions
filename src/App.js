import React from 'react'
import Card from './components/Card'
import Button from './components/Button'
import { loremIpsum } from 'lorem-ipsum'
import DropdownMenu from './components/DropdownMenu'

const Header = () => {
	return (
		<header className='bg-white text-black text-center py-4'>
			<h1 className='text-8xl font-bold'>cute ui playground</h1>
			<h2 className='text-2xl font-regular'>
				micro-interactions built using react, framer motion and tailwind css.
			</h2>
		</header>
	)
}

function App() {
	const colors = [
		'bg-blue-100',
		'bg-green-100',
		'bg-indigo-100',
		'bg-lime-100',
		'bg-fuchsia-100',
		'bg-purple-100',
	]

	const cardAnimations = [
		{
			whileHover: { scale: 1.1, rotate: 0 },
			whileTap: { scale: 0.9 },
			initial: { scale: 1, rotate: 0 },
			animate: { scale: 1, rotate: 0 },
			transition: {
				ease: 'linear',
				duration: 1,
				x: { duration: 1 },
			},
		},
		{
			whileHover: { scale: 0.2 },
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
			whileHover: { scale: 1.05 },
			whileTap: { scale: 0.7, rotate: 360 },
			initial: { scale: 1, rotate: 0 },
			animate: { rotate: 0 },
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
			whileTap: { rotateY: 360 },
			initial: { rotateY: 0 },
			animate: { rotateY: 0 },
			transition: { duration: 2 },
		},
	]

	const btnAnimations = [
		{
			whileHover: { scale: 1.2, transition: { duration: 1 } },
			whileTap: { scale: 0.9 },
		},
		{
			whileTap: { scale: 0.85 },
			transition: { type: 'spring', damping: 10, mass: 0.75, stiffness: 100 },
		},
		{
			whileTap: { opacity: 0.4 },
			transition: { duration: 0.3 },
		},
		{
			whileTap: { rotate: 360 },
			transition: { type: 'spring', duration: 5, bounce: 0.6 },
		},
		{
			whileHover: { scale: 1.3, rotate: 0 },
			whileTap: { scale: 0.6 },
		},

		{
			whileTap: { rotate: 90, scale: 0.75 },
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
						animation={cardAnimations[index]}
						color={color}
						image={images[index]}
					/>
				))}
			</div>
			<div className='flex justify-center mt-8'>
				{colors.map((color, index) => (
					<Button
						key={index}
						text={`Button ${index + 1}`}
						animation={btnAnimations[index]}
						color={color}
					/>
				))}
			</div>
			<DropdownMenu />
		</>
	)
}
export default App
