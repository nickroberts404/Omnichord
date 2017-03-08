import React from 'react';
import styles from './ChordRow.css';
import ChordButton from './ChordButton';
import teoria from 'teoria';

const ChordRow = (props) => {
	return (
		<div className={styles.chordrow}>
			{props.notes.map(i => <ChordButton 
				root={i}
				chord={getChord(i, props.family.interval)}
				synth={props.synth}
			/> )}
		</div>
	)
};

function getChord(note, interval) {
	const rootNote = teoria.note(note);
	return interval.map(rootNote.interval.bind(rootNote));
}

export default ChordRow;