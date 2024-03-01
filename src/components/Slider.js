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
			className={`range ${`accent-${color}-200`} hover:${`accent-${color}-300`}`}
			style={{
				width: '100%',
				height: '10px',
				transition: `width ${animation.transition.duration}s ease-in-out`,
			}}
			{...interaction}
		/>
	</div>
)

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
			<Slider
				value={value1}
				onChange={setValue1}
				color='green'
				animation={animations[0]}
				interaction={{ ...interactions[0], whileDrag: { opacity: 0.5 } }}
			/>
			<Slider
				value={value2}
				onChange={setValue2}
				color='violet'
				animation={animations[1]}
				interaction={interactions[1]}
			/>
			<Slider
				value={value3}
				onChange={setValue3}
				color='pink'
				animation={animations[2]}
				interaction={interactions[2]}
			/>
		</div>
	)
}

export default AnimatedSliders
