function Input({ label, name, type = 'text', value, onChange, placeholder, error }) {
    return (
        <div className="flex flex-col gap-1.5">
            <label htmlFor={name} className="text-sm font-medium text-gray-600">
                {label}
            </label>
            <input
                id={name}
                name={name}
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className="w-full rounded-xl border border-white/70 bg-white/50 px-4 py-2.5 text-gray-800 placeholder-gray-400 outline-none backdrop-blur-md transition focus:border-sky-400 focus:ring-2 focus:ring-sky-200" />

                {error && <p className="text-sm text-red-500">{error}</p>}
        </div>
    )
}


export default Input