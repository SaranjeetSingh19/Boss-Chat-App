import React from 'react'

const GenderBoxCompo = () => {
  return (
    <div className='flex mt-1' >
        <div className='form-control'>
            <label className={`label gap-2 cursor-pointer`}>
                <span className='label-text  text-gray-600 font-semibold '>Male</span>
                <input type="checkbox" className='checkbox border-slate-900 ' />
            </label>
        </div>
        <div className='flex'>
        <div className='form-control'>
            <label className={`label gap-2 cursor-pointer`}>
                <span className='label-text text-gray-600 font-semibold  '>Female</span>
                <input type="checkbox" className='checkbox border-slate-900 ' />
            </label>
        </div>
    </div>
    </div>
  )
}

export default GenderBoxCompo