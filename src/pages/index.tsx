import React from 'react'
import Guest from '@Components/layouts/guest'
import Intro from '@Components/intro'
import About from '@Components/about'
import Skills from '@Components/skills'
import Training from '@Components/training'
import Contact from '@Components/contact'

const Home = () => {
	return (
		<>
			<Intro />
			<About />
			<Skills />
			<Training />
			<Contact />
		</>
	)
}

Home.getLayout = (page: React.ReactElement) => {
	return (
		<Guest title="NikolasDev • Développeur web" description="Nicolas Tual, autodidacte, étudiant et développeur web passionné. Spécialisé en JavaScript Full-Stack : Node.js | Adonis.js | React.js | Next.js...">
			{ page }
		</Guest>
	)
}

export default Home