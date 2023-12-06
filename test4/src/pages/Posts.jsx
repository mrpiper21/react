import { useEffect, useState } from 'react';

const Posts = () => {
  const [backendData, setBackendData] = useState('')

  useEffect(() => {
    fetch('http://localhost:5000/api/posts/').then(
      response => response.json()
    ).then(
      data => {
        setBackendData(data)
      }
    )
  }, [])

  return (
    <div>
      {Array.isArray(backendData) && backendData.map(post => (
        <h1 key={post._id} className='bs'>{post.text}</h1>
      ))}
    </div>
  )
}

export default Posts