import React from 'react'
import PostItem from './PostItem'

const PostList = (props) => {
    return (
        <div style={{
            borderColor: "black", borderStyle: "solid"
        }}>
            {props.userPosts.map(item => <PostItem key={item.id} id={item.id} title={item.title} body={item.body} />)}
        </div>
    )
}

export default PostList