import React from 'react'
import g from '@Assets/modules/global.module.scss'
import t from '@Assets/modules/theme.module.scss'
import a from './about.module.scss'
import Class from 'classnames'
import Container from '@Components/layouts/container'
import Title from '@Components/layouts/title'
import Quotes from '@Icons/quotes'

const About = () => {
	return (
		<>
			<section className={Class(g.pRelative, g.pt6, g.pb6, a.about)} id="about">
				<Container>
					<Title light>QUI SUIS-JE ?</Title>
					<div className={Class(g.dFlex, g.aiCenter, g.jcCenter, a.about__tablet)}>
						<img src="/static/avatar.jpg" height={200} width={200} className={Class(g.mr6, g.brtl50p, g.brtr50p,g.brbl50p, g.brbr50p, a.about__avatar)} alt="" />
						<div className={Class(g.fwe500, a.about__aboutme, t.fontMontserrat)}>
							<p className={g.mb2}>Je m'appelle <strong>Nicolas Tual</strong>, j'ai { new Date().getFullYear() - 1990 } ans et je suis actuellement en formation "Développeur web" chez OpenClassrooms.</p>
							<p className={g.mb2}>Mon intérêt et ma passion pour les technologies du web ont commencé en 2005.
								<br />Durant ces années j'ai su me former et développer des compétences en devenant autodidacte.</p>
							<p className={g.mb2}>L'obtention de mon BAC professionnel Système Numérique en 2020 a été un tremplin pour pouvoir accéder à des formations supérieures diplomantes.</p>
							<p>Aujourd'hui, mon objectif est d'obtenir mon titre professionnel de niveau 5 pour poursuivre mes études en 3<sup>ème</sup> année de Bachelor chez MyDigitalSchool.</p>
						</div>
					</div>
				</Container>
			</section>
			<Container>
				<div className={Class(g.pRelative, g.taCenter, g.brtl15, g.brtr15, g.brbl15, g.brbr15, g.mt10, g.mb10, g.pt5, g.pl5, g.pb5, g.pr5, t.light, a.objective)}>
					<div className={Class(g.pAbsolute, g.t0, g.l0, t.light)}>
						<Quotes height={40} width={40} classname={Class(a.quotes)} />
					</div>
					<p className={Class(g.fwe400, t.fontMontserrat)}>Devenir Développeur Web Full-Stack JavaScript est l'un de mes objectifs à long terme en poursuivant mes édudes chez MyDigitalSchool.</p>
				</div>
			</Container>
		</>
	)
}

export default About