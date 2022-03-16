import React from 'react'
import g from '@Assets/modules/global.module.scss'
import Class from 'classnames'

const Container: React.FC = ({ children }) => {
	return (
		<div className={Class(g.container, g.container__width, g.container__maxWidth, g.pl2, g.pr2)}>
			{ children }
		</div>
	)
}

export default Container