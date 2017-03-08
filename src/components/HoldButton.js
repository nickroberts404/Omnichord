import React from 'react';
import styles from './HoldButton.css';

const HoldButton = (props) => (
	<div className={styles.holdbutton}>
		<label htmlFor="hold">Hold</label>
		<input
			type="checkbox"
			id="hold"
			checked={props.value}
			onChange={() => props.updateHold(!props.value)}/>
	</div>
);

export default HoldButton;