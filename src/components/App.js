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
			chords: [],
			hold: false,
			families:[families.major, families.minor, families.seventh],
			synth
		}
	}

	componentWillMount() {
		window.addEventListener('keydown', e => {
			const mapping = keyMap[e.keyCode];
			if(mapping && !e.repeat) {
				const chord = this.state.families[mapping[0]].chords[mapping[1]];
				this.updateChords(chord, true);
			}
		});
		window.addEventListener('keyup', e => {
			const mapping = keyMap[e.keyCode];
			if(mapping) {
				const chord = this.state.families[mapping[0]].chords[mapping[1]];
				this.updateChords(chord, false);
			}
		});
	}

	addChord(old, chord) {
		return old.concat([chord]);
	}

	removeChord(old, chord) {
		return old.filter(i => chord.toString() !== i.toString());
	}

	updateChords(chord, add) {
		let newChords;
		const {chords, synth, hold} = this.state;

		if(add) {
			newChords = this.addChord(chords, chord);
			if(chords.length > 0) synth.triggerRelease(chordInfo(chords[chords.length-1]).freq)
			synth.triggerAttack(chordInfo(newChords[newChords.length-1]).freq)
		}
		else {
			newChords = this.removeChord(chords, chord);
			const newChord = newChords[newChords.length-1] || null;
			const oldChord = chords[chords.length-1] || null;
			if((newChord && oldChord) && (newChord.toString() === oldChord.toString())){
				// Don't do anything if a note is removed, but topmost note remains the same
			} else {
				if(oldChord) synth.triggerRelease(chordInfo(oldChord).freq)
				if(newChord) synth.triggerAttack(chordInfo(newChord).freq)
			}
			
		}
		this.setState({chords: newChords})
	}
	
	updateHold(hold) {
		this.setState({hold});
	}

	render() {
		const { hold, families } = this.state;
		return (
			<div className={styles.app}>
				<h2>Omnichord</h2>
				<ChordGrid families={families} notes={notes} updateChord={this.updateChords.bind(this)}/>
				<HoldButton value={hold} updateHold={this.updateHold.bind(this)} />
			</div>
		)
	}
};

function chordInfo(chord) {
	console.log(chord)
	const notes = chord.intervals.map(chord.root.interval.bind(chord.root))
	const freq = notes.map(i => i.fq());
	return {notes, freq};
}

function getChord(note, suffix) {
	const rootNote = teoria.note(note);
	return rootNote.chord(suffix);
}

const notes = ['db', 'ab', 'eb', 'bb', 'f', 'c', 'g', 'd', 'a', 'e', 'b', 'f#'];

const keys = [
	[81, 87, 69, 82, 84, 89, 85, 73, 79, 80, 219, 221],
	[65, 83, 68, 70, 71, 72, 74, 75, 76, 186, 222, 13],
	[90, 88, 67, 86, 66, 78, 77, 188, 190, 191, 16, 220],
];

const keyMap = keys.reduce((obja, row, i) => {
	let o = row.reduce((objb, code, j) => Object.assign({}, objb, {[code]: [i, j]}), {})
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