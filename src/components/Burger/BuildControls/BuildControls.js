import React from 'react';
import styles from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';

const buildControls = (props) => (
  <div className={styles.BuildControls}>
    <BuildControl label='Ingredient' />
    <BuildControl label='Ingredient' />
    <BuildControl label='Ingredient' />
  </div>
);

export default buildControls;
