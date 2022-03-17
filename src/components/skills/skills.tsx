import React from 'react'
import g from '@Assets/modules/global.module.scss'
import t from '@Assets/modules/theme.module.scss'
import s from './skills.module.scss'
import Title from '@Components/layouts/title'
import Container from '@Components/layouts/container'
import Class from 'classnames'
import { SocketIO } from '@Icons/stack'

const Skills = () => {
	return (
		<section className={Class(g.pt6, g.mb10, s.skills)} id="skills">
			<Container>
				<Title>COMPÉTENCES</Title>
				<div className={Class(g.dFlex, g.mb5)}>
					<div className={s.skills__5of12}>
						<h2 className={Class(g.mb6, g.fwe600, g.taCenter, t.fontMontserrat, s.skills__title)}>Intégration</h2>
						<div className={Class(g.dFlex, g.pb5)}>
							<div className={Class(g.dInherit, g.fdColumn, g.aiCenter, s.skills__6of12)}>
								<img src="/static/skills/html.svg" className={Class(g.brtl15, g.brtr15, g.brbl15, g.brbr15, t.light, s.skills__img, s.width, s.height)} height={80} width={80} alt="" />
								<h3 className={g.mt1}>HTML5</h3>
							</div>
							<div className={Class(g.dInherit, g.fdColumn, g.aiCenter, s.skills__6of12)}>
								<img src="/static/skills/css.svg" className={Class(g.brtl15, g.brtr15, g.brbl15, g.brbr15, t.light, s.skills__img, s.width, s.height)} height={80} width={80} alt="" />
								<h3 className={g.mt1}>CSS3</h3>
							</div>
						</div>
					</div>
					<div className={s.skills__2of12}>
						<div className={Class(g.dFlex, g.aiCenter, g.jcCenter, g.brtl30, g.brtr30, g.brbl30, g.brbr30, g.pt1, g.pl1, g.pr1, g.pb1, t.mxAuto, s.skills__point)}>
							<div className={Class(g.brtl30, g.brtr30, g.brbl30, g.brbr30)} />
						</div>
						<div className={Class(t.mxAuto, s.skills__divider, s.right, s.h100)} />
					</div>
					<div className={s.skills__5of12}>
						<h2 className={Class(g.mb6, g.fwe600, g.taCenter, t.fontMontserrat, s.skills__title)}>Back-End</h2>
						<div className={Class(g.dFlex, g.mb5, s.skills__line)}>
							<div className={Class(g.dInherit, g.fdColumn, g.aiCenter, g.mb3, s.skills__6of12)}>
								<img src="/static/skills/nodejs.svg" className={Class(g.brtl15, g.brtr15, g.brbl15, g.brbr15, t.light, s.skills__img, s.width, s.height)} height={80} width={80} alt="" />
								<h3 className={g.mt1}>NODE.JS</h3>
							</div>
							<div className={Class(g.dInherit, g.fdColumn, g.aiCenter, g.mb3, s.skills__6of12)}>
								<div className={Class(g.dFlex, g.jcCenter, g.brtl15, g.brtr15, g.brbl15, g.brbr15, t.light, s.skills__img, s.width, s.height)}>
									<SocketIO />
								</div>
								<h3 className={g.mt1}>SOCKET.IO</h3>
							</div>
							<div className={Class(g.dInherit, g.fdColumn, g.aiCenter, s.skills__6of12)}>
								<img src="/static/skills/adonisjs.svg" className={Class(g.brtl15, g.brtr15, g.brbl15, g.brbr15, t.light, s.skills__img, s.width, s.height)} height={80} width={80} alt="" />
								<h3 className={g.mt1}>ADONIS.JS</h3>
							</div>
						</div>
					</div>
				</div>
				<hr className={Class(t.mxAuto, s.skills__7of12, s.skills__divider, s.top, s.h100)} />
				<div className={Class(g.dFlex)}>
					<div className={s.skills__5of12}>
						<div className={Class(s.mtm1, s.h9)}>
							<div className={Class(g.dFlex, g.aiCenter, g.jcCenter, g.pRelative, g.brtl30, g.brtr30, g.brbl30, g.brbr30, g.pt1, g.pl1, g.pr1, g.pb1, t.mxAuto, s.skills__point)}>
								<div className={Class(g.brtl30, g.brtr30, g.brbl30, g.brbr30)} />
							</div>
							<div className={Class(t.mxAuto, s.skills__divider, s.right, s.h100, s.mtm4, s.lg)} />
						</div>
						<h2 className={Class(g.mb6, g.fwe600, g.taCenter, t.fontMontserrat, s.skills__title, s.mtm1)}>Front-End</h2>
						<div className={Class(g.dFlex, g.mb5, s.skills__line)}>
							<div className={Class(g.dInherit, g.fdColumn, g.aiCenter, g.mb3, s.skills__6of12)}>
								<img src="/static/skills/js.svg" className={Class(g.brtl15, g.brtr15, g.brbl15, g.brbr15, t.light, s.skills__img, s.width, s.height)} height={80} width={80} alt="" />
								<h3 className={g.mt1}>JAVASCRIPT</h3>
							</div>
							<div className={Class(g.dInherit, g.fdColumn, g.aiCenter, g.mb3, s.skills__6of12)}>
								<img src="/static/skills/react.svg" className={Class(g.brtl15, g.brtr15, g.brbl15, g.brbr15, t.light, s.skills__img, s.width, s.height)} height={80} width={80} alt="" />
								<h3 className={g.mt1}>REACT.JS</h3>
							</div>
							<div className={Class(g.pRelative, g.dInherit, g.fdColumn, g.aiCenter, s.skills__6of12)}>
								<img src="/static/skills/redux.svg" className={Class(g.brtl15, g.brtr15, g.brbl15, g.brbr15, t.light, s.skills__img, s.width, s.height)} height={80} width={80} alt="" />
								<h3 className={Class(g.mt1, g.taCenter)}>REDUX</h3>
							</div>
						</div>
					</div>
					<div className={Class(s.skills__2of12, s.mtm1)}>
						<div className={Class(g.dFlex, g.aiCenter, g.jcCenter, g.pRelative, g.brtl30, g.brtr30, g.brbl30, g.brbr30, g.pt1, g.pl1, g.pr1, g.pb1, t.mxAuto, s.skills__point)}>
							<div className={Class(g.brtl30, g.brtr30, g.brbl30, g.brbr30)} />
						</div>
						<div className={Class(t.mxAuto, s.skills__divider, s.right, s.h100)} />
					</div>
					<div className={s.skills__5of12}>
						<div className={Class(s.mtm1, s.h9)}>
							<div className={Class(g.dFlex, g.aiCenter, g.jcCenter, g.pRelative, g.brtl30, g.brtr30, g.brbl30, g.brbr30, g.pt1, g.pl1, g.pr1, g.pb1, t.mxAuto, s.skills__point)}>
								<div className={Class(g.brtl30, g.brtr30, g.brbl30, g.brbr30)} />
							</div>
							<div className={Class(t.mxAuto, s.skills__divider, s.right, s.h100, s.mtm4)} />
						</div>
						<h2 className={Class(g.mb6, g.fwe600, g.taCenter, t.fontMontserrat, s.skills__title, s.mtm1)}>Databases</h2>
						<div className={Class(g.dFlex, g.mb5)}>
							<div className={Class(g.dInherit, g.fdColumn, g.aiCenter, s.skills__6of12)}>
								<img src="/static/skills/mysql.svg" className={Class(g.brtl15, g.brtr15, g.brbl15, g.brbr15, t.light, s.skills__img, s.width, s.height)} height={80} width={80} alt="" />
								<h3 className={g.mt1}>MYSQL</h3>
							</div>
							<div className={Class(g.dInherit, g.fdColumn, g.aiCenter, s.skills__6of12)}>
								<img src="/static/skills/mongodb.svg" className={Class(g.brtl15, g.brtr15, g.brbl15, g.brbr15, t.light, s.skills__img, s.width, s.height)} height={80} width={80} alt="" />
								<h3 className={g.mt1}>MONGODB</h3>
							</div>
						</div>
					</div>
				</div>
				<div className={Class(g.mb8, s.h3)}>
					<div className={Class(g.dFlex, g.aiCenter, g.jcCenter, g.pRelative, g.brtl30, g.brtr30, g.brbl30, g.brbr30, g.pt1, g.pl1, g.pr1, g.pb1, t.mxAuto, s.skills__point)}>
						<div className={Class(g.brtl30, g.brtr30, g.brbl30, g.brbr30)} />
					</div>
					<div className={Class(t.mxAuto, s.skills__divider, s.right, s.h100)} />
				</div>
				<div className={Class(g.dFlex, g.mb2)}>
					<div className={Class(s.skills__9of12, t.mxAuto)}>
						<h2 className={Class(g.mb6, g.fwe600, g.taCenter, t.fontMontserrat, s.skills__title, s.mtm1)}>Outils & langages divers</h2>
						<div className={Class(g.dFlex, g.jcSpaceBetween, s.skills__line)}>
							<div className={Class(g.dInherit, g.fdColumn, g.aiCenter, g.mb3, s.skills__6of12, s.skills__33)}>
								<img src="/static/skills/typescript.svg" className={Class(g.brtl15, g.brtr15, g.brbl15, g.brbr15, t.light, s.skills__img, s.width, s.height)} height={80} width={80} alt="" />
								<h3 className={g.mt1}>TYPESCRIPT</h3>
							</div>
							<div className={Class(g.dInherit, g.fdColumn, g.aiCenter, g.mb3, s.skills__6of12, s.skills__33)}>
								<img src="/static/skills/sass.svg" className={Class(g.brtl15, g.brtr15, g.brbl15, g.brbr15, t.light, s.skills__img, s.width, s.height)} height={80} width={80} alt="" />
								<h3 className={g.mt1}>SASS</h3>
							</div>
							<div className={Class(g.dInherit, g.fdColumn, g.aiCenter, g.mb3, s.skills__6of12, s.skills__33)}>
								<img src="/static/skills/webstorm.svg" className={Class(g.brtl15, g.brtr15, g.brbl15, g.brbr15, t.light, s.skills__img, s.width, s.height)} height={80} width={80} alt="" />
								<h3 className={g.mt1}>WEBSTORM</h3>
							</div>
							<div className={Class(g.dInherit, g.fdColumn, g.aiCenter, s.skills__6of12, s.skills__33)}>
								<img src="/static/skills/debian.svg" className={Class(g.brtl15, g.brtr15, g.brbl15, g.brbr15, t.light, s.skills__img, s.width, s.height)} height={80} width={80} alt="" />
								<h3 className={g.mt1}>DEBIAN</h3>
							</div>
							<div className={Class(g.dInherit, g.fdColumn, g.aiCenter, s.skills__6of12, s.skills__33)}>
								<img src="/static/skills/nginx.svg" className={Class(g.brtl15, g.brtr15, g.brbl15, g.brbr15, t.light, s.skills__img, s.width, s.height)} height={80} width={80} alt="" />
								<h3 className={g.mt1}>NGINX</h3>
							</div>
						</div>
					</div>
				</div>
			</Container>
		</section>
	)
}

export default Skills