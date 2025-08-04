import { useState } from 'react';
function Form({ handleAddItem }) {
  const [description, setDescription] = useState('');
  const [quantity, setQuantity] = useState(1);
  function handeleSubmit(event) {
    event.preventDefault();
    if (!description) return;
    const newItem = { description, quantity, packed: false, id: Date.now() };

    handleAddItem(newItem);
    setDescription('');
    setQuantity(1);
  }
  return (
    <form className="add-form" onSubmit={handeleSubmit}>
      <h3>What do you need for your 😍 trip?</h3>
      <select
        value={quantity}
        onChange={(event) => setQuantity(Number(event.target.value))}
      >
        {Array.from({ length: 10 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="item..."
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      ></input>
      <button>Add</button>
    </form>
  );
}

export default Form;
