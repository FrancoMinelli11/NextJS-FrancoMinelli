'use client'
import { AuthContext } from "@/context/AuthContext"
import { Button } from "../button/Button"
import { useContext, useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Swal from "sweetalert2"

export const LoginForm = () => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const {logged,handleLogin} = useContext(AuthContext)
	const router = useRouter()

	useEffect(() => {
		if (logged) {
			router.push('/')
		}
	}, [logged])

	const handleSubmit = (e) => {
		e.preventDefault()
		handleLogin(email,password)
	}
	const handleChange = (e) => {
		const value = e.target.value
		const name = e.target.name
		if (name === 'email') {
			setEmail(value)
		}
		if (name === 'password') {
			setPassword(value)
		}
	}
  return (
<div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 dark:bg-secondary dark:text-gray-800">
	<div className="mb-8 text-center">
		<h1 className="my-3 text-4xl font-bold text-white">Sign in</h1>
		<p className="text-sm text-white">Sign in to access your account</p>
	</div>
	<form noValidate="" action="" className="space-y-12" onSubmit={handleSubmit}>
		<div className="space-y-4">
			<div>
				<label htmlFor="email" className="block mb-2 text-sm text-white">Email address</label>
				<input type="email" name="email" id="email" placeholder="leroy@jenkins.com" className="w-full px-3 py-2 border rounded-md bg-tertiary placeholder:text-white focus:outline-none focus:ring focus:ring-primary focus:border-primary" onChange={handleChange}/>
			</div>
			<div>
				<div className="flex justify-between mb-2">
					<label htmlFor="password" className="text-sm text-white">Password</label>
					{/* <a rel="noopener noreferrer" href="#" className="text-xs hover:underline dark:text-gray-600">Forgot password?</a> */}
				</div>
				<input type="password" name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md bg-tertiary placeholder:text-white focus:outline-none focus:ring focus:ring-primary focus:border-primary" onChange={handleChange} />
			</div>
		</div>
		<div className="space-y-2">
			<div className="flex justify-center">
				<Button type="button" className="w-full">Sign in</Button>
			</div>
			{/* <p className="px-6 text-sm text-center dark:text-gray-600">Don't have an account yet?
				<a rel="noopener noreferrer" href="#" className="hover:underline dark:text-violet-600">Sign up</a>.
			</p> */}
		</div>
	</form>
</div>
  )
}