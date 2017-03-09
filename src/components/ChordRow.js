import React from 'react';
import styles from './ChordRow.css';
import ChordButton from './ChordButton';

const ChordRow = (props) => {
	const { family, updateChord, chords } = props;
	return (
		<div className={styles['chord-row']}>
			<div className={styles['chord-row-title']}>{family.title}</div>
			<div className={styles['chord-row-buttons']}>
				{family.chords.map(chord => <ChordButton
					key={chord.toString()}
					root={chord.root}
					chord={chord}
					updateChord={updateChord}
					chords={chords}
				/> )}
			</div>
		</div>
	)
};

export default ChordRow;