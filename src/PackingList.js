import { useState } from 'react';
// import Item from './Item';
import Item from './Item';
function PackingList({
  items,
  handleDeleteItem,
  handleToggleItem,
  onClearList,
}) {
  const [sortBy, setSortBy] = useState('input');
  let sortedItem;
  if (sortBy === 'input') sortedItem = items;
  if (sortBy === 'description')
    sortedItem = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  if (sortBy === 'packed')
    sortedItem = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <div className="list">
      <ul>
        {sortedItem.map((item) => (
          <Item
            item={item}
            handleDeleteItem={handleDeleteItem}
            handleToggleItem={handleToggleItem}
            key={item.id}
          ></Item>
        ))}
      </ul>
      <div className="actions">
        <select
          value={sortBy}
          onChange={(event) => setSortBy(event.target.value)}
        >
          <option value="input">Sort by input order</option>
          <option value="description"> Sort by description</option>
          <option value="packed"> Sort by packed status</option>
        </select>
        <button onClick={onClearList}>Clear List</button>
      </div>
    </div>
  );
}
export default PackingList;
