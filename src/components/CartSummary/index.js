import React from 'react'

import {Button, Segment, Divider} from 'semantic-ui-react'

// eslint-disable-next-line no-unused-vars
export default ({handleCheckout}) => (
  <div>
    <Divider />
    <Segment clearing size="large">
      <span>
        <strong>Sub total:</strong>
      </span>

      <Button color="black" floated="right">
        Check out
      </Button>
    </Segment>
  </div>
)
