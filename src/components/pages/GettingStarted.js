/**
 * Created by timur on 2/11/17.
 */

import React from 'react'
import Code from '../Code'
import Arrow from '../Arrow'

const GettingStarted = () => (
  <div>
    <main>
      <h1>Prerequisite</h1>

      <div className="row">
        <div className="col-sm-6">
          <section>
            Load
            {' '}
            <a href="http://getbootstrap.com/getting-started/" target="_blank">Bootstrap</a>
            {' '}
            in your <code>index.html</code>
          </section>
        </div>

        <div className="col-sm-6">
          <section>
            Bootstrap's JavaScript require's
            {' '}
            <a href="https://developers.google.com/speed/libraries/#jquery" target="_blank">JQuery</a>
          </section>
        </div>
      </div>
    </main>

    <main>
      <div className="row">
        <div className="col-sm-6">
          <h1>Install</h1>

          <section>Install with npm</section>
        </div>

        <div className="col-sm-6">
          <Code language="bash">
            {'npm install --save bootstrap-components'}
          </Code>
        </div>
      </div>
    </main>

    <main>
      <h1>Import</h1>

      <div className="row">
        <div className="col-sm-6">
          <section>
            Either import multiple components in one statement
          </section>
        </div>

        <div className="col-sm-6">

          <Code language="javascript">
            {`import {
  Icon,
  Button,
  Container
} from 'bootstrap-components'`}
          </Code>
        </div>
      </div>
    </main>

    <main>
      <div className="row">
        <div className="col-sm-6">
          <section>
            Or import components individually
          </section>
        </div>

        <div className="col-sm-6">
          <Code language="javascript">
            {`import Icon from 'bootstrap-components/Icon'
import Button from 'bootstrap-components/Button'
import Container from 'bootstrap-components/Container'`}
          </Code>
        </div>
      </div>
    </main>

    <Arrow direction='right'>icons</Arrow>
  </div>
)

export default GettingStarted
