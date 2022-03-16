import React from 'react'
import g from '@Assets/modules/global.module.scss'
import Container from '@Components/layouts/container'
import Title from '@Components/layouts/title'
import Class from 'classnames'

const Contact = () => {
	return (
		<section className={Class(g.pt6, g.mb10)} style={{minHeight: '20rem'}} id="contact">
			<Container>
				<Title>CONTACT</Title>
				<p className={Class(g.fwe600, g.taCenter)}>EN COURS DE DÉVELOPPEMENT</p>
			</Container>
		</section>
	)
}

export default Contact