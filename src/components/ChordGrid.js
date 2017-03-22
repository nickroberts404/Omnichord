import React from 'react';
import '../styles/ChordGrid.scss';
import ChordRow from './ChordRow';
import RootRow from './RootRow';

const ChordGrid = (props) => (
	<div className='chord-grid'>
		<RootRow notes={props.notes} />
		{props.activeFamilies.map((f, i) => <ChordRow
			key={i}
			index={i}
			updateFamily={props.updateFamily}
			families={props.families}
			family={f}
			updateChord={props.updateChord}
			chords={props.chords}
		/>)}
	</div>
);

export default ChordGrid;