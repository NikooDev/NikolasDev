import React from 'react'
import AppPropsWithLayout from '@Types/app'
import { ThemeProvider } from '@Contexts/theme.context'
import Head from 'next/head'
import '@Assets/app.scss'

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
	const getLayout = Component.getLayout ?? ((page) => page)

	// noinspection HtmlRequiredTitleElement
	return (
		<>
			<Head>
				<meta charSet="UTF-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="apple-touch-icon" sizes="180x180" href="/static/ico/apple-touch-icon.png" />
				<link rel="icon" type="image/png" sizes="32x32" href="/static/ico/favicon-32x32.png" />
				<link rel="icon" type="image/png" sizes="16x16" href="/static/ico/favicon-16x16.png" />
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
				<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap"/>
			</Head>
			<ThemeProvider>
				{ getLayout(<Component {...pageProps} />) }
			</ThemeProvider>
			<script dangerouslySetInnerHTML={{ __html: ' ' }} />
		</>
	)
}

export default App