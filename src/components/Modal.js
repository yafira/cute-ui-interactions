import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { loremIpsum } from 'lorem-ipsum'

const Modal = ({ isOpen, onClose, animation, children }) => {
	return (
		<AnimatePresence>
			{isOpen && (
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 0.3 }}
					className='fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50'
					onClick={onClose}
				>
					<motion.div
						initial={animation.initial}
						animate={animation.animate}
						exit={animation.exit}
						transition={animation.transition}
						className='bg-white rounded-lg shadow-lg p-6 max-w-md w-full'
						onClick={(e) => e.stopPropagation()}
					>
						{children}
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>
	)
}

const texts = [
	loremIpsum({ count: 1, units: 'sentences' }),
	loremIpsum({ count: 1, units: 'sentences' }),
	loremIpsum({ count: 1, units: 'sentences' }),
	loremIpsum({ count: 1, units: 'sentences' }),
	loremIpsum({ count: 1, units: 'sentences' }),
	loremIpsum({ count: 1, units: 'sentences' }),
]

const InteractiveModals = () => {
	const [isOpen, setIsOpen] = React.useState([false, false, false, false])

	const animations = [
		{
			initial: { scale: 0 },
			animate: { scale: 1 },
			exit: { scale: 0 },
			transition: { duration: 0.3 },
		},
		{
			initial: { opacity: 0 },
			animate: { opacity: 1 },
			exit: { opacity: 0 },
			transition: { duration: 0.3 },
		},
		{
			initial: { y: -100 },
			animate: { y: 0 },
			exit: { y: -100 },
			transition: { duration: 0.3 },
		},
		{
			initial: { rotate: -180 },
			animate: { rotate: 0 },
			exit: { rotate: -180 },
			transition: { duration: 0.3 },
		},
	]

	const openModal = (index) => {
		setIsOpen((prev) => {
			const newState = [...prev]
			newState[index] = true
			return newState
		})
	}

	const closeModal = (index) => {
		setIsOpen((prev) => {
			const newState = [...prev]
			newState[index] = false
			return newState
		})
	}

	return (
		<div className='flex justify-center flex-wrap'>
			{animations.map((animation, index) => (
				<div key={index} className='mx-9'>
					<button
						className={`btn mx-2 my-4 p-2 border ${
							[
								'border-indigo-200',
								'border-fuchsia-200',
								'border-lime-200',
								'border-violet-200',
							][index]
						}`}
						onClick={() => openModal(index)}
					>
						Modal {index + 1}
					</button>
					<Modal
						isOpen={isOpen[index]}
						onClose={() => closeModal(index)}
						animation={animation}
					>
						<h2 className='text-lg font-semibold mb-2 text-center'>
							Modal {index + 1}
						</h2>
						<p className='text-sm text-gray-600 mb-4'>{texts[index]}</p>
						<button className='btn' onClick={() => closeModal(index)}>
							Close
						</button>
					</Modal>
				</div>
			))}
		</div>
	)
}

export default InteractiveModals
