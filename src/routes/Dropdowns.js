/**
 * Created by timur on 2/12/17.
 */

import React from 'react'
import { Arrow, Snippet } from '../components'
import Dropdown from 'bootstrap-components/Dropdown'

const Dropdowns = () => (
  <div>

    <Snippet
      splitTheGrid
      overrideCode={'import Dropdown from \'bootstrap-components/Dropdown\''}
      language="javascript"
    />

    <Snippet>
      <Dropdown title='Dropdown'>
        <div>Action</div>
        <div>Another Action</div>
        <div>Something else here</div>
        <hr/>
        <div>Separated link</div>
        <div to="/start">
          Start page
        </div>
      </Dropdown>
    </Snippet>

    <Snippet title="Dropup">
      <Dropdown title='Dropup' dropup>
        <div>Action</div>
        <div>Another Action</div>
        <div>Something else here</div>
        <hr/>
        <div href="/icons">
          Icons page
        </div>
      </Dropdown>
    </Snippet>

    <Snippet
      title="Alignment"

      overrideCode={(
        <Dropdown right>
          <div>{'...'}</div>
        </Dropdown>
      )}

      clearfix
    >
        <Dropdown
          title="Dropdown"
          right
        >
          <div>Action</div>
          <div>Another Action</div>
          <div>Something else here</div>
          <hr/>
          <div>Separated link</div>
        </Dropdown>
    </Snippet>

    <Snippet
      title="Headers"
      overrideCode={(
        <Dropdown title="Dropdown">
          {'...'}
          <header>Dropdown header</header>
          {'...'}
        </Dropdown>
      )}
    >
      <Dropdown title="Dropdown">
        <header>Dropdown header</header>
        <div>Action</div>
        <div>Another Action</div>
        <div>Something else here</div>
        <header>Dropdown header</header>
        <div>Separated link</div>
      </Dropdown>
    </Snippet>

    <Snippet
      title="Dividers"
      overrideCode={(
        <Dropdown>
          {'...'}
          <hr/>
          {'...'}
        </Dropdown>
      )}
    >
      <Dropdown title="Dropdown">
        <div>Action</div>
        <div>Another Action</div>
        <div>Something else here</div>
        <hr/>
        <div>Separated link</div>
      </Dropdown>
    </Snippet>

    <Snippet title="Disabled">
      <Dropdown title="Dropdown">
        <div>Regular link</div>
        <div disabled>Disabled link</div>
        <div>Another link</div>
      </Dropdown>
    </Snippet>

    <Arrow direction='left'>icons</Arrow>
    <Arrow direction='right'>button groups</Arrow>
  </div>
)

export default Dropdowns
