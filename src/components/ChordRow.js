import React from 'react';
import '../styles/ChordRow.scss';
import ChordButton from './ChordButton';

const ChordRow = (props) => {
	const { family, updateChord, chords, index } = props;
	return (
		<div className='chord-row'>
			<div className='chord-row-title'>{family.title}</div>
			<div className={`chord-buttons chord-buttons-row-${index}`}>
				{family.chords.map(chord => <ChordButton
					key={chord.toString()}
					root={chord.root}
					chord={chord}
					updateChord={updateChord}
					chords={chords}
				/> )}
			</div>
		</div>
	)
};

export default ChordRow;