import { useState, useEffect } from "react"
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import * as React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';


const AdminPanel = () => {
    const [title, setTitle] = useState('')
    const [text, setText] = useState('')
    const [image, setImage] = useState(null)
    const [date, setDate] = useState('')
    const [loading, setLoading] = useState(false)
    const [success, setsuccess] = useState(false)
    const [error, setError] = useState(null)

    const navigate = useNavigate()

    const handleTitleChange = (e) => {
        setTitle(e.target.value)
    }

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if(file && file.type.startsWith('image/')) {
            setImage(file);
        } else {
            setImage(null);
            setError('Please select an image file');
        }
    }

    const handleTextChange = (e) => {
        setText(e.target.value);
    };

    const handleDateChange = (e) => {
        setDate(e.target.value)
    }

    const handleUpload = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        const formData = new FormData()
        formData.append('title', title)
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
            console.log('Upload successful')
            setText('');
            setImage(null);
            setDate('');
            setsuccess(true)
            // setTimeout(() => {
            //     navigate('/events')
            // },1000)
        } catch (error) {
            console.error('Upload failed', error)
            setError('Upload failed');
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        axios.get('http://localhost:5000/api/events')
          .then(res => console.log(res))
          .catch(err => console.log(err))
    }, [])

    return (
        <form onSubmit={handleUpload} className="event-uplod-form">
            {loading && <p>Uploading...</p>}
            {success && <Stack sx={{ width: '100%' }} spacing={2}>
                <Alert variant="filled" severity="success">
                    Upload Successful
                </Alert>
             </Stack>}
            {error && <Stack sx={{ width: '100%' }} spacing={2}>
                <Alert variant="filled" severity="error">
                    An error occured
                </Alert>
            </Stack>}
            <div>
                <label htmlFor="imageUpload">Choose an image</label>
                <input type="date" value={date} onChange={handleDateChange}/>
                <input type="text" value={title} onChange={handleTitleChange} placeholder="Event title" />
                <input type="text" value={text} onChange={handleTextChange} placeholder="Event Description" className="event-inpt"/>
                <input type="file" onChange={handleImageChange} placeholder="Add image"/>
            </div>
            <button type="submit">Upload</button>
            <br />
            {image && <img src={image} alt="" className="img-prvw"/>}
        </form>
    )
}

export default AdminPanel