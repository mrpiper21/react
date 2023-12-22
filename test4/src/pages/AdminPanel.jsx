import { useState, useEffect } from "react"
import axios from 'axios'
import Events from "./Events"

const AdminPanel = () => {
    // const [file, setFile] = useState()
    const [text, setText] = useState('')
    const [image, setImage] = useState(null)
    const [date, setDate] = useState('')
    
    const handleImageChange = (e) => {
        setImage(URL.createObjectURL(e.target.files[0]));
    }

    const handleTextChange = (e) => {
        setText(e.target.value);
    };

    const handleDateChange = (e) => {
        setDate(e.target.value)
    }

    const handleUpload = async (e) => {
        e.preventDefault();
        const formData = new FormData()
        formData.append('date', date)
        formData.append('image', image)
        formData.append('text', text)

        // Get the token from local storage
        const token = localStorage.getItem('token')
        try {
            const base_url = 'http://localhost:5000/api/'
            const response = await axios.post(`${base_url}events/upload`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': `Bearer ${token}`
                }
            });
            console.log('Upload successful', response.data)
        } catch (error) {
            console.error('Upload failed', error)
        }
    }

    useEffect(() => {
        axios.get('http://localhost:5000/api/events')
          .then(res => console.log(res))
          .catch(err => console.log(err))
    }, [])


    return (
        <form onSubmit={handleUpload} className="event-uplod-form">
            <div>
                <label htmlFor="imageUpload">Choose an image</label>
                <input type="date" value={date} onChange={handleDateChange}/>
                <input type="text" value={text} onChange={handleTextChange} placeholder="Event Description" className="event-inpt"/>
                <input type="file" onChange={handleImageChange} placeholder="Add image"/>
            </div>
            <button type="submit">Upload</button>
            <br />
            <img src={image} alt="" className="img-prvw"/>
        </form>
    )
}

export default AdminPanel
