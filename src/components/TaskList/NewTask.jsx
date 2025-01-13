import React from 'react'

const NewTask = ({data}) => {
  return (
    <div className="h-full flex-shrink-0 w-[400px] p-5 bg-emerald-400 rounded-xl">
        <div className="flex justify-between items-center">
          <h3 className="bg-red-600 text-sm px-3 py-1 rounded">{data.category}</h3>
          <h4 className="text-sm">{data.taskDate}</h4>
        </div>
        <h2 className="mt-5 text-2xl font-semibold">{data.taskTitle}</h2>
        <p className="text-sm mt-2">
          {data.taskDescription}
        </p>
        <div className='mt-16'>
            <button className=' bg-blue-800 rounded-sm text-[18px] text-white py-2 px-3'>Accept Task</button>
        </div>
      </div>
  )
}

export default NewTask