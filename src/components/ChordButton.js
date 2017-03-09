import React from 'react';
import styles from './ChordButton.css';

const ChordButton = (props) => {
	const { root, chord, updateChord, chords} = props;
	let className = styles['chord-button']
	const isActive = chords.length > 0 && (chords[chords.length-1].toString() === chord.toString());
	const isHeld = chords.some(i => i.toString() === chord.toString());
	console.log(isActive)
	if(isActive) className += ' '+styles['active']
	else if(isHeld) className += ' '+styles['held']
	return (
		<div 
			className={className}
			onMouseDown={() => updateChord(chord, true)}
			onMouseOut={() => updateChord(chord, false)}
			onMouseUp={() => updateChord(chord, false)}>
			{root.toString()}
		</div>
	);
};

export default ChordButton;