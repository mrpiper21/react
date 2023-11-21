import './App.css'
import Header from './component/Header'
import AddItem from './component/AddItem'
import Content from './component/Content'
import Footer from './component/Footer'
import SearchItem from './SearchItem'
import { useState } from 'react'

const App = () => {
  const [items, setItems] = useState(JSON.parse(localStorage.getItem
    ('shoppinglist')));

  const [newItem, setNewItem] = useState('')
  const [search, setSearch] = useState('')

  const setAndSaveItems = (newItems) => {
    setItems(newItems)
    localStorage.setItem('shoppinglist', JSON.stringify(newItems))
  }

  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = { id, checked: false, item }
    const listItems = [...items, myNewItem]
    setAndSaveItems(listItems)
  }
  
  const handleCheck = (id) => {
    const listItems = items.map((item) => item.id === id ? { ...item,
    checked: !item.checked } : item)
    setAndSaveItems(listItems)
  }
  
  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id)
    setAndSaveItems(listItems)
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
      <Content 
        items={items.filter(item => ((item.item).toLowerCase()).includes
          (search.toLocaleLowerCase()))}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <Footer length={items.length}/>
    </div>
  );
}

export default App
