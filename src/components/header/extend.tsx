import React from 'react'
import g from '@Assets/modules/global.module.scss'
import e from './extend.module.scss'
import Link from 'next/link'
import Class from 'classnames'
import { Dark, Light } from '@Icons/darkmode'
import useTheme from '@Hooks/useTheme'

interface Iref {
	headerRef: React.MutableRefObject<HTMLDivElement>
}

const HeaderExtend = ({ headerRef }: Iref) => {
	const handleTheme = useTheme(headerRef)

	return (
		<div className={Class(g.pAbsolute, g.r0, e.button)}>
			<Link href="/">
				<a href="/" className={Class(g.dFlex, g.jcCenter, g.aiCenter, g.pRelative, g.mb5, e.button__link)}
					 onClick={(event) => handleTheme(event)}>
					<Dark fill="#fff" classname={Class(g.pAbsolute, e.button__link__dark)} />
					<Light fill="#fff" classname={Class(g.pAbsolute, e.button__link__light)} />
				</a>
			</Link>
		</div>
	)
}

export default HeaderExtend