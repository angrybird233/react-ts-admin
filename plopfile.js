import viewGenerator from './plop-templates/create-view.js'
import componentGenerator from './plop-templates/create-component.js'



export default (plop) => {
  plop.setGenerator('view', viewGenerator)
  plop.setGenerator('component', componentGenerator)
}