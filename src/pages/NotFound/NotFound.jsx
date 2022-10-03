import React from 'react';

import styles from '../NotFound/NotFound.module.scss';

function NotFound() {
  return (
    <div className={styles.root}>
      <h1>
        <span>😕</span>
        <br />
        Нічого не знайдено
      </h1>
      <p className={styles.description}>
        На жаль, дана сторінка відсутня у нашому інтернет-магазині
      </p>
    </div>
  );
}

export default NotFound;
