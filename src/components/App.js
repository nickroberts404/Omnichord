import React, { Component } from 'react';
import styles from './App.css';
import ChordGrid from './ChordGrid';
import Tone from 'Tone';

export default class App extends Component {
	constructor(props) {
		super(props);
		const synth = new Tone.PolySynth(4, Tone.Synth).toMaster();
		this.state = {chord: null, synth}
	}

	updateChord(chord) {
		const oldChord = this.state.chord;
		if(oldChord){
			this.state.synth.triggerRelease(getChord(oldChord).freq);
		}
		if(chord) {
			this.state.synth.triggerAttack(getChord(chord).freq);
		}
		this.setState({chord})
	}

	render() {
		return (
			<div className={styles.app}>
				<h2>Omnichord</h2>
				<ChordGrid updateChord={this.updateChord.bind(this)}/>
			</div>
		)
	}
};

function getChord(chord) {
	const notes = chord.intervals.map(chord.root.interval.bind(chord.root))
	const freq = notes.map(i => i.fq());
	return {notes, freq};
}