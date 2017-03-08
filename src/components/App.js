import React, { Component } from 'react';
import styles from './App.css';
import ChordGrid from './ChordGrid';
import HoldButton from './HoldButton';
import Tone from 'Tone';

export default class App extends Component {
	constructor(props) {
		super(props);
		const synth = new Tone.PolySynth(4, Tone.Synth).toMaster();
		this.state = {chord: null, hold: false, synth}
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
		return (
			<div className={styles.app}>
				<h2>Omnichord</h2>
				<ChordGrid updateChord={this.updateChord.bind(this)}/>
				<HoldButton value={this.state.hold} updateHold={this.updateHold.bind(this)} />
			</div>
		)
	}
};

function chordInfo(chord) {
	const notes = chord.intervals.map(chord.root.interval.bind(chord.root))
	const freq = notes.map(i => i.fq());
	return {notes, freq};
}