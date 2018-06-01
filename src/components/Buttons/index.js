import React from 'react'
import cx from '../../utils/cx'
import s from './index.css'

export default ({ onClick, className, children, ...props }) => <button onClick={onClick} className={cx({
  [s.button]: true,
})}>{ children }</button>
