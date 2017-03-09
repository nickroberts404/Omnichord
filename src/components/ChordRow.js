import React from 'react';
import styles from './ChordRow.css';
import ChordButton from './ChordButton';

const ChordRow = (props) => {
	const { family, updateChord, chords, index } = props;
	return (
		<div className={styles['chord-row']}>
			<div className={styles['title']}>{family.title}</div>
			<div className={`${styles['buttons']} ${styles['buttons-row-'+index]}`}>
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