import React from 'react';
import styles from './ChordButton.css';

const ChordButton = (props) => {
	return (
		<div className={styles.chordbutton}>
			{props.root}
		</div>
	);
};

export default ChordButton;