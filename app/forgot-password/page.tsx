const ForgotPasswordPage = () => {
    return (
        <>
            <div className="flex flex-col items-center justify-center min-h-screen py-2 text-white">
                <h1 className="text-3xl">Password Recovery</h1>
                <p>Enter your email address below and a password reset link will be emailed to you. </p>
                <label htmlFor="email">Email</label>
                <input
                    id="email"
                    type="email"
                />
                <button className="border-2 border-white text-white hover:border-black hover:text-black hover:bg-white rounded-lg py-1 px-2 my-2">Send password reset link</button>
            </div>
        </>
    )
}

export default ForgotPasswordPage