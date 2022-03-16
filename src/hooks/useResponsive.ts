import { useCallback, useEffect, useState } from 'react'

const useResponsive = () => {
	const [isMobile, setIsMobile] = useState<boolean>(false)

	const handleMedia = () => window.matchMedia('(max-width: 768px)').matches ? setIsMobile(true) : setIsMobile(false)

	const handleMobile = useCallback(() => {
		handleMedia()
		window.addEventListener('resize', handleMedia)

		return () => {
			window.removeEventListener('resize', handleMedia)
		}
	}, [])

	useEffect(() => handleMobile(), [handleMobile])

	return isMobile

}

export default useResponsive