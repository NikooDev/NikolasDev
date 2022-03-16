import React from 'react'
import n from './noscript.module.scss'

const Noscript = () => {
	return (
		<noscript>
			<div className={n.noscript}>
				<strong>Activez JavaScript dans votre navigateur</strong>
				<p>Pour visualiser mon portfolio, il est nécessaire que vous autorisiez l'exécution de JavaScript dans votre navigateur</p>
			</div>
		</noscript>
	)
}

export default Noscript