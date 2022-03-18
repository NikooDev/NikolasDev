import React from 'react'
import g from '@Assets/modules/global.module.scss'
import t from '@Assets/modules/theme.module.scss'
import f from './footer.module.scss'
import { Facebook, Github, Linkedin } from '@Icons/social'
import Link from 'next/link'
import Container from '@Components/layouts/container'
import Class from 'classnames'

const Footer = () => {
	return (
		<>
			<section className={Class(g.dFlex, f.footer)} role="contentinfo">
				<Container>
					<div className={Class(g.dFlex, g.aiCenter, g.fdColumn, g.jcSpaceBetween, g.pt2, g.pl4, g.pb2, g.pr4, f.footer__container)}>
						<div className={Class(g.dFlex, g.aiCenter, g.jcCenter, f.footer__social)}>
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
						<ul className={Class(g.dFlex, g.aiCenter, g.jcSpaceBetween, g.fwe500, f.footer__list)}>
							<li className={Class(g.dFlex, g.aiCenter)}>
								<img src="/static/logo.svg" height="35" width="51.48" alt="logo" className={Class(g.mr2, f.footer__logo)} />
								<span className={t.fontMontserrat}>NikolasDev © { new Date().getFullYear() }</span>
							</li>
							<li><Link href="/legal" passHref><a href="/legal" className={t.fontMontserrat}>Mentions légales</a></Link></li>
						</ul>
					</div>
				</Container>
			</section>
		</>
	)
}

export default Footer

/*
<ModalLegal open={open} close={close}>
				<div className={Class(g.pFixed, g.t0, g.l0, g.zi100, f.footer__modal)}>
					<div className={Class(g.dFlex, g.aiCenter, g.jcCenter, f.footer__modal__dialog)}>
						<div ref={modalRef} className={Class(g.pt3, g.pl4, g.pb4, g.pr4, t.fontMontserrat, f.footer__modal__content, open ? f.footer__modal__in : null, close ? f.footer__modal__out : null)}>
							<div className={Class(g.dFlex, g.aiCenter, g.jcSpaceBetween, f.footer__modal__header)}>
								<h2>Mentions légales</h2>
								<a href="#" className={g.dFlex} onClick={(event) => handleModalClose(event)} aria-label="legal">
									<Close height={35} width={35} fill="currentColor" />
								</a>
							</div>
							<div className={Class(g.dFlex, g.fdColumn, g.mt4, f.footer__modal__body)}>
								<h3>1. Editeur</h3>

								<h3 className={g.mt2}>2. Hébergement</h3>

								<h3 className={g.mt2}>2. Propriété Intellectuelle</h3>

								<h3 className={g.mt2}>3. Cookies</h3>

								<h3 className={g.mt2}>4. Données Personnelles</h3>
							</div>
						</div>
					</div>
				</div>
			</ModalLegal>
 */