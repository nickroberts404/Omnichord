import React from 'react';
import '../styles/RootRow.scss';

const RootRow = (props) => {
	return (
		<div className='root-row'>
			{props.notes.map(i => <div key={i} className='root-title'>{i}</div> )}
		</div>
	)
};

export default RootRow;