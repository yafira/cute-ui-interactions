import React from 'react'
import { motion } from 'framer-motion'

const Card = () => {
	return (
		<motion.div
			className='bg-gray-200 shadow-lg rounded-lg p-6 w-64'
			whileHover={{ scale: 1.05 }}
			whileTap={{ scale: 0.95 }}
		>
			<h1 className='text-xl font-bold mb-4'>Card</h1>
			<p className='text-gray-600'>hello world!</p>
		</motion.div>
	)
}

export default Card
