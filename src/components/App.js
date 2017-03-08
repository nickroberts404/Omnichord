import React, { Component } from 'react';
import styles from './App.css';
import ChordGrid from './ChordGrid';
import HoldButton from './HoldButton';
import Tone from 'Tone';
import teoria from 'teoria';

export default class App extends Component {
	constructor(props) {
		super(props);
		const synth = new Tone.PolySynth(4, Tone.Synth).toMaster();
		this.state = {
			chord: null,
			hold: false,
			families:[families.major, families.minor, families.seventh],
			synth
		}
	}

	componentWillMount() {
		window.addEventListener('keydown', e => {
			const mapping = keyMap(e.keyCode);
			if(mapping) console.log(mapping)
		})
	}

	updateChord(chord) {
		const {chord: oldChord, synth, hold} = this.state;
		if(oldChord && (chord || !hold)) synth.triggerRelease(chordInfo(oldChord).freq);
		if(chord) synth.triggerAttack(chordInfo(chord).freq);
		else if(hold) return false; // chord is null, but we're holding so keep the current chord
		this.setState({chord}) // We have a new chord, or, if not holding, we have no chord.
	}
	
	updateHold(hold) {
		this.setState({hold});
	}

	render() {
		const { hold, families } = this.state;
		return (
			<div className={styles.app}>
				<h2>Omnichord</h2>
				<ChordGrid families={families} notes={notes} updateChord={this.updateChord.bind(this)}/>
				<HoldButton value={hold} updateHold={this.updateHold.bind(this)} />
			</div>
		)
	}
};

function chordInfo(chord) {
	const notes = chord.intervals.map(chord.root.interval.bind(chord.root))
	const freq = notes.map(i => i.fq());
	return {notes, freq};
}

const notes = ['c', 'c#', 'd', 'd#', 'e', 'f', 'f#', 'g', 'g#', 'a', 'a#', 'b'];

const keys = [
	[81, 87, 69, 82, 84, 89, 85, 73, 79, 80, 219, 221],
	[65, 83, 68, 70, 71, 72, 74, 75, 76, 186, 222, 13],
	[90, 88, 67, 86, 66, 78, 77, 188, 190, 191, 16, 220],
];

const keyMap = keys.reduce((obja, row, i) => {
	let o = row.reduce((objb, code, j) => Object.assign({}, objb, {[code]: [i, j]}))
	return Object.assign({}, obja, o)
}, {});

const families = {
	major: {
		title: 'Major',
		suffix: 'M',
		chords: notes.map(i => getChord(i, 'M'))
	},
	minor: {
		title: 'Minor',
		suffix: 'm',
		chords: notes.map(i => getChord(i, 'm'))
	},
	seventh: {
		title: '7th',
		suffix: 'maj7',
		chords: notes.map(i => getChord(i, 'maj7'))
	}
};

function getChord(note, suffix) {
	const rootNote = teoria.note(note);
	return rootNote.chord(suffix);
}

/**
familySet = [major, minor, seventh]
keyPress{
	coord = map(keycode)
	familySet[coord[0]].chords[familySet[choord1]]
}
{
	145: chord,
	23: chord,
}
chords: {
	major: {
		title,
		suffix,
		chords: [
			a, b, c, d, e, f, g
		]
	}
}
<ChordGrid families=[major, minor, seventh] />

<ChordRow
**/
