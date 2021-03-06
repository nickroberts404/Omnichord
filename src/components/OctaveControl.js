import React, { Component } from 'react';
import Selection from './selection';
import '../styles/OctaveControl.scss';

export default class OctaveControl extends Component {
	render() {
		const { octave, updateOctave } = this.props;
		return(
			<Selection
				className="octave-control"
				options={[-3, -2, -1, 0, 1, 2, 3]}
				value={octave}
				getDisplay={oct => 'Oct '+oct}
				cyclic={false}
				onChange={updateOctave} />
		)
	}
};