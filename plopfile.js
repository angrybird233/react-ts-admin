import viewGenerator from './create/create-view'
import componentGenerator from './create/create-component'

export default (plop) => {
  plop.setGenerator('view', viewGenerator)
  plop.setGenerator('component', componentGenerator)
}