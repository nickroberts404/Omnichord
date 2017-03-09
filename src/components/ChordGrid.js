import React from 'react';
import styles from './ChordGrid.css';
import ChordRow from './ChordRow';
import RootRow from './RootRow';
import daccord from 'daccord';

const ChordGrid = (props) => (
	<div className={styles.chordgrid}>
		<RootRow notes={props.notes} />
		{props.families.map(i => <ChordRow
			key={i.title}
			family={i}
			updateChord={props.updateChord}
		/>)}
	</div>
);

export default ChordGrid;