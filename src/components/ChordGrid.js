import React from 'react';
import styles from './ChordGrid.css';
import ChordRow from './ChordRow';
import RootRow from './RootRow';
import daccord from 'daccord';

const ChordGrid = () => (
	<div className={styles.chordgrid}>
		<RootRow notes={notes} />
		<ChordRow family={chordFamilies.major} notes={notes}/>
		<ChordRow family={chordFamilies.minor} notes={notes}/>
		<ChordRow family={chordFamilies.seventh} notes={notes}/>
	</div>
);

const notes = ['a', 'a#', 'b', 'c', 'c#', 'd', 'd#', 'e', 'f', 'f#', 'g', 'g#'];

const chordFamilies = {
	major: {
		title: 'Major',
		interval: daccord('M')
	},
	minor: {
		title: 'Minor',
		interval: daccord('min')
	},
	seventh: {
		title: '7th',
		interval: daccord('maj7')
	}
}

export default ChordGrid;