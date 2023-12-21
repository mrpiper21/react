import { useState } from "react"

const AdminPanel = () => {
    const [file, setFile] = useState()
    const handleUpload = (e) => {
        console.log(file)
    }
    return (
        <div>
        <input type="file" onChange={e => setFile(e.target.files[0])}/>
        <button onClick={handleUpload}></button>
        </div>
    )
}

export default AdminPanel
