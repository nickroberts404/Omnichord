import React, { Component } from 'react';
import styles from './OctaveControl.css';

export default class OctaveControl extends Component {

	raiseOctave() {
		const { octave, updateOctave } = this.props;
		updateOctave(octave + 1);
	}

	lowerOctave() {
		const { octave, updateOctave } = this.props;
		updateOctave(octave - 1);
	}

	render() {
		const { octave } = this.props;
		return(
			<div className={styles['octave-control']}>
				<div className={styles["octave-down"]} onClick={this.lowerOctave.bind(this)}>&lt;</div>
				<div className={styles["octave-display"]}>Oct {octave}</div>
				<div className={styles["octave-up"]} onClick={this.raiseOctave.bind(this)}>&gt;</div>
			</div>
		)
	}
};