import styles from './Navbar.module.css'
import React from 'react'
import { Link } from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext';

function Navbar() {
  const {logout} = useLogout();
  const {user} = useAuthContext();
  return (
    <nav className={styles.navbar}>
        <ul>
            <li className={styles.title}> 
              MyExpenses
            </li>
            {!user && 
            <>
            
            <li className={styles.signup}>
               <Link to='/signup'> Sign Up </Link>
            </li>
            <li className={styles.login}>
                <Link to='/login'>Log In</Link>
            </li>
            
            </>}
            {user && 
            <>
            <li>Hello, <strong>{user.displayName}</strong>  </li>
              <li>
              <button className='btn' onClick={logout}>Logout</button>
            </li>
            
            </>
            }

        </ul>

    </nav>
  )
}

export default Navbar