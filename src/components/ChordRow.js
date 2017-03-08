import React from 'react';
import styles from './ChordRow.css';
import ChordButton from './ChordButton';

const ChordRow = (props) => {
	const { family, updateChord } = props;
	return (
		<div className={styles.chordrow}>
			{family.chords.map(chord => <ChordButton 
				root={chord.root}
				chord={chord}
				updateChord={updateChord}
			/> )}
		</div>
	)
};

export default ChordRow;