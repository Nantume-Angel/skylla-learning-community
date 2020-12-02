/** @jsx jsx */
import {jsx} from '@emotion/core'

import {Link} from '@reach/router'
import ListItemList from './components/order-item-list'

function YourModules() {
  return (
    <ListItemList
      noListItems={
        <p>
          Hey there! Welcome to your bookshelf reading list. Get started by
          heading over to <Link to="/cart/discover">the Discover page</Link> to add
          books to your list.
        </p>
      }
    />
  )
}

export default YourModules;
