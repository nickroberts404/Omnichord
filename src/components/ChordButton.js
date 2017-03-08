import React from 'react';
import styles from './ChordButton.css';

const ChordButton = (props) => {
	const { root, chord, updateChord } = props;
	return (
		<div 
			className={styles.chordbutton}
			onMouseDown={() => updateChord(chord, true)}
			onMouseOut={() => updateChord(chord, false)}
			onMouseUp={() => updateChord(chord, false)}>
			{root.toString()}
		</div>
	);
};

export default ChordButton;