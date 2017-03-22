import React, { PropTypes } from 'react';

const OutputCheckbox = (props) => {
	const { id, name, manufacturer, state, connection, onChange, value } = props;
	return (
		<div className="output-checkbox">
			<input id={id} type="checkbox" checked={value} onChange={() => onChange(id)}/>
			<label htmlFor={id}>{name} ({manufacturer})</label>
			<div>{state}, {connection}</div>
		</div>
	)
}

OutputCheckbox.propTypes = {
	id: PropTypes.string.isRequired,
	name: PropTypes.string,
	manufacturer: PropTypes.string,
	state: PropTypes.string,
	connection: PropTypes.string,
	onChange: PropTypes.func.isRequired,
	value: PropTypes.bool.isRequired
}

export default OutputCheckbox;