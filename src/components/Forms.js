import React, { useState } from 'react'
import { motion } from 'framer-motion'

const Form1 = () => {
	const [name, setName] = useState('')
	const [submitted, setSubmitted] = useState(false)

	const handleChange = (e) => {
		setName(e.target.value)
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		setSubmitted(true)
	}

	return (
		<motion.form
			initial={{ opacity: 0 }}
			animate={{ opacity: submitted ? 1 : 0.5, scale: submitted ? 1 : 0.9 }}
			transition={{ duration: 0.5 }}
			onSubmit={handleSubmit}
			className='bg-white shadow-md rounded p-4 mb-4 w-full max-w-md'
		>
			<input
				type='text'
				placeholder='Enter your message'
				value={name}
				onChange={handleChange}
				className='border border-indigo-200 rounded p-2 w-full'
			/>
			<button
				type='submit'
				className='bg-indigo-100 hover:bg-indigo-300 text-black font-bold py-1 px-2 rounded mt-2 block mx-auto'
				style={{ width: 'fit-content' }}
			>
				Submit
			</button>
		</motion.form>
	)
}

const Form2 = () => {
	const [message, setMessage] = useState('')
	const [submitted, setSubmitted] = useState(false)

	const handleChange = (e) => {
		setMessage(e.target.value)
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		setSubmitted(true)
	}

	return (
		<motion.form
			initial={{ opacity: 1 }}
			animate={{ opacity: submitted ? 0 : 1, scale: submitted ? 0 : 1 }}
			transition={{ duration: 0.5 }}
			onSubmit={handleSubmit}
			className='bg-white shadow-md rounded p-8 mb-8 w-full max-w-md'
		>
			<input
				placeholder='Enter your name'
				value={message}
				onChange={handleChange}
				className='border border-indigo-200 rounded p-2 w-full'
			/>
			<button
				type='submit'
				className='bg-green-100 hover:bg-green-300 text-black font-bold py-1 px-2 rounded mt-2 block mx-auto'
				style={{ width: 'fit-content' }}
			>
				Submit
			</button>
		</motion.form>
	)
}

const Forms = () => {
	return (
		<div className='flex flex-col md:flex-row justify-center space-x-4'>
			<Form1 />
			<Form2 />
		</div>
	)
}

export default Forms
