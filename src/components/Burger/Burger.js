import React from 'react';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import styles from './Burger.module.css';

const burger = (props) => {
  let transformedIngredients = [];
  for (const property in props.ingredients) {
    for (let i = 0; i < props.ingredients[property]; i++) {
      transformedIngredients.push(
        <BurgerIngredient key={property + i} type={property} />
      );
    }
  }
  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Please start adding ingredients!</p>;
  }
  console.log(transformedIngredients);
  return (
    <div className={styles.Burger}>
      <BurgerIngredient type='bread-top' />
      {transformedIngredients}
      <BurgerIngredient type='bread-bottom' />
    </div>
  );
};

export default burger;
