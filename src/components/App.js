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
		this.setState({chord: chord.name})
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