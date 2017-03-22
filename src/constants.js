import { getChord } from './theory';

export const notes = ['Db', 'Ab', 'Eb', 'Bb', 'F', 'C', 'G', 'D', 'A', 'E', 'B', 'F#'];

export const keys = [
	[81, 87, 69, 82, 84, 89, 85, 73, 79, 80, 219, 221],
	[65, 83, 68, 70, 71, 72, 74, 75, 76, 186, 222, 13],
	[90, 88, 67, 86, 66, 78, 77, 188, 190, 191, 16, 220],
];

export const keyMap = keys.reduce((obja, row, i) => {
	let o = row.reduce((objb, code, j) => Object.assign({}, objb, {[code]: [i, j]}), {})
	return Object.assign({}, obja, o)
}, {});

export const families = [
	{
		title: 'Major',
		suffix: 'M',
		chords: notes.map(i => getChord(i, 'M'))
	},
	{
		title: 'Minor',
		suffix: 'm',
		chords: notes.map(i => getChord(i, 'm'))
	},
	{
		title: '7th',
		suffix: 'maj7',
		chords: notes.map(i => getChord(i, 'maj7'))
	}
];