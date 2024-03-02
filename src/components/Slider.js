import React, { useState } from 'react'
import { motion } from 'framer-motion'

const Slider = ({ value, onChange, color, animation, interaction }) => (
	<div>
		<motion.input
			type='range'
			min='0'
			max='100'
			value={value}
			onChange={(e) => onChange(parseInt(e.target.value))}
			className={`range ${color}`}
			style={{
				width: '100%',
				height: '10px',
				transition: `width ${animation.transition.duration}s ease-in-out`,
			}}
			{...interaction}
		/>
	</div>
)

const colors = ['accent-pink-200', 'accent-green-200', 'accent-indigo-200']

const AnimatedSliders = () => {
	const [value1, setValue1] = useState(50)
	const [value2, setValue2] = useState(70)
	const [value3, setValue3] = useState(90)

	const animations = [
		{ transition: { duration: 1 } },
		{ transition: { duration: 0.8 } },
		{ transition: { duration: 2 } },
	]

	const interactions = [
		{ whileHover: { scale: 1.2 } },
		{ whileTap: { scale: 0.8, rotate: 90 } },
		{ whileHover: { scale: 1.5 } },
	]

	return (
		<div className='flex justify-center space-x-16'>
			{colors.map((color, index) => (
				<Slider
					key={index}
					value={index === 0 ? value1 : index === 1 ? value2 : value3}
					onChange={
						index === 0 ? setValue1 : index === 1 ? setValue2 : setValue3
					}
					color={color}
					animation={animations[index]}
					interaction={interactions[index]}
				/>
			))}
		</div>
	)
}

export default AnimatedSliders
