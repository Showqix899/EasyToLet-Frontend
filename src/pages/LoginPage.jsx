import { useState } from 'react'
import Input from '../components/Input'
import { loginUser } from '../api/auth'
import { validateLogin } from '../utils/validators'
import { saveAuth } from '../utils/storage'


function LoginPage() {
    const [form, setForm] = useState({ email: '', password: '' })
    const [errors, setErrors] = useState({})
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')


    //set user credentials to form from input
    const handlChange = (e) => {

        const { name, value } = e.target
        setForm((prev) => ({ ...prev, [name]: value }))
        setErrors((prev) => ({ ...prev, [name]: '' }))
    }

    //send user credentials to login api 
    const handleSubmit = async (e) => {
        e.preventDefault()

        const validationErrors = validateLogin(form)
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors)
            return
        }

        setErrors({})
        setError('')
        setSuccess('')
        setLoading(true)

        try {
            const data = await loginUser(form)
            saveAuth(data)
            setSuccess('Login Successful')
        } catch (error) {
            setError(error.response?.data?.message || error.message || 'something went wrong')
        } finally {
            setLoading(false)
        }


    }

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 h-screen">
            <div className='w-full flex items-center'>
                <form onSubmit={handleSubmit}
                    className='flex flex-col gap-3 w-full m-10 p-10 rounded-2xl shadow-2xl backdrop-blur-lg'
                >
                    <h1 className="text-2xl font-semibold text-gray-800">Login</h1>
                    <p className="mt-1 text-sm text-gray-500 mb-3">Fill in your credentials</p>

                    <Input
                        label="Email"
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handlChange}
                        placeholder='Enter Your Email'
                    />
                    <Input
                        label="Password"
                        name="password"
                        type="password"
                        value={form.password}
                        onChange={handlChange}
                        placeholder='Enter Your Password *****'
                    />

                    {error && (
                        <p className='p-2 mt-2 text-sm text-red-400'>{error}</p>
                    )}
                    {success && (
                        <p className='p-2 mt-2 text-sm text-green-400'>{success}</p>
                    )}
                    <button
                        type="submit"
                        disabled={loading}
                        className="mt-6 w-full rounded-xl bg-sky-500 py-2.5 font-medium text-white transition hover:bg-sky-600"
                    >
                        {loading ? 'Logging account...' : 'Login'}
                    </button>
                </form>
            </div>
            <div className='w-full flex flex-col items-center justify-center gap-3'>

                <div className='w-full flex justify-center'>
                    <p className="font-bold text-3xl text-gray-600">Fnd Your <b>Best</b> stay</p>
                </div>
                <div className='w-full flex justify-center '>
                    <p className='font-bold text-2xl text-gray-400'>With Minimum Effort, <span className='text-green-400'>With Us</span></p>
                </div>
                <div className='w-full flex justify-center '>
                    <p className='font-bold text-2xl text-gray-400'><span className='text-purple-400'>EasyToLet</span>, Thank You For Trusting Us</p>
                </div>

            </div>
        </div>
    )


}

export default LoginPage