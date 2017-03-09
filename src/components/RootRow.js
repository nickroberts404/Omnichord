import React from 'react';
import styles from './RootRow.css';

const RootRow = (props) => {
	return (
		<div className={styles.rootRow}>
			{props.notes.map(i => <div key={i} className={styles.rootTitle}>{i}</div> )}
		</div>
	)
};

export default RootRow;