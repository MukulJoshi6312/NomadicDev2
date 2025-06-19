import React from 'react'

const Loader = () => {
  return (
    <div className='flex justify-center items-center h-screen'>
        <div className='animate-spin rounded-full h-16 w-16 border-4 border-t-white border-primary relative'>
        {/* <div className='animate-spin  rounded-full h-10 w-10 border-4 border-b-white border-gray-600 absolute top-1/2 left-1/2  -translate-y-1/2 -translate-x-1/2'/> */}
        </div>

    </div>
  )
}

export default Loader
