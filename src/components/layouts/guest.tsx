import React from 'react'
import Ilayout from '@Types/layout'
import Head from 'next/head'
import Noscript from '@Components/noscript'
import Header from '@Components/header'
import Footer from '@Components/footer'

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
	return (
		<>
			<Head>
				<title>{ title }</title>
				<meta name="description" content={description} />
			</Head>
			<Noscript />
			<Header />
			<main role="main">
				{ children }
			</main>
			<Footer />
		</>
	)
}

export default Guest