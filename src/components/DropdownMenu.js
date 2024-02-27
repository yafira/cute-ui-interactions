import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const DropdownMenu = () => {
	const [isOpen1, setIsOpen1] = useState(false)
	const [isOpen2, setIsOpen2] = useState(false)
	const [isOpen3, setIsOpen3] = useState(false)

	const toggleMenu1 = () => {
		setIsOpen1(!isOpen1)
	}

	const toggleMenu2 = () => {
		setIsOpen2(!isOpen2)
	}

	const toggleMenu3 = () => {
		setIsOpen3(!isOpen3)
	}

	return (
		<div className='flex justify-center mb-4'>
			<div className='relative inline-block text-left'>
				<div>
					<button
						onClick={toggleMenu1}
						type='button'
						className='inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500'
					>
						Options 1
						<svg
							className='-mr-1 ml-2 h-5 w-5'
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 20 20'
							fill='currentColor'
							aria-hidden='true'
						>
							<path
								fillRule='evenodd'
								d='M10 12a1 1 0 01-.707-.293l-4-4a1 1 0 011.414-1.414L10 9.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-.707.293z'
								clipRule='evenodd'
							/>
						</svg>
					</button>
				</div>
				<AnimatePresence>
					{isOpen1 && (
						<motion.div
							initial={{ opacity: 0, y: -10 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: -10 }}
							transition={{ duration: 0.2 }}
							className='origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none'
						>
							<div
								className='py-1'
								role='menu'
								aria-orientation='vertical'
								aria-labelledby='options-menu'
							>
								<a
									href='option 1.1'
									className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900'
									role='menuitem'
								>
									Option 1.1
								</a>
								<a
									href='option 1.2'
									className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900'
									role='menuitem'
								>
									Option 1.2
								</a>
							</div>
						</motion.div>
					)}
				</AnimatePresence>
			</div>
			<div className='relative inline-block text-left'>
				<div>
					<button
						onClick={toggleMenu2}
						type='button'
						className='inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500'
					>
						Options 2
						<svg
							className='-mr-1 ml-2 h-5 w-5'
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 20 20'
							fill='currentColor'
							aria-hidden='true'
						>
							<path
								fillRule='evenodd'
								d='M10 12a1 1 0 01-.707-.293l-4-4a1 1 0 011.414-1.414L10 9.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-.707.293z'
								clipRule='evenodd'
							/>
						</svg>
					</button>
				</div>
				<AnimatePresence>
					{isOpen2 && (
						<motion.div
							initial={{ opacity: 0, x: -10 }}
							animate={{ opacity: 1, x: 0 }}
							exit={{ opacity: 0, x: -10 }}
							transition={{ duration: 0.3 }}
							className='origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none'
						>
							<div
								className='py-1'
								role='menu'
								aria-orientation='vertical'
								aria-labelledby='options-menu'
							>
								<a
									href='option 2.1'
									className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900'
									role='menuitem'
								>
									Option 2.1
								</a>
								<a
									href='option 2.2'
									className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900'
									role='menuitem'
								>
									Option 2.2
								</a>
							</div>
						</motion.div>
					)}
				</AnimatePresence>
			</div>
			<div className='relative inline-block text-left'>
				<div>
					<button
						onClick={toggleMenu3}
						type='button'
						className='inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500'
					>
						Options 3
						<svg
							className='-mr-1 ml-2 h-5 w-5'
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 20 20'
							fill='currentColor'
							aria-hidden='true'
						>
							<path
								fillRule='evenodd'
								d='M10 12a1 1 0 01-.707-.293l-4-4a1 1 0 011.414-1.414L10 9.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-.707.293z'
								clipRule='evenodd'
							/>
						</svg>
					</button>
				</div>
				<AnimatePresence>
					{isOpen3 && (
						<motion.div
							initial={{ opacity: 0, scale: 0 }}
							animate={{ opacity: 1, scale: 1 }}
							exit={{ opacity: 0, scale: 0 }}
							transition={{ duration: 0.4 }}
							className='origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none'
						>
							<div
								className='py-1'
								role='menu'
								aria-orientation='vertical'
								aria-labelledby='options-menu'
							>
								<a
									href='option 3.1'
									className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900'
									role='menuitem'
								>
									Option 3.1
								</a>
								<a
									href='options 3.2'
									className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900'
									role='menuitem'
								>
									Option 3.2
								</a>
							</div>
						</motion.div>
					)}
				</AnimatePresence>
			</div>
		</div>
	)
}

export default DropdownMenu
