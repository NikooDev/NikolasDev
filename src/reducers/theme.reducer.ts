import IinitialTheme from '@Types/theme'
import Iaction from '@Types/action'

let theme = typeof window !== 'undefined' && window.localStorage.getItem('theme') as string

const initialState = {
	dark: theme
}

const ThemeReducer = (initialState: IinitialTheme, action: Iaction) => {
	switch (action.type) {
		case 'SET_THEME':
			return {
				...initialState,
				dark: action.payload
			}
		default:
			return initialState
	}
}

export {
	initialState, ThemeReducer
}