import React from 'react';
import styles from './ChordButton.css';

const ChordButton = (props) => (
	<div className={styles.chordbutton}>
		{props.root}
	</div>
);

export default ChordButton;