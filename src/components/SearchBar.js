import React, { useState } from 'react'
import { motion } from 'framer-motion'

const SearchBar = () => {
	const [isFocused, setIsFocused] = useState(false)

	const handleFocus = () => {
		setIsFocused(true)
	}

	const handleBlur = () => {
		setIsFocused(false)
	}

	return (
		<div className='flex justify-center mt-4'>
			<div className='relative w-96 px-4'>
				<motion.input
					type='text'
					className='border border-indigo-200 rounded-full py-2 px-4 pl-12 outline-none w-full'
					placeholder='Search'
					onFocus={handleFocus}
					onBlur={handleBlur}
					initial={{ scale: 0.8 }}
					animate={{ scale: isFocused ? 1.1 : 1 }}
					transition={{ duration: 0.2 }}
				/>
				<motion.div
					className='absolute inset-y-0 left-0 flex items-center pl-4'
					initial={{ left: '0.75rem' }}
					animate={{ left: isFocused ? '0.25rem' : '0.75rem' }}
					transition={{ duration: 0.2 }}
				></motion.div>
			</div>
		</div>
	)
}

export default SearchBar
