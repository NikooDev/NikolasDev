import React, { useEffect, useRef } from 'react'
import Typewriter from '@Class/typewriter'
import g from '@Assets/modules/global.module.scss'
import t from '@Assets/modules/theme.module.scss'
import i from './intro.module.scss'
import { AdonisJS, NextJS, NodeJS, ReactIcon } from '@Icons/stack'
import { Facebook, Github, Linkedin } from '@Icons/social'
import Class from 'classnames'
import Container from '@Components/layouts/container'

/**
 * Intro Section
 * @constructor
 */
const Intro = () => {
	const wordsRef = useRef<HTMLSpanElement>() as React.MutableRefObject<HTMLSpanElement>
	const clStack = Class(g.dFlex, g.aiCenter, g.jcCenter, g.fdColumn, g.brtl15, g.brtr15, g.brbl15, g.brbr15, t.light, i.intro__stack__link)

	useEffect(() => {
		if(!wordsRef.current) return
		let getWords = wordsRef.current.getAttribute('data-words') as string
		const words = JSON.parse(getWords)
		new Typewriter(wordsRef.current, words, 2000)
	}, [wordsRef])

	return (
		<section className={i.intro} id="intro">
			<img src="/static/rect.svg" alt="" className={Class(g.pAbsolute, g.r0, g.t6, g.zi01, i.intro__rect)}/>
			<Container>
			<div className={Class(g.dFlex, g.aiCenter, g.jcSpaceAround, i.intro__container)}>
					<div className={Class(g.dFlex, g.fdColumn, g.mb5, i.intro__row)}>
						<img src="/static/logo.svg" height="90" width="132.38" alt="logo" className={Class(i.intro__logo)} />
						<h1 className={Class(g.fwe900, g.taCenter, i.intro__title)}>NikolasDev</h1>
						<div className={Class(g.dFlex, g.jcCenter, g.w100, g.pRelative, i.intro__subtitle)}>
							<span ref={wordsRef} className={g.fwe600} data-words='["Étudiant en alternance", "Autodidacte", "Développeur web Full-Stack", "Front-end React / Next.js", "Back-end Node.js"]' />
							<span className={i.intro__subtitle__flashes}>|</span>
						</div>
						<div className={Class(g.dFlex, g.aiCenter, g.jcCenter, g.mt6)}>
							<a href="/static/cv.pdf" target="_blank" className={Class(g.dFlex, g.aiCenter, g.fwe700, g.brtl30, g.brtr30, g.brbl30, g.brbr30, i.intro__link)}>
								<span>TÉLÉCHARGER MON CV</span>
								<svg className={Class(g.ml1, i.intro__link__icon)} height={25} width={25} focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="DownloadForOfflineIcon" aria-label="fontSize large">
									<path fill="currentColor" d="M16.59 9H15V4c0-.55-.45-1-1-1h-4c-.55 0-1 .45-1 1v5H7.41c-.89 0-1.34 1.08-.71 1.71l4.59 4.59c.39.39 1.02.39 1.41 0l4.59-4.59c.63-.63.19-1.71-.7-1.71zM5 19c0 .55.45 1 1 1h12c.55 0 1-.45 1-1s-.45-1-1-1H6c-.55 0-1 .45-1 1z" />
								</svg>
							</a>
						</div>
						<div className={Class(g.dFlex, g.aiCenter, g.jcCenter, g.mt3, i.intro__social)}>
							<a href="https://github.com/NikooDev" target="_blank" aria-label="Github" className={g.mr3}>
								<Github />
							</a>
							<a href="https://www.facebook.com/nikoola44/" target="_blank" aria-label="Facebook" className={g.mr3}>
								<Facebook />
							</a>
							<a href="https://www.linkedin.com/in/nicolas-tual-677092161/" aria-label="Linkedin" target="_blank">
								<Linkedin />
							</a>
						</div>
					</div>
					<div className={Class(g.dFlex, g.fdColumn, g.brtl15, g.brtr15, g.brbl15, g.brbr15, g.mb10, t.light, i.intro__card)}>
						<pre><span>1</span>  class <strong>Person</strong> &#123;</pre>
						<pre><span>2</span>     constructor() &#123;</pre>
						<pre><span>3</span>        this.name = "<strong>Nicolas Tual</strong>";</pre>
						<pre><span>4</span>        this.status = "<strong>Étudiant</strong>";</pre>
						<pre><span>5</span>        this.traits = ["<strong>DEV</strong>", "<strong>FULL-STACK</strong>", "<strong>CREATIVE</strong>"];</pre>
						<pre><span>6</span>        this.age = new Date().getFullYear() - 1990;</pre>
						<pre><span>7</span>     &#125;</pre>
						<pre><span>8</span>  &#125;</pre>
					</div>
				</div>
				<div className={Class(g.dFlex, g.jcSpaceAround, i.intro__stack)}>
					<a href="https://fr.reactjs.org/" target="_blank" className={clStack}>
						<ReactIcon />
						<span className={Class(g.fwe700, g.mt1)}>REACT.JS</span>
					</a>
					<a href="https://nextjs.org/" target="_blank" className={clStack}>
						<NextJS />
						<span className={Class(g.fwe700, g.mt1)}>NEXT.JS</span>
					</a>
					<a href="https://nodejs.org/fr/" target="_blank" className={clStack}>
						<NodeJS />
						<span className={Class(g.fwe700, g.mt1)}>NODE.JS</span>
					</a>
					<a href="https://adonisjs.com/" target="_blank" className={clStack}>
						<AdonisJS />
						<span className={Class(g.fwe700, g.mt1)}>ADONIS.JS</span>
					</a>
				</div>
			</Container>
		</section>
	)
}

export default Intro