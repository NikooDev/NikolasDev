import React from 'react'
import Guest from '@Components/layouts/guest'
import Mentions from '@Components/mentions'

const Legal = () => {
	return <Mentions />
}

Legal.getLayout = (page: React.ReactElement) => {
	return (
		<Guest title="NikolasDev • Développeur web" description="Nicolas Tual, autodidacte, étudiant et développeur web passionné. Spécialisé en JavaScript Full-Stack : Node.js | Adonis.js | React.js | Next.js...">
			{ page }
		</Guest>
	)
}

export default Legal