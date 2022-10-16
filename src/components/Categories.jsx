import React from 'react';

function Categories({ value, onClickCategory }) {
  const categories = ['Усі', `М'ясні`, 'Вегетаріанскі', 'Гриль', 'Гострі', 'Закриті'];

  return (
    <div className="categories">
      <ul>
        {categories.map((name, index) => (
          <li
            key={index}
            onClick={() => onClickCategory(index)}
            className={value === index ? 'active' : ''}>
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
