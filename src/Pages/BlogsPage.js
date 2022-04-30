import React from 'react'
import Blogs from '../Components/Blogs'
import Sidebar from '../Components/Sidebar'

function BlogsPage({ data }) {
    return (
        <>
            <Sidebar>
                <Blogs data={data} />
            </Sidebar>
        </>
    )
}

export default BlogsPage