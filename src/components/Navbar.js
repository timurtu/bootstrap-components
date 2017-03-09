/**
 * Created by timur on 2/12/17.
 */

import React from 'react'
import { Link } from 'react-router'
import { Container } from 'bootstrap-components'
import logo from '../../res/react-bootstrap.svg'
import { hideNav } from '../tools/utils'

const styles = {
  tab: {
    textTransform: 'capitalize'
  },
  nav: {
    margin: '0'
  },
  logo: {
    container: {
      margin: '-.4em 0'
    },
    image: {
      height: '2em'
    }
  }
}

const Tab = (props, { router }) => {
  const to = `/${props.children.split(' ').join('-')}`
  const isActive = router.isActive(to, props.params)
  const className = isActive ? 'active' : ''
  const link = (
    <Link to={to} {...props}/>
  )

  return (
    <li
      style={styles.tab}
      className={className}
      onClick={hideNav}
    >
      {link}
    </li>
  )
}
Tab.contextTypes = {
  router: React.PropTypes.object
}


export const Navbar = () => (
  <div
    className="navbar navbar-default"
    style={styles.nav}
  >
    <Container>
      <div className="navbar-header">
        <button
          className="navbar-toggle collapsed"
          data-toggle="collapse"
          data-target="#nav-collapse"
          aria-expanded="false"
        >
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar"/>
          <span className="icon-bar"/>
          <span className="icon-bar"/>
        </button>

        <Link
          className="navbar-brand"
          style={styles.logo.container}
          to="/getting-started"
          onClick={hideNav}
          children={
            <img
              src={logo}
              style={styles.logo.image}
              alt="React Bootstrap Components Logo"
            />
          }
        />
      </div>

      <div className="collapse navbar-collapse" id="nav-collapse">
        <ul className="nav navbar-nav">
          <Tab>getting started</Tab>
        </ul>

        <ul className="nav navbar-nav navbar-right">
          {['icons', 'dropdowns'].map((title, i) =>
            <Tab key={i}>{title}</Tab>
          )}
        </ul>
      </div>
    </Container>
  </div>
)
