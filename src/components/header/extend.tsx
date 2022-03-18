import React, { useCallback } from 'react'
import g from '@Assets/modules/global.module.scss'
import e from './extend.module.scss'
import { useRouter } from 'next/router'
import { Dark, Light } from '@Icons/darkmode'
import Link from 'next/link'
import Class from 'classnames'
import useTheme from '@Hooks/useTheme'
import LeftIcon from '@Icons/arrow'


interface Iref {
	headerRef: React.MutableRefObject<HTMLDivElement>
}

const HeaderExtend = ({ headerRef }: Iref) => {
	const handleTheme = useTheme(headerRef)
	const router = useRouter()

	const scrollTop = useCallback(() => window.scrollTo(0, 0), [])

	const handleBack = (event: React.MouseEvent | React.TouchEvent) => {
		event.preventDefault()
		router.push('/').then(() => scrollTop())
	}

	return (
		<div className={Class(g.pAbsolute, g.r0, e.button)}>
			{ router.pathname === '/legal' ? <Link href="/" passHref>
				<a href="/" aria-label="Retour à l'accueil" onTouchStart={(event) => handleBack(event)} onClick={(event) => handleBack(event)} className={Class(g.dFlex, g.jcCenter, g.aiCenter, g.pRelative, g.mb2, e.button__link)}>
					<LeftIcon />
				</a>
			</Link> : <></> }
			<Link href="/">
				<a href="/" aria-label="Mode sombre" className={Class(g.dFlex, g.jcCenter, g.aiCenter, g.pRelative, e.button__link)}
					 onClick={(event) => handleTheme(event)}>
					<Dark fill="#fff" classname={Class(g.pAbsolute, e.button__link__dark)} />
					<Light fill="#fff" classname={Class(g.pAbsolute, e.button__link__light)} />
				</a>
			</Link>
		</div>
	)
}

export default HeaderExtend