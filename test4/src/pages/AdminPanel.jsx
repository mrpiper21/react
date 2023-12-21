import { useState } from "react"
import axios from 'axios'

const AdminPanel = () => {
    const [file, setFile] = useState()
    const [text, setText] = useState('')
    const handleUpload = (e) => {
        const formdata = new FormData()
        formdata.append('file', file)
        axios.post('http://localhost:5000/upload', formdata)
            .then(res => console.log(res))
            .catch((err) => console.log(err))
    }
    return (
        <div>
        <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Event Description" />
        <input type="file" onChange={e => setFile(e.target.files[0])}/>
        <button onClick={handleUpload}>Upload</button>
        </div>
    )
}

export default AdminPanel
