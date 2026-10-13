function FileInput({ label, name, onChange, fileName }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={name} className="text-sm font-medium text-gray-600">
        {label}
      </label>

      <input
        id={name}
        name={name}
        type="file"
        accept="image/*"
        onChange={onChange}
        className="w-full cursor-pointer rounded-xl border border-white/70 bg-white/50 p-2 text-sm text-gray-500 backdrop-blur-md file:mr-4 file:cursor-pointer file:rounded-lg file:border-0 file:bg-sky-100 file:px-4 file:py-2 file:text-sm file:font-medium file:text-sky-700 hover:file:bg-sky-200"
      />

      {fileName && <p className="text-sm text-gray-500">Selected: {fileName}</p>}
    </div>
  )
}

export default FileInput