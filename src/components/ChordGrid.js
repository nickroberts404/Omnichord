import React from 'react';
import styles from './ChordGrid.css';
import ChordRow from './ChordRow';
import RootRow from './RootRow';
import daccord from 'daccord';
import Tone from 'Tone';

const ChordGrid = () => (
	<div className={styles.chordgrid}>
		<RootRow notes={notes} />
		<ChordRow family={chordFamilies.major} {...{synth, notes}}/>
		<ChordRow family={chordFamilies.minor} {...{synth, notes}}/>
		<ChordRow family={chordFamilies.seventh} {...{synth, notes}}/>
	</div>
);

const synth = new Tone.PolySynth(4, Tone.Synth).toMaster();
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