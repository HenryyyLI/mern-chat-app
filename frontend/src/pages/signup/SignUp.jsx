import GenderCheckBox from './GenderCheckBox'
import { Link } from 'react-router-dom'
import React, { useState } from 'react'
import useSignUp from '../../hooks/useSignUp'

const SignUp = () => {
    const [inputs, setInputs] = useState({
        fullName: '',
        username: '',
        password: '',
        confirmPassword: '',
        gender: '',
    });

    const { loading, signup } = useSignUp();

    const handleCheckBoxChange = (gender) => {
        setInputs({...inputs, gender: gender})
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        // console.log(inputs);
        await signup(inputs);
    }

    return (
        <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
            <div className='w-full p-6 rounded-lg shadow-md bg-white-400/30 bg-clip-padding bg-clip-padding backdrop-filter backdrop-blur-lg'>
                <h1 className='text-3xl font-semibold text-center text-gray-300'>
                    Sign Up<span className='text-blue-500'> ChatApp</span>
                </h1>

                <form onSubmit={handleSubmit}>
                    <div>
                        <label className='label py-2'>
                            <span className='text-base label-text text-gray-300'>Full Name</span>
                        </label>
                        <input type='text' placeholder='Enter full name' className='w-full input input-bordered h-10' 
                            value={inputs.fullName}
                            onChange={(e) => setInputs({...inputs, fullName: e.target.value})}
                        />
                    </div>
                    
                    <div>
                        <label className='label py-2'>
                            <span className='text-base label-text text-gray-300'>Username</span>
                        </label>
                        <input type='text' placeholder='Enter username' className='w-full input input-bordered h-10'
                            value={inputs.username}
                            onChange={(e) => setInputs({...inputs, username: e.target.value})}
                        />
                    </div>

                    <div>
                        <label className='label py-2'>
                            <span className='text-base label-text text-gray-300'>Password</span>
                        </label>
                        <input type='password' placeholder='Enter password' className='w-full input input-bordered h-10'
                            value={inputs.password}
                            onChange={(e) => setInputs({...inputs, password: e.target.value})}
                        />
                    </div>

                    <div>
                        <label className='label py-2'>
                            <span className='text-base label-text text-gray-300'>Confirm Password</span>
                        </label>
                        <input type='password' placeholder='Confirm password' className='w-full input input-bordered h-10'
                            value={inputs.confirmPassword}
                            onChange={(e) => setInputs({...inputs, confirmPassword: e.target.value})}
                        />
                    </div>

                    <GenderCheckBox onCheckBoxChange={handleCheckBoxChange} selectedGender={inputs.gender} />

                    <Link to='/login' className='text-sm hover:underline hover:text-blue-600 mt-4 inline-block text-gray-300'>
                        Already have an account?
                    </Link>

                    <div>
                        <button className="btn btn-block bg-[#1A77F2] text-white border-[#005fd8] shadow-none mt-4"
                            disabled={loading}
                        >
                            {loading ? <span className="loading loading-spinner loading-lg"></span> : "Sign Up"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignUp
