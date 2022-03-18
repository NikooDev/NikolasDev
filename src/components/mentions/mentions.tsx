import React from 'react'
import g from '@Assets/modules/global.module.scss'
import t from '@Assets/modules/theme.module.scss'
import m from './mentions.module.scss'
import Link from 'next/link'
import Class from 'classnames'
import Container from '@Components/layouts/container'
import LeftIcon from '@Icons/arrow'

const Mentions = () => {
	return (
		<section className={Class(g.dFlex, m.legal)}>
			<Container>
				<div className={Class(g.dFlex, g.aiCenter)}>
					<Link href="/" passHref>
						<a href="/" className={Class(g.dFlex, g.mr2, m.legal__back)}>
							<LeftIcon />
						</a>
					</Link>
					<h1 className={Class(g.fwe900, m.legal__title)}>Mentions légales</h1>
				</div>
				<div className={Class(g.brtl15, g.brtr15, g.brbl15, g.brbr15, g.mt2, g.mb5, t.transition, m.legal__card)}>

				</div>
			</Container>
		</section>
	)
}

export default Mentions