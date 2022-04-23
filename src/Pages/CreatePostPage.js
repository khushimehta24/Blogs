import React from 'react'
import CreatePost from '../Components/CreatePost'
import Sidebar from '../Components/Sidebar'

function CreatePostPage() {
    return (
        <>
            <Sidebar>
                <CreatePost />
            </Sidebar>
        </>
    )
}

export default CreatePostPage