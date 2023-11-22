import './App.css'
import Header from './component/Header'
import AddItem from './component/AddItem'
import Content from './component/Content'
import Footer from './component/Footer'
import SearchItem from './SearchItem'
import { useState, useEffect } from 'react'
import apiRequest from './apiRequest'

const App = () => {
  const API_URL = "http://localhost:35000/items"

  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('')
  const [search, setSearch] = useState('')
  const [fetchError, setFetcherror] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(API_URL)
        if(!response.ok) throw Error('Did not receive expected data')
        const listItems = await response.json()
        setItems(listItems)
        setFetcherror(null)
      } catch (error) {
        setFetcherror(error.message)
      } finally {
        setIsLoading(false)
      }
    }
    setTimeout(() => {
      (async () => await fetchItems())()
    }, 2000)
    fetchItems();
  }, [])

  const addItem = async (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = { id, checked: false, item }
    const listItems = [...items, myNewItem]
    setItems(listItems)

    const postOptions = {
      method: "POST",
      headers: {
        'content-Type': 'application/json'
      },
      body: JSON.stringify(myNewItem)
    }
    const result = await apiRequest(API_URL, postOptions)
    if(result) setFetcherror(result)
  }
  
  const handleCheck = async (id) => {
    const listItems = items.map((item) => item.id === id ? { ...item,
    checked: !item.checked } : item)
    setItems(listItems)

    const myItem = listItems.filter((item) => item.id === id)
    const updateOption = {
      method: 'PATCH',
      headers: {
        'content-Type': 'application/json'
      },
      body: JSON.stringify({ checked: myItem[0].checked})
    }
    const requrl = `${API_URL}/${id}`
    const result = await apiRequest(requrl, updateOption)
    if (result) setFetcherror(result)
  }
  
  const handleDelete = async (id) => {
    const listItems = items.filter((item) => item.id !== id)
    setItems(listItems)

    const deleteOptions = { method: 'DELETE'}
    const reqUrl = `${API_URL}/${id}`
    const result = await apiRequest(reqUrl, deleteOptions)
    if (result) setFetcherror(result);
  }

  const handleSubmit = (e) => {
    // stopping page reload
    e.preventDefault()
    if(!newItem) return;
    // addItem
    addItem(newItem)
    // setting the state empty after submitting an item
    setNewItem('')
  }
  return (
    <div className='App'>
      <Header title="Groceries"/>
      <AddItem 
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <SearchItem
        search={search}
        setSearch={setSearch}
      />
      <main>
        {isLoading && <p>Loading Items...s</p>}
        {fetchError && <p style={{ color: "red" }}>{ `Error: ${fetchError}`}</p>}
        {!fetchError && !isLoading && <Content 
          items={items.filter(item => ((item.item).toLowerCase()).includes
            (search.toLocaleLowerCase()))}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />}
      </main>
      <Footer length={items.length}/>
    </div>
  );
}

export default App
