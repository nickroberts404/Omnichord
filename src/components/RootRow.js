import React from 'react';
import styles from './RootRow.css';

const RootRow = (props) => {
	return (
		<div className={styles.rootrow}>
			{props.notes.map(i => <div className={styles.roottitle}>{i}</div> )}
		</div>
	)
};

export default RootRow;