import type { Translation } from '../i18n-types'

const en: Translation = {
	editor: {
		menu: {
			file: "&Files",
			library: "&Library",
			edit: "&Edit",
			preferences: "&Preferences",
			help: "&Help",
			new: "&New",
			open: "&Open",
			save: "&Save Score",
			image: "&Export Image",
			undo: "&Undo",
			redo: "&Redo",
			selectall: "Select &All",
			cut: "Cu&t",
			copy: "&Copy",
			paste: "&Paste",
			listall: "List &All",
			upload: "&Upload",
			language: "Lan&guage",
			rename: '&Rename',
			delete: '&Delete',
			deleteall: '&Delete All',
			duplicate: "D&uplicate",
			flip: "&Flip",
			straight: "&Straight",
			curvein: "Curve &In",
			curveout: "Curve &Out",
			visible: "Visi&ble",
			invisible: "I&nvisible",
			ignored: "I&gnored",
			shrink: "Shrin&k",
			download: "Do&wnload",
		},
		menuDescription: {
			new: 'Create a new score',
			open: 'Open a score',
			save: 'Save the score as .sus file',
			image: 'Export the score as an image',
			undo: 'Undo the last action',
			redo: 'Redo the last action',
			selectall: 'Select all notes',
		},
		panel: {
			measure: "(Bar)",
			totalcombo: 'Total Combos: {combo}',
			totalselected: '{selected} Notes Selected',
			skipstart: 'Previous',
			playpause: 'Play/Pause',
			skipback: 'Back',
			scrollmode: 'Scroll Mode',
			metadata: 'Metadata',
			title: 'Title',
			artist: 'Artist',
			author: 'Author',
			statistics: 'Statistics',
			history: 'History',
			undo: 'Undo',
			redo: 'Redo',
			open: 'Open',
			master: 'Master Volume',
			sfxvolume: 'SFX Volume',
			music: 'Audio',
			musicfile: 'Music File',
			control: 'Controls',
			updatedTime: 'Last Updated',
		},
		scrollmode: {
			page: 'Page Up/Down',
			smooth: 'Smooth Scroll',
			none: 'No Scroll',
		},
		messages: {
			nonNumeralInputError: 'Please enter a number',
			outOfRangeInputError: 'Please enter a number between {from} and {to}',
			projectSavedAs: 'Project saved as {project}',
			loadingSUSError: 'Error loading .sus file',
			autoSaved: 'Auto-saved',
			saved: 'The score is successfully saved',
			uploadNotSelectedError: 'Please select some notes to upload',
			inputTitlePrompt: 'Please enter a title',
			inputDescriptionPrompt: 'Please enter a description',
			inputEmptyError: 'Please enter both a title and a description',
			uploaded: 'The score is successfully uploaded',
			uploadFailed: 'Upload failed',
			exitConfirm: 'Do you want to save the score before exiting?',
			unknownFileType: 'Unknown file type',
			loadingLibraryFailed: 'Failed to load library',
			preferencesSaved: 'Preferences saved',
			deleteConfirm: 'Do you want to delete it?',
		},
		snapTo: {
			snap: '{n}-Division',
			custom: 'Custom Division',
			snapWithRange: 'Divisions (1 ~ 1920)',
		},
		dialog: {
			bpmTitle: 'Set BPM',
			customSnappingTitle: 'Set Custom Division',
			imageTitle: 'Export Image',
			libraryTitle: 'Library',
			preferencesTitle: 'Preferences',
			projectsTitle: 'Projects',
			append: 'Append',
			change: 'Change',
			export: 'Export',
			ok: 'OK',
			new: 'New',
			opensus: 'Open SUS',
		},
		preferences: {
			autosaveInterval: 'Auto-save Interval (sec)',
			scrollSpeed: 'Scroll Speed (x)',
		},
		modes: {
			select: "Select",
			tap: "Tap",
			slide: "Slide",
			mid: "Step",
			flick: "Flick",
			critical: "Critical",
			bpm: "BPM",
		}
	}
}

export default en
