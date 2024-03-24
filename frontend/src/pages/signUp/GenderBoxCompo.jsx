import React from 'react'

const GenderBoxCompo = ({onCheckBoxChange, selectGender}) => {
  return (
    <div className='flex mt-1' >
        <div className='form-control'>
            <label className={`label gap-2 cursor-pointer ${selectGender === 'male' ? "selected" : ""}`}>
                <span className='label-text  text-gray-600 font-semibold '>Male</span>
                <input type="checkbox" className='checkbox border-slate-900 ' 
                checked={selectGender === "male"}
                onChange={() => onCheckBoxChange("male")}
                />
            </label>
        </div>
        <div className='flex'>
        <div className='form-control'>
            <label className={`label gap-2 cursor-pointer ${selectGender === 'female' ? "selected" : ""}`}>
                <span className='label-text text-gray-600 font-semibold  '>Female</span>
                <input type="checkbox" className='checkbox border-slate-900 '
                   checked={selectGender === "female"}
                   onChange={() => onCheckBoxChange("female")}
                />
            </label>
        </div>
    </div>
    </div>
  )
}

export default GenderBoxCompo