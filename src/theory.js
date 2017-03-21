import teoria from 'teoria';

export function getFrequencies(chord) {
	return chord.notes().map(i => i.fq());
}

export function getChord(note, suffix, octave) {
	const rootNote = teoria.note(note);
	return rootNote.chord(suffix);
}

export function getInterval(octave) {
	return `P${(octave * 7) + (octave < 0 ? -1 : 1)}`
}