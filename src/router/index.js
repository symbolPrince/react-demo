import Home from '../page/Home'
import New from '../page/New'
import Phone from '../page/Phone'
import Homea from '../demo/home/homea'
import Homeb from '../demo/home/homeb'

let router =[
  {
    path:'/home',
    componentName:Home,
    exact:true
  },
  {
    path:'/New',
    componentName:New
  },
  {
    path:'/phone',
    componentName:Phone,
    routes:[
      {
        path:'/phone/homea',
        componentName:Homea
      },
      {
        path:'/phone/homeb',
        componentName:Homeb
      }
    ]
  }
]

export default router

