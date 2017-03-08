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
const keys = [
	[81, 87, 69, 82, 84, 89, 85, 73, 79, 80, 219, 221],
	[65, 83, 68, 70, 71, 72, 74, 75, 76, 186, 222, 13],
	[90, 88, 67, 86, 66, 78, 77, 188, 190, 191, 16, 220],
]
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