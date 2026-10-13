import { useState } from "react";
import Input from "../components/Input";
import FileInput from "../components/FileInput";
import { registerUser } from "../api/auth";

//register user function 
function RegisterPage() {

    //get the user form data 
    const [form, setForm] = useState({
        username: '',
        email: '',
        password: '',
        phone: '',
        address: '',
        city:'',
        state:'',
    })

    //user profile pic file saver
    const [profilePic, setProfilePic] = useState(null)

    const [loading,setLoading] = useState(false)
    const [error,setError] = useState('')
    const [success,setSuccess] = useState('')

    //handle form change 
    const handleChange = (e) => {
        const { name, value } = e.target
        setForm((prev) => ({ ...prev, [name]: value }))
    }

    //handle user profile pic file 
    const handleFileChange = (e) => {
        setProfilePic(e.target.files[0] || null)
    }

    //handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault()
        setError('')
        setSuccess('')
        setLoading(true)

        // sending user info to the registration api 
        try {
            const data = new FormData()

            Object.entries(form).forEach(([key, value])=> data.append(key,value))
            if (profilePic) data.append('profile_pic',profilePic)

            //get response 
            const result = await registerUser(data)
            console.log(result)
            setSuccess("registration succcessfull")
        } catch (error) {
            console.log(error.message)
            setError(error.message)
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="flex w-full items-center justify-center mt-5">
        
            <form
                onSubmit={handleSubmit}
                className="w-full lg:w-2/4 p-10 rounded-2xl  shadow-2xl   backdrop-blur-lg"
            >
                <h1 className="text-2xl font-semibold text-gray-800">Create account</h1>
                <p className="mt-1 text-sm text-gray-500">Fill in your details to get started.</p>

                <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
                    <Input
                        label="Username"
                        name="username"
                        placeholder="Your name"
                        value={form.username}
                        onChange={handleChange}
                    />
                    <Input
                        label="Email"
                        name="email"
                        type="email"
                        placeholder="you@example.com"
                        value={form.email}
                        onChange={handleChange}
                    />
                    <Input
                        label="Password"
                        name="password"
                        type="password"
                        placeholder="••••••••"
                        value={form.password}
                        onChange={handleChange}
                    />
                    <Input
                        label="Phone"
                        name="phone"
                        type="tel"
                        placeholder="01XXXXXXXXX"
                        value={form.phone}
                        onChange={handleChange}
                    />

                    <div className="md:col-span-2">
                        <Input
                            label="Address"
                            name="address"
                            placeholder="Your address"
                            value={form.address}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="md:col-span-2">
                        <Input
                            label="City"
                            name="city"
                            placeholder="City"
                            value={form.city}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="md:col-span-2">
                        <Input
                            label="State"
                            name="state"
                            placeholder="State"
                            value={form.state}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="md:col-span-2">
                        <FileInput
                            label="Profile picture"
                            name="profile_pic"
                            onChange={handleFileChange}
                            fileName={profilePic?.name}
                        />
                    </div>
                </div>

                {error && (
                    <p className="mt-4 rounded-xl text-sm text-red-600">
                        {error}
                    </p>
                )}
                {success && (
                    <p className="mt-4 rounded-xl text-sm text-green-600">
                        {success}
                    </p>
                )}

                <button
                    type="submit"
                    disabled={loading}
                    className="mt-6 w-full rounded-xl bg-sky-500 py-2.5 font-medium text-white transition hover:bg-sky-600"
                >
                    {loading ? 'Creating account...':'Register'}
                </button>
            </form>
        </div>
    )
}


export default RegisterPage