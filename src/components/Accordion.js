import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Accordion = () => {
	const [selected, setSelected] = useState(null)

	const toggleSection = (index) => {
		setSelected(selected === index ? null : index)
	}

	const sections = [{ title: 'Accordion', content: 'Acccordion 1.1' }]

	const animations = [{ rotate: [0, 90] }, { scale: [0, 1] }, { x: [-50, 0] }]

	return (
		<div className='w-full max-w-lg mx-auto'>
			{sections.map((section, index) => (
				<div key={index} className='border border-violet-200 rounded mb-2'>
					<motion.button
						className='w-full p-4 text-left focus:outline-none'
						onClick={() => toggleSection(index)}
						whileHover={{ scale: 1.0 }}
						whileTap={{ scale: 0.9 }}
					>
						<div className='flex justify-between items-center'>
							<span>{section.title}</span>
							<svg
								className='h-6 w-6 transition-transform transform'
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 20 20'
								fill='currentColor'
								style={{
									transform:
										selected === index ? 'rotate(180deg)' : 'rotate(0deg)',
								}}
							>
								<path
									fillRule='evenodd'
									d='M10 12a1 1 0 01-.707-.293l-4-4a1 1 0 111.414-1.414L10 9.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-.707.293z'
									clipRule='evenodd'
								/>
							</svg>
						</div>
					</motion.button>
					<AnimatePresence>
						{selected === index && (
							<motion.div
								initial={{ height: 0, opacity: 0 }}
								animate={{ height: 'auto', opacity: 1 }}
								exit={{ height: 0, opacity: 0 }}
								transition={{ duration: 0.3 }}
								variants={animations[index]}
								className='overflow-hidden'
							>
								<div className='p-4'>{section.content}</div>
							</motion.div>
						)}
					</AnimatePresence>
				</div>
			))}
		</div>
	)
}

export default Accordion
