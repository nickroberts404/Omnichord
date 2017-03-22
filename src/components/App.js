import React, { Component } from 'react';
import '../styles/main.scss';
import ChordGrid from './ChordGrid';
import OctaveControl from './OctaveControl';
import Tone from 'Tone';
import MidiOutput from './MidiOutput';
import { families, keyMap, keys, notes } from '../constants';
import { getFrequencies, getChord, getInterval } from '../theory.js'

export default class App extends Component {
	constructor(props) {
		super(props);
		const vol = new Tone.Volume(-10)
		const synth = new Tone.PolySynth(4, Tone.MonoSynth).chain(vol, Tone.Master);
		this.state = {
			chords: [],
			hold: false,
			octave: 0,
			activeFamilies:[families[0], families[1], families[2]],
			mute: false,
			volumeObj: vol,
			outputs: [],
			synth
		}
	}

	componentWillMount() {
		window.addEventListener('keydown', e => {
			const mapping = keyMap[e.keyCode];
			if(mapping && !e.repeat) {
				const chord = this.state.activeFamilies[mapping[0]].chords[mapping[1]];
				this.updateChords(chord, true);
			}
		});
		window.addEventListener('keyup', e => {
			const mapping = keyMap[e.keyCode];
			if(mapping) {
				const chord = this.state.activeFamilies[mapping[0]].chords[mapping[1]];
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

	updateFamily(index, family) {
		const activeFamilies = this.state.activeFamilies.map((f, i) => i === index ? family : f)
		this.setState({activeFamilies})
	}

	updateOutputs(outputs) {
		this.setState({outputs});
	}

	toggleMute() {
		const { mute, volumeObj} = this.state;
		const next = !this.state.mute;
		volumeObj.mute = next;
		this.setState({mute: next})
	}

	render() {
		const { hold, activeFamilies, chords, octave, mute, outputs } = this.state;
		return (
			<div className='app'>
				<h2>Omnichord</h2>
				<ChordGrid updateFamily={this.updateFamily.bind(this)} families={families} activeFamilies={activeFamilies} notes={notes} updateChord={this.updateChords.bind(this)} chords={chords}/>
				<OctaveControl updateOctave={this.updateOctave.bind(this)} octave={octave}/>
				<button onClick={this.toggleMute.bind(this)}>{mute ? 'Unmute' : 'Mute'}</button>
				<MidiOutput active={outputs} updateOutputs={this.updateOutputs.bind(this)}/>
			</div>
		)
	}
};

