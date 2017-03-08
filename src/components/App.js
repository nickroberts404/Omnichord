import React from 'react';
import styles from './App.css';
import ChordGrid from './ChordGrid';
const App = () => (
	<div className={styles.app}>
		<h2>Omnichord</h2>
		<ChordGrid />
	</div>
);

export default App;