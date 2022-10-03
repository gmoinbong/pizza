import React from 'react';

function Categories() {
  const categories = ['Усі', `М'ясні`, 'Вегетарiанскі', 'Гриль', 'Гострі', 'Закриті'];
  const [activeIndex, setActiveIndex] = React.useState(0);

  return (
    <div className="categories">
      <ul>
        {categories.map((value, index) => (
          <li
            key={index}
            onClick={() => setActiveIndex(index)}
            className={activeIndex === index ? 'active' : ''}>
            {value}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
