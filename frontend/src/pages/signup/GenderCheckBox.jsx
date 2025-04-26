import React from 'react'

const GenderCheckBox = () => {
    return (
        <div className='flex mt-4'>
            <div className='form-control'>
                <label className={`label gap-2 cursor-pointer`}>
                    <span className='label-text text-gray-300'>Male</span>
                    <input type='checkbox' className='checkbox checkbox-primary border-2 border-gray-300 checked:border-primary' />
                </label>
            </div>
            <div className='ml-4 form-control'>
                <label className={`label gap-2 cursor-pointer`}>
                    <span className='label-text text-gray-300'>Female</span>
                    <input type='checkbox' className='checkbox checkbox-primary border-2 border-gray-300 checked:border-primary' />
                </label>
            </div>
        </div>
    )
}

export default GenderCheckBox
