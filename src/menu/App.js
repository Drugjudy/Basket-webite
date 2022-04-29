import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';



const allCategories = ['all', ...new Set(items.map((item) => item.category))];


function App01() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === 'all') {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <main >
      <div className='yes-work'>
      <section className="menu section">
        <div className="title">
          <h2>our items</h2>
          <div className="underline"></div>
        </div> 
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={menuItems} />
      
      </section>
      </div>
    </main>
  );
}

export default App01;