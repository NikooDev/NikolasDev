import React from 'react'
import g from '@Assets/modules/global.module.scss'
import Container from '@Components/layouts/container'
import Title from '@Components/layouts/title'
import Class from 'classnames'

const Training = () => {
	return (
		<section className={Class(g.pt6, g.mb10)} style={{minHeight: '35rem'}} id="training">
			<Container>
				<Title>FORMATIONS</Title>
				<p className={Class(g.fwe600, g.taCenter)}>EN COURS DE DÉVELOPPEMENT</p>
			</Container>
		</section>
	)
}

export default Training