// noinspection UnnecessaryLocalVariableJS

import React from 'react'
import animateScrollTo from 'animated-scroll-to'
import useResponsive from '@Hooks/useResponsive'

const useAnchors = () => {
	const isMobile = useResponsive()

	const handleAnchor = (event: React.MouseEvent<HTMLAnchorElement> | React.TouchEvent) => {
		event.preventDefault()
		let target = event.target as HTMLAnchorElement,
			anchor = target.getAttribute('data-anchor') as string,
			element = document.getElementById(anchor) as HTMLDivElement,
			offset: number

		if(anchor === null) {
			let parent = target.parentElement
			if(!parent) return
			if(target.nodeName === 'svg' || target.nodeName === 'SPAN') {
				anchor = parent && parent.getAttribute('data-anchor') as string
				element = document.getElementById(anchor) as HTMLDivElement
			} else if(target.nodeName === 'path') {
				let link = parent.parentElement
				if(!link) return
				anchor = link.getAttribute('data-anchor') as string
				element = document.getElementById(anchor) as HTMLDivElement
			}
		}

		if(isMobile) {
			offset = 0
		} else {
			offset = anchor === 'about' ? 110 : 65
		}

		animateScrollTo(!element ? 0 : element.offsetTop - offset, {
			speed: 800, easing: (t) => { return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1 }
		}).then()
	}

	return handleAnchor
}

export default useAnchors