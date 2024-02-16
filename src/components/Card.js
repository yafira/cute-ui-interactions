import React from 'react'
import { motion } from 'framer-motion'

const Card = ({ title, text, animation, color, image }) => {
	return (
		<motion.div
			className={`${color} shadow-lg rounded-lg p-6 w-64 m-4 flex flex-col items-center`}
			whileHover={animation.whileHover}
			whileTap={animation.whileTap}
			initial={animation.initial}
			animate={animation.animate}
			transition={animation.transition}
		>
			<img src={image} alt={title} className='w-24 h-24 object-cover mb-4' />
			<div className='text-center p-4'>
				<h1 className='text-xl font-bold mb-4'>{title}</h1>
				<p className='text-gray-600'>{text}</p>
			</div>
		</motion.div>
	)
}

export default Card
