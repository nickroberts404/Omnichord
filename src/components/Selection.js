import React, { Component, PropTypes } from 'react';

const styles = {
	control: {
		display: 'flex',
		alignItems: 'center'
	},
	display: {
		fontSize: 14,
	},
	button: {
		fontSize: 15,
		fontWeight: 'bold',
		padding: '0 8px',
		cursor: 'pointer',
	},
	down: {
		transform: 'rotate(-180deg)'
	}
}

export default class Selection extends Component {

	down() {
		const { value, options, onChange, cyclic, getValue } = this.props;
		const index = this.findIndex(options, value);
		const nextIndex = cyclic ? (index-1 < 0 ? options.length-1 : index-1): Math.max(0, index-1);
		onChange(getValue(options[nextIndex]));
	}

	up() {
		const { value, options, onChange, cyclic, getValue } = this.props;
		const index = this.findIndex(options, value);
		const nextIndex = cyclic ? (index+1 >= options.length ? 0 : index+1): Math.min(options.length-1, index+1);
		onChange(getValue(options[nextIndex]));
	}

	findIndex(options, value) {
		const key = this.props.getKey(value);
		for(var i=0; i < options.length; i++){
			if(key === this.props.getKey(options[i])) return i;
		}
		return -1;
	}

	render() {
		const { showButtons, getDisplay, value, className } = this.props;
		if(showButtons) return (
			<div style={styles.control} className={className}>
				<div style={Object.assign({}, styles.button, styles.down)} className={`${className}-button ${className}-down`} onClick={this.down.bind(this)}>&#9654;</div>
				<div style={styles.display} className={className + '-display'}>{getDisplay(value)}</div>
				<div style={styles.button} className={`${className}-button ${className}-up`} onClick={this.up.bind(this)}>&#9654;</div>
			</div>
		)
		else return (
			<div style={styles.control} className={className}>
				<div style={Object.assign({cursor: 'pointer'}, styles.display)} className={className + '-display'} onClick={this.up.bind(this)}>{getDisplay(value)}</div>
			</div>
		)
	}
};

Selection.propTypes = {
	options: PropTypes.array.isRequired,
	cyclic: PropTypes.bool,
	onChange: PropTypes.func,
	showButtons: PropTypes.bool,
	getDisplay: PropTypes.func,
	getValue: PropTypes.func,
	getKey: PropTypes.func,
	className: PropTypes.string,
}

Selection.defaultProps = {
	className: 'selecto',
	cyclic: true,
	showButtons: true,
	getDisplay: value => value,
	getValue: value => value,
	getKey: key => key,
}