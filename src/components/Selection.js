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
		color: '#aaa'
	},
	down: {
		transform: 'rotate(-180deg)'
	}
}

export default class Selection extends Component {

	down() {
		const { value, options, onChange, cyclic } = this.props;
		const index = findIndex(options, value);
		const nextIndex = cyclic ? (index-1 < 0 ? options.length-1 : index-1): Math.max(0, index-1);
		onChange(options[nextIndex]);
	}

	up() {
		const { value, options, onChange, cyclic } = this.props;
		const index = findIndex(options, value);
		const nextIndex = cyclic ? (index+1 >= options.length ? 0 : index+1): Math.min(options.length-1, index+1);
		onChange(options[nextIndex]);
	}

	render() {
		const { showButtons, display, value } = this.props;
		if(showButtons) return (
			<div style={styles.control} className='selecto-control'>
				<div style={Object.assign({}, styles.button, styles.down)} className='selecto-button selecto-down' onClick={this.down.bind(this)}>&#9654;</div>
				<div style={styles.display} className='selecto-display'>{display(value)}</div>
				<div style={styles.button} className='selecto-button selecto-up' onClick={this.up.bind(this)}>&#9654;</div>
			</div>
		)
		else return (
			<div style={styles.control} className='selecto-control'>
				<div style={Object.assign({cursor: 'pointer'}, styles.display)} className='selecto-display' onClick={this.up.bind(this)}>{display(value)}</div>
			</div>
		)
	}
};

function findIndex(options, value) {
	for(var i=0; i < options.length; i++){
		const option = options[i];
		if(option === value || option.value === value) return i;
	}
	return -1;
}

Selection.propTypes = {
	options: PropTypes.array.isRequired,
	cyclic: PropTypes.bool,
	onChange: PropTypes.func,
	showButtons: PropTypes.bool,
	display: PropTypes.func
}

Selection.defaultProps = {
	cyclic: true,
	showButtons: true,
	display: value => value,
}