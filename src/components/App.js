import React, { Component } from 'react';
import '../styles/main.scss';
import ChordGrid from './ChordGrid';
import OctaveControl from './OctaveControl';
import Tone from 'Tone';
import { families, keyMap, keys, notes } from '../constants';
import { getFrequencies, getChord, getInterval } from '../theory.js'

export default class App extends Component {
	constructor(props) {
		super(props);
		const synth = new Tone.PolySynth(4, Tone.MonoSynth).toMaster();
		this.state = {
			chords: [],
			hold: false,
			octave: 0,
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

	updateChords(chord, add) {
		let newChords;
		const {chords, synth, hold, octave} = this.state;

		if(add) newChords =  hold ? [chord] : chords.concat([chord]);
		else if(chords.length > 0) newChords =  hold ? [old[0]] : chords.filter(i => chord.toString() !== i.toString());
		else return false;

		const newChord = newChords[newChords.length-1] || null;
		const oldChord = chords[chords.length-1] || null;
		const interval = getInterval(octave)
		if((newChord && oldChord) && (newChord.toString() === oldChord.toString())){
			// Don't do anything if a note is removed, but topmost note remains the same
		} else {
			// if(oldChord) synth.triggerRelease(getFrequencies(oldChord.interval(interval)))
			if(oldChord) synth.releaseAll()
			if(newChord) synth.triggerAttack(getFrequencies(newChord.interval(interval)))
		}

		this.setState({chords: newChords})
	}
	
	updateHold(hold) {
		this.setState({hold});
	}

	updateOctave(octave) {
		this.setState({octave});
	}

	render() {
		const { hold, families, chords, octave } = this.state;
		return (
			<div className='app'>
				<h2>Omnichord</h2>
				<ChordGrid families={families} notes={notes} updateChord={this.updateChords.bind(this)} chords={chords}/>
				<OctaveControl updateOctave={this.updateOctave.bind(this)} octave={octave}/>
			</div>
		)
	}
};

