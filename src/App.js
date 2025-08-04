import { useState } from 'react';
import Form from './Form.js';
import Stats from './Stats';
import PackingList from './PackingList.js';
import Logo from './Logo.js';
function App() {
  const [items, setItems] = useState([]);
  function handleAddItem(item) {
    setItems((items) => [...items, item]);
  }
  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }
  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  function handleClearList() {
    const confirmed = window.confirm(
      'Are you sure you want to delete all items? '
    );
    if (confirmed) setItems([]);
  }
  return (
    <div className="App">
      <Logo />
      <Form handleAddItem={handleAddItem}></Form>
      <PackingList
        items={items}
        handleDeleteItem={handleDeleteItem}
        handleToggleItem={handleToggleItem}
        onClearList={handleClearList}
      ></PackingList>
      <Stats items={items} />
    </div>
  );
}

export default App;
