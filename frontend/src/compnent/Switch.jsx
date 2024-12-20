function Switch({ text, buttonText }) {
    return <div className="flex  justify-center items-center ">
        <span className="text-gray-700 mr-2">
            {text}
        </span>
        <span className='text-blue-700 '>
            {buttonText}
        </span>
    </div>
}
export default Switch;