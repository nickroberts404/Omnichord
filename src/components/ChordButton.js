import React from 'react';
import styles from './ChordButton.css';

const ChordButton = (props) => {
	return (
		<div 
			className={styles.chordbutton}
			onMouseDown={() => playChord(props.synth, props.chord)}
			onMouseUp={() => releaseChord(props.synth, props.chord)}>
			{props.root}
		</div>
	);
};

function playChord(synth, chord) {
	console.log(chord[0].fq)
	const notes = chord.map(i => i.fq())
	console.log(notes)
	synth.triggerAttackRelease(notes, "2n");
}

function releaseChord(synth, chord) {
	console.log(chord[0])
	// const notes = chord.map(i => i.freq)
	// synth.triggerAttackRelease(notes, "2n");
}

export default ChordButton;