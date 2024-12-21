function Button({ text, onClick }) {
    return <button type="button" className="flex justify-center items-center border-2 rounded bg-grey-800 text-lg w-full p-3 mb-4" onClick={onClick}>
        {text}
    </button>
}

export default Button;