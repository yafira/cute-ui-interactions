import React from 'react'
import { motion } from 'framer-motion'
import Logo from '../assets/logo.png'

const NavigationBar = () => {
	return (
		<div className='bg-white text-black py-4'>
			<div className='container mx-auto flex justify-between items-center'>
				<img src={Logo} alt='Logo' className='h-10' />{' '}
				<div className='flex space-x-4'>
					<motion.a
						href='#'
						className='hover:underline'
						whileHover={{ scale: 1.1 }}
						whileTap={{ scale: 0.9 }}
					>
						Home
					</motion.a>
					<motion.a
						href='#'
						className='hover:underline'
						whileHover={{ scale: 1.1 }}
						whileTap={{ scale: 0.9 }}
					>
						About
					</motion.a>
					<motion.a
						href='#'
						className='hover:underline'
						whileHover={{ scale: 1.1 }}
						whileTap={{ scale: 0.9 }}
					>
						Services
					</motion.a>
					<motion.a
						href='#'
						className='hover:underline'
						whileHover={{ scale: 1.1 }}
						whileTap={{ scale: 0.9 }}
					>
						Contact
					</motion.a>
				</div>
			</div>
		</div>
	)
}

export default NavigationBar
