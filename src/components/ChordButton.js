import React from 'react';
import '../styles/ChordButton.scss';

const ChordButton = (props) => {
	const { chord, updateChord, chords} = props;
	let className = 'chord-button'
	const isActive = chords.length > 0 && (chords[chords.length-1].toString() === chord.toString());
	const isHeld = chords.some(i => i.toString() === chord.toString());
	if(isActive) className += ' active';
	else if(isHeld) className += ' held';
	return (
		<div 
			className={className}
			onMouseDown={() => updateChord(chord, true)}
			onMouseOut={() => updateChord(chord, false)}
			onMouseUp={() => updateChord(chord, false)}>
			{}
		</div>
	);
};

export default ChordButton;