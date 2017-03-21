import React from 'react';
import '../styles/ChordGrid.scss';
import ChordRow from './ChordRow';
import RootRow from './RootRow';
import daccord from 'daccord';

const ChordGrid = (props) => (
	<div className='chord-grid'>
		<RootRow notes={props.notes} />
		{props.families.map((f, i) => <ChordRow
			key={f.title}
			index={i}
			family={f}
			updateChord={props.updateChord}
			chords={props.chords}
		/>)}
	</div>
);

export default ChordGrid;