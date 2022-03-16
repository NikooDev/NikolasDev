import React, { createContext, useContext, useReducer } from 'react'
import { initialState, ThemeReducer } from '@Reducers/theme.reducer'
import IinitialTheme from '@Types/theme'
import Iaction from '@Types/action'

const ThemeContext = createContext({} as IinitialTheme)
const ThemeDispatch = createContext<React.Dispatch<Iaction>>(() => {})

const useThemeContext = () => {
	const context = useContext(ThemeContext)
	if(context === undefined) {
		throw new Error('useThemeContext must be used inside a ThemeProvider')
	}
	return context
}

const useThemeDispatch = () => {
	const context = useContext(ThemeDispatch)
	if(context === undefined) {
		throw new Error('useThemeDispatch must be used inside a ThemeProvider')
	}
	return context
}

const ThemeProvider: React.FC = ({ children }) => {
	const [theme, dispatch] = useReducer(ThemeReducer, initialState)

	return (
		<ThemeContext.Provider value={theme}>
			<ThemeDispatch.Provider value={dispatch}>
				{ children }
			</ThemeDispatch.Provider>
		</ThemeContext.Provider>
	)
}

export {
	useThemeContext, useThemeDispatch, ThemeProvider
}