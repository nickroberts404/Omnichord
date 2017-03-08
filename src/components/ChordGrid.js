import React from 'react';
import styles from './ChordGrid.css';
import ChordRow from './ChordRow';
import RootRow from './RootRow';
import daccord from 'daccord';

const ChordGrid = (props) => (
	<div className={styles.chordgrid}>
		<RootRow notes={notes} />
		<ChordRow family={chordFamilies.major} notes={notes} updateChord={props.updateChord}/>
		<ChordRow family={chordFamilies.minor} notes={notes} updateChord={props.updateChord}/>
		<ChordRow family={chordFamilies.seventh} notes={notes} updateChord={props.updateChord}/>
	</div>
);

const notes = ['c', 'c#', 'd', 'd#', 'e', 'f', 'f#', 'g', 'g#', 'a', 'a#', 'b'];

const chordFamilies = {
	major: {
		title: 'Major',
		suffix: 'M'
	},
	minor: {
		title: 'Minor',
		suffix: 'm'
	},
	seventh: {
		title: '7th',
		suffix: 'maj7'
	}
}

export default ChordGrid;