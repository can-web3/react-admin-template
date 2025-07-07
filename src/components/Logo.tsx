import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'

export default function Logo() {
  return (
    <Link to='/'>
      <img src={logo} className='mx-auto mb-6' alt="" />
    </Link>
  )
}
