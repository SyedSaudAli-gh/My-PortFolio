import React from 'react'
import ProjectsGrid from './ProjectsGrid'

function Page() {
  return (
    <div className='my-10'>
       <ProjectsGrid showAllByDefault={true} />
    </div>
  )
}

export default Page