import React from 'react';
import styles from './ChordButton.css';

const ChordButton = (props) => {
	const { root, chord, updateChord } = props;
	console.log(root)
	return (
		<div 
			className={styles.chordbutton}
			onMouseDown={() => updateChord(chord)}
			onMouseOut={() => updateChord(null)}
			onMouseUp={() => updateChord(null)}>
			{root.toString()}
		</div>
	);
};

export default ChordButton;