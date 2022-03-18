import React, { useRef } from 'react'
import g from '@Assets/modules/global.module.scss'
import h from './header.module.scss'
import { useRouter } from 'next/router'
import { Dark, Light } from '@Icons/darkmode'
import { AboutIcon, ContactIcon, SkillsIcon, TrainingIcon } from '@Icons/mobile'
import Class from 'classnames'
import Link from 'next/link'
import Container from '@Components/layouts/container'
import HomeIcon from '@Icons/home'
import useTheme from '@Hooks/useTheme'
import useAnchors from '@Hooks/useAnchors'
import useResponsive from '@Hooks/useResponsive'
import HeaderExtend from '@Components/header/extend'
import LeftIcon from '@Icons/arrow'

const Header = () => {
	const headerRef = useRef<HTMLDivElement>() as React.MutableRefObject<HTMLDivElement>
	const handleTheme = useTheme(headerRef)
	const handleAnchor = useAnchors()
	const isMobile = useResponsive()
	const clFixed = Class(g.pFixed, g.t0, g.l0, g.r0)
	const router = useRouter()

	return (
		<header className={Class(clFixed, g.zi50, h.header)} id="header" role="banner">
			<div className={Class(g.dFlex, g.fdColumn, g.jcCenter, g.pRelative, h.header__inner)} ref={headerRef}>
				<Container>
					<div className={Class(g.dFlex, g.aiCenter, g.jcSpaceBetween)}>
						<Link href="/" passHref>
							<a href="/" data-anchor="intro"
								 onClick={(event) => handleAnchor(event)}
								 className={Class(g.dFlex, g.aiCenter, h.header__item__link__hidden_md, h.header__logo)} aria-label="logo" role="link">
								{ router.pathname === '/legal' ? <LeftIcon /> : <img src="/static/logo.svg" height="35" width="51.48" alt="logo" /> }
							</a>
						</Link>
						<ul className={Class(g.dFlex, g.aiCenter, g.pRelative, h.header__items)}>
							<li className={Class(h.header__item, h.header__item__link__hidden_md)}>
								<Link href="/" passHref>
									<a href="/" data-anchor="intro"
										 onClick={(event) => handleAnchor(event)}
										 className={Class(h.header__item__link, h.header__item__link__hidden)} aria-label="home">
										<HomeIcon />
									</a>
								</Link>
							</li>
							<li className={h.header__item}>
								<Link href="/" passHref>
									<a href="/" data-anchor="about"
										 onClick={(event) => handleAnchor(event)}
										 className={Class(g.dFlex, g.fwe600, g.pRelative, h.header__item__link)}>
										<AboutIcon height="1.8em" width="1.8em" classname={h.header__item__link__svg} />
										<span className={h.header__item__link__hidden_xs}>QUI SUIS-JE ?</span>
									</a>
								</Link>
							</li>
							<li className={h.header__item}>
								<Link href="/" passHref>
									<a href="/" data-anchor="skills"
										 onClick={(event) => handleAnchor(event)}
										 className={Class(g.dFlex, g.fwe600, g.pRelative, h.header__item__link)}>
										<SkillsIcon height="1.8em" width="1.8em" classname={h.header__item__link__svg} />
										<span className={h.header__item__link__hidden_xs}>COMPÉTENCES</span>
									</a>
								</Link>
							</li>
							<li className={h.header__item}>
								<Link href="/" passHref>
									<a href="/" data-anchor="training"
										 onClick={(event) => handleAnchor(event)}
										 className={Class(g.dFlex, g.fwe600, g.pRelative, h.header__item__link)}>
										<TrainingIcon height="1.8em" width="1.8em" classname={h.header__item__link__svg} />
										<span className={h.header__item__link__hidden_xs}>FORMATIONS</span>
									</a>
								</Link>
							</li>
							<li className={h.header__item}>
								<Link href="/" passHref>
									<a href="/" data-anchor="contact"
										 onClick={(event) => handleAnchor(event)}
										 className={Class(g.dFlex, g.fwe600, g.pRelative, h.header__item__link)}>
										<ContactIcon height="1.8em" width="1.8em" classname={h.header__item__link__svg} />
										<span className={h.header__item__link__hidden_xs}>GET IN TOUCH</span>
									</a>
								</Link>
							</li>
							<li className={Class(h.header__item, h.header__item__link__hidden_md)}>
								<button onClick={(event) => handleTheme(event)}
												className={Class(g.dFlex, g.jcCenter, g.pRelative, g.ml1, h.header__darkmode)}
												aria-label="darkmode">
									<Light classname={h.header__darkmode__sun} />
									<Dark classname={h.header__darkmode__moon} />
								</button>
							</li>
						</ul>
					</div>
				</Container>
			</div>
			{ isMobile ? <>
				<HeaderExtend headerRef={headerRef} />
			</> : null }
		</header>
	)
}

export default Header