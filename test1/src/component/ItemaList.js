// import { FaTrashAlt } from 'react-icons/fa'
import LineItem from './LineItem'

const ItemaList = ({ items, handleCheck, handleDelete }) => {
  return (
    <ul>
      {items.map((item) => (
        <LineItem 
          key={item.id}
          item={item}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />
      ))}
    </ul>
  )
}

export default ItemaList