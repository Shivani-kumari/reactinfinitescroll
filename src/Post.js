import React from 'react'

export default function Post({post}) {
  return (
    <div>
        <h2>
            {post.title}
            <p>{post.body}</p>
            <p>Post ID:{post.id}</p>
        </h2>
    </div>
  )
}
