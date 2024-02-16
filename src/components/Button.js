import React from 'react'
import { motion } from 'framer-motion'

const Button = ({ text, animation, color }) => {
	return (
		<motion.button
			className={`text-black px-4 py-2 rounded-lg m-2 shadow-md ${color}`}
			whileHover={animation.whileHover}
			whileTap={animation.whileTap}
			initial={animation.initial}
			animate={animation.animate}
			transition={animation.transition}
		>
			{text}
		</motion.button>
	)
}

export default Button
