import Row from "./Row"
const Table = ({ items }) => {
  return (
    <div>
        <table>
            <table>
                {items.map(item => {
                    <Row key={item.id} item={item} />
                })}
            </table>
        </table>
    </div>
  )
}

export default Table