import React, { useEffect, useState } from 'react'
import { useThemeContext, useThemeDispatch } from '@Contexts/theme.context'
import t from '@Assets/modules/theme.module.scss'

const useTheme = (headerRef: React.MutableRefObject<HTMLDivElement>) => {
	const [themeToggle, setThemeToggle] = useState<boolean>(false)
	const theme = useThemeContext()
	const dispatch = useThemeDispatch()

	useEffect(() => {
		if(theme.dark === 'dark') {
			document.documentElement.className = 'nd-d7a0rkM'
			window.localStorage.setItem('theme', 'dark')
			setThemeToggle(true)
		} else {
			document.documentElement.className = ''
			window.localStorage.setItem('theme', 'light')
			setThemeToggle(false)
		}
	}, [theme, setThemeToggle])

	/**
	 *
	 * @param event
	 */
	const handleTheme = (event: React.MouseEvent): void => {
		event.preventDefault()
		let theme: string
		headerRef.current && headerRef.current.classList.add(t.transition)
		document.body.className = t.transition
		setThemeToggle((prevToggle) => !prevToggle)
		themeToggle ? theme = 'light' : theme = 'dark'
		dispatch({ type: 'SET_THEME', payload: theme })
	}

	return handleTheme
}

export default useTheme