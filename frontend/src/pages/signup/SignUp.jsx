import React from 'react'
import GenderCheckBox from './GenderCheckBox'

const SignUp = () => {
    return (
        <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
            <div className='w-full p-6 rounded-lg shadow-md bg-white-400/30 bg-clip-padding bg-clip-padding backdrop-filter backdrop-blur-lg'>
                <h1 className='text-3xl font-semibold text-center text-gray-300'>
                    Sign Up<span className='text-blue-500'> ChatApp</span>
                </h1>

                <form>
                    <div>
                        <label className='label py-2'>
                            <span className='text-base label-text text-gray-300'>Full Name</span>
                        </label>
                        <input type='text' placeholder='Enter full name' className='w-full input input-bordered h-10' />
                    </div>
                    
                    <div>
                        <label className='label py-2'>
                            <span className='text-base label-text text-gray-300'>Username</span>
                        </label>
                        <input type='text' placeholder='Enter username' className='w-full input input-bordered h-10' />
                    </div>

                    <div>
                        <label className='label py-2'>
                            <span className='text-base label-text text-gray-300'>Password</span>
                        </label>
                        <input type='password' placeholder='Enter password' className='w-full input input-bordered h-10' />
                    </div>

                    <div>
                        <label className='label py-2'>
                            <span className='text-base label-text text-gray-300'>Confirm Password</span>
                        </label>
                        <input type='password' placeholder='Confirm password' className='w-full input input-bordered h-10' />
                    </div>

                    <GenderCheckBox />

                    <a href='#' className='text-sm hover:underline hover:text-blue-600 mt-4 inline-block text-gray-300'>
                        Already have an account?
                    </a>

                    <div>
                        <button className="btn btn-block bg-[#1A77F2] text-white border-[#005fd8] shadow-none mt-4">Sign Up</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignUp

// STARTER CODE FOR SIGNUP COMPONENT
// const SignUp = () => {
//     return (
//         <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
//             <div className='w-full p-6 rounded-lg shadow-md bg-white-400/30 bg-clip-padding bg-clip-padding backdrop-filter backdrop-blur-lg'>
//                 <h1 className='text-3xl font-semibold text-center text-gray-300'>
//                     Sign Up<span className='text-blue-500'> ChatApp</span>
//                 </h1>

//                 <form>
//                     <div>
//                         <label className='label py-2'>
//                             <span className='text-base label-text text-gray-300'>Full Name</span>
//                         </label>
//                         <input type='text' placeholder='Enter full name' className='w-full input input-bordered h-10' />
//                     </div>
                    
//                     <div>
//                         <label className='label py-2'>
//                             <span className='text-base label-text text-gray-300'>Username</span>
//                         </label>
//                         <input type='text' placeholder='Enter username' className='w-full input input-bordered h-10' />
//                     </div>

//                     <div>
//                         <label className='label py-2'>
//                             <span className='text-base label-text text-gray-300'>Password</span>
//                         </label>
//                         <input type='password' placeholder='Enter password' className='w-full input input-bordered h-10' />
//                     </div>

//                     <div>
//                         <label className='label py-2'>
//                             <span className='text-base label-text text-gray-300'>Confirm Password</span>
//                         </label>
//                         <input type='password' placeholder='Confirm password' className='w-full input input-bordered h-10' />
//                     </div>

//                     <GenderCheckBox />

//                     <a href='#' className='text-sm hover:underline hover:text-blue-600 mt-4 inline-block text-gray-300'>
//                         Already have an account?
//                     </a>

//                     <div>
//                         <button className="btn btn-block bg-[#1A77F2] text-white border-[#005fd8] shadow-none mt-4">Sign Up</button>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     )
// }
