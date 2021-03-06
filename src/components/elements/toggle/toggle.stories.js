import React from 'react'

import { storiesOf } from '@storybook/react'
import Toggle from './toggle'
storiesOf('Elements | Toggle', module)
  .add('active', () => <Toggle active={true} />)
  .add('inactive', () => <Toggle active={false} />)
  .add('darkmode', () => <Toggle darkMode={true} />)
