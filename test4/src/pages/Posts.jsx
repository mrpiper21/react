import { useEffect, useState } from 'react';

const Posts = () => {
  const [backendData, setBackendData] = useState('')

  useEffect(() => {
    fetch('http://localhost:5000/posts').then(
      response => response.text()
    ).then(
      data => {
        setBackendData(data)
      }
    )
  }, [])

  return (
    <body>
      <h1 className='bs'>{backendData}</h1>
    </body>
  )
}

export default Posts