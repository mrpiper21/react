import ItemaList from './ItemaList';

const Content = ({ items, handleCheck, handleDelete }) => {
  return (
    <main>
      {items.length ? (
        <ItemaList 
          items={items}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />
        ) : (
          <p style={{ marginTop: '2rem '}}> Your list is empty.</p>
        )}
    </main>
  );
};

export default Content;