import React from 'react';
import styles from './ChordButton.css';

const ChordButton = (props) => {
	const { root, chord, updateChord } = props;
	return (
		<div 
			className={styles.chordbutton}
			onMouseDown={() => updateChord(chord)}
			onMouseUp={() => updateChord(null)}>
			{root}
		</div>
	);
};

export default ChordButton;