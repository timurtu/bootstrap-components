/**
 * Created by timur on 2/12/17.
 */

import React from 'react'
import { Link } from 'react-router'
import { Button, Icon } from 'bootstrap-components'
import { titleToPath } from '../utils'

const styles = {
  arrow: {
    textTransform: 'capitalize'
  }
}

export const Arrow = ({ direction, children }) => {

  const icon = direction === 'left' ?
    <div>
      <Icon>{`arrow-${direction}`}</Icon> {children}
    </div> :
    <div>
      {children} <Icon>{`arrow-${direction}`}</Icon>
    </div>

  return (
    <Link
      to={titleToPath(children)}
      className={`pull-${direction}`}
      children={
        <Button style={styles.arrow}>
          {icon}
        </Button>
      }
    />
  )
}
Arrow.propTypes = {
  direction: React.PropTypes.string.isRequired
}

