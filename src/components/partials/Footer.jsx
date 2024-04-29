import React from 'react'
// import { baseImgUrl } from '../helpers/functions-general'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
      <footer className="footer f-col gap-2.5 p-2">
        <div className="flex flex-wrap gap-x-3.5">
          <small><Link to={'#'}>About</Link></small>
          <small><Link to={'#'}>Press</Link></small>
          <small><Link to={'#'}>Copyright</Link></small>
          <small><Link to={'#'}>Contact</Link> us</small>
          <small><Link to={'#'}>Creators</Link></small>
          <small><Link to={'#'}>Advertise</Link></small>
          <small><Link to={'#'}>Developers</Link></small>
        </div>
        <div className="flex flex-wrap gap-x-[12px] mb-1">
          <small><Link to={'#'}>Terms</Link></small>
          <small><Link to={'#'}>Privacy</Link></small>
          <small><Link to={'#'}>Policy & Safety</Link></small>
          <small><Link to={'#'}>How YouTube works</Link></small>
          <small><Link to={'#'}>Test new features</Link></small>
        </div>
        <small className='copyright'>&copy; 2024 Google LLC</small>
      </footer>
    </>
  )
}

export default Footer