import React, { useEffect } from 'react'
import Ilayout from '@Types/layout'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Noscript from '@Components/noscript'
import Header from '@Components/header'
import Footer from '@Components/footer'
import Class from 'classnames'
import g from '@Assets/modules/global.module.scss'
import m from '@Components/mentions/mentions.module.scss'

/**
 * Main layout Guest
 * @param title
 * @param description
 * @param children
 * @constructor
 */
const Guest: React.FC<Ilayout> = ({
	title,
	description,
	children }) => {
	const router = useRouter()

	useEffect(() => {
		window.addEventListener('resize', () => {
			let rect = document.getElementById('rect') as HTMLImageElement
			if(rect) rect.classList.add(m.noTransition)
		})
	}, [])

	return (
		<>
			<Head>
				<title>{ title }</title>
				<meta name="description" content={description} />
			</Head>
			<Noscript />
			<Header />
			<main role="main">
				<img src="/static/rect.svg" id="rect" alt="" className={Class(g.pAbsolute, g.r0, router.pathname === '/' ? g.t6 : [g.tm2, g.posLegal], g.zi01, g.rect)}/>
				{ children }
			</main>
			<Footer />
		</>
	)
}

export default Guest