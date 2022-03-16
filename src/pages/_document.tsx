import Document, { Html, Main, Head, NextScript } from 'next/document'

// noinspection HtmlRequiredTitleElement
class HTML extends Document {
	render() {
		return (
			<Html lang="fr">
				<Head>
					<script type="text/javascript" src="/static/js/noFlash.js" />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}

export default HTML