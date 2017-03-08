import React from 'react';
import styles from './ChordRow.css';
import ChordButton from './ChordButton';
import teoria from 'teoria';

const ChordRow = (props) => {
	console.log(getChord('a', props.family.interval))
	return (
		<div className={styles.chordrow}>
			{notes.map(i => <ChordButton 
				root={i}
				chord={getChord(i, props.family.interval)}
			/> )}
		</div>
	)
};

function getChord(note, interval) {
	const rootNote = teoria.note(note);
	return interval.map(rootNote.interval.bind(rootNote));
}
const notes = ['a', 'a#', 'b', 'c', 'c#', 'd', 'd#', 'e', 'f', 'f#', 'g', 'g#'];

export default ChordRow;