import React, { useState } from 'react'
import { motion } from 'framer-motion'

const Slider = ({ value, onChange, animation, interaction }) => (
	<div className='slider-container'>
		<input
			type='range'
			min='0'
			max='100'
			value={value}
			onChange={(e) => onChange(parseInt(e.target.value))}
			className='slider'
		/>
		<motion.div
			className='slider-bar'
			style={{ width: `${value}%` }}
			initial={{ width: '0%' }}
			animate={{ width: `${value}%` }}
			transition={animation.transition}
			{...interaction}
		></motion.div>
	</div>
)

const AnimatedSliders = () => {
	const [value1, setValue1] = useState(50)
	const [value2, setValue2] = useState(30)
	const [value3, setValue3] = useState(70)

	const animations = [
		{ transition: { duration: 1 } },
		{ transition: { duration: 0.5 } },
		{ transition: { duration: 2 } },
	]

	const interactions = [
		{ whileHover: { scale: 1.2 } },
		{ whileHover: { rotate: 90 } },
		{ whileHover: { scale: 1.5 } },
	]

	return (
		<div className='flex justify-center space-x-4'>
			<Slider
				value={value1}
				onChange={setValue1}
				animation={animations[0]}
				interaction={interactions[0]}
			/>
			<Slider
				value={value2}
				onChange={setValue2}
				animation={animations[1]}
				interaction={interactions[1]}
			/>
			<Slider
				value={value3}
				onChange={setValue3}
				animation={animations[2]}
				interaction={interactions[2]}
			/>
		</div>
	)
}

export default AnimatedSliders
