import React, { Component } from 'react';
import OutputCheckbox from './OutputCheckbox';

export default class MidiOutput extends Component {
	constructor(props) {
		super(props);
		this.state = {outputs: []}
	}

	componentWillMount() {
		if (navigator.requestMIDIAccess) {
		    navigator.requestMIDIAccess({
		        software: true
		    }).then(this.onMIDISuccess.bind(this), this.onMIDIFailure.bind(this));
		} else {
		    alert("No MIDI support in your browser.");
		}
	}

	accessStateChange(access) {
		this.updateOutputs(access.currentTarget.outputs);
	}

	onMIDISuccess(access) {
		access.onstatechange = this.accessStateChange.bind(this);
		this.updateOutputs(access.outputs);
	}

	onMIDIFailure() {
		console.log('Sorry, MIDI has been denied.')
	}

	updateOutputs(outs) {
		let outputs = [];
		outs.forEach(i => outputs.push(i))
		this.setState({outputs});
	}

	updateActive(id) {
		const { active, updateOutputs } = this.props;
		if(active.includes(id)) updateOutputs(active.filter(i => i !== id));
		else updateOutputs(active.concat([id]));
	}

	render() {
		const { outputs } = this.state;
		const { active } = this.props;
		return (
			<div>
				<h2>react-midi-out</h2>
				<div className="checklist">
					{outputs.map(i => <OutputCheckbox 
						key={i.id}
						id={i.id}
						name={i.name}
						manufacturer={i.manufacturer}
						state={i.state}
						connection={i.connection}
						onChange={this.updateActive.bind(this)}
						value={active.includes(i.id)}
					/>)}
				</div>
			</div>
		)
	}
}