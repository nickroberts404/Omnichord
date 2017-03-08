import React from 'react';
import styles from './ChordRow.css';
import ChordButton from './ChordButton';
import teoria from 'teoria';

const ChordRow = (props) => {
	return (
		<div className={styles.chordrow}>
			{props.notes.map(i => <ChordButton 
				root={i}
				chord={getChord(i, props.family.suffix)}
				updateChord={props.updateChord}
			/> )}
		</div>
	)
};

function getChord(note, suffix) {
	const rootNote = teoria.note(note);
	return rootNote.chord(suffix);
}

export default ChordRow;