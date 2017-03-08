import React from 'react';
import styles from './ChordGrid.css';
import ChordRow from './ChordRow';
import daccord from 'daccord';

const ChordGrid = () => (
	<div className={styles.chordgrid}>
		<ChordRow family={chordFamilies.major} />
		<ChordRow family={chordFamilies.minor} />
		<ChordRow family={chordFamilies.seventh} />
	</div>
);
const chordFamilies = {
	major: {
		title: 'Major',
		interval: daccord('maj')
	},
	minor: {
		title: 'minor',
		interval: daccord('min')
	},
	seventh: {
		title: '7th',
		interval: daccord('maj7')
	}
}

export default ChordGrid;