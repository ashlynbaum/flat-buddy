const React = require('react')
const { Route, IndexRoute } = require('react-router')
const bulk = require('bulk-require')
const { mapObjIndexed, values } = require('ramda')

const LayoutContainer = require('app/layout/container')
const FourOhFourContainer = require('app/four-oh-four/container')

function createRoutes (store) {
  return (
    <Route path='/' component={LayoutContainer}>
      { 
        values(mapObjIndexed(
          (module, moduleName) => ({
            ...module.routes(store),
            key: moduleName
          }),
          bulk(__dirname, '*/routes.js')
        ))
      }
      <Route path="*" component={FourOhFourContainer} />
    </Route>
  )
}

module.exports = createRoutes