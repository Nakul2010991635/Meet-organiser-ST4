import { Link } from 'react-router-dom'
import classes from './MainNavigation.module.css'

function MainNavigation(){
  return(
    <header className={classes.header}>
      <h1 className={classes.logo}>Meet Organiser</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/favorite-meetups">About</Link>
          </li>
          <li>
            <Link to="new-meetups">Add</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default MainNavigation;