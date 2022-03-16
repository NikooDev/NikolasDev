import React from 'react'
import Ititle from '@Types/title'
import g from '@Assets/modules/global.module.scss'
import t from '@Assets/modules/theme.module.scss'
import Class from 'classnames'

const Title: React.FC<Ititle> = ({ light, children }) => {
	return <h2 className={Class(g.mb6, g.taCenter, t.fontMontserrat, t.title, light ? t.lightTitle : t.colorTitle)}>{ children }</h2>
}

export default Title