import React from 'react';
import _ from 'lodash';
import '../styles/ChordRow.scss';
import Selection from './selection';
import ChordButton from './ChordButton';

const ChordRow = (props) => {
	const { family, updateChord, chords, index, families, updateFamily } = props;
	return (
		<div className='chord-row'>
			<Selection
				options={families}
				value={family}
				showButtons={false}
				className="chord-select"
				onChange={val => updateFamily(index, val)}
				getDisplay={d => d.title}
				getKey={d => d.title}/>
			<div className={`chord-buttons chord-buttons-row-${index}`}>
				{family.chords.map(chord => <ChordButton
					key={chord.toString()}
					chord={chord}
					updateChord={updateChord}
					chords={chords}
				/> )}
			</div>
		</div>
	)
};

export default ChordRow;