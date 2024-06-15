import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <div className='p-3 max-w-2xl mx-auto'>
            <h1 className='text-3xl text-center font-semibold my-7'>Sign Up</h1>
            <form className='flex flex-col gap-4'>
                <input type="text" placeholder='username' className='border rounded-lg p-3' id='username'/>
                <input type="email" placeholder='email' className='border rounded-lg p-3' id='email'/>
                <input type="password" placeholder='password' className='border rounded-lg p-3' id='password'/>
                <button className='bg-slate-700 rounded-lg text-white p-3 uppercase hover:opacity-95 disabled:opacity-80'>Sign Up</button>
            </form>
            <div className='flex gap-2 mt-5'>
                <p>Have an account? </p>
                <Link to='/sign-in' className='text-blue-700'>Sign In</Link>
            </div>
        </div>
    )
}

export default SignUp
