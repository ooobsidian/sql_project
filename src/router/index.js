import Vue from 'vue'
import Router from 'vue-router'
import Land from '@/components/land'
import Register from '@/components/register'
import Select from '@/components/courseselect'
import Grade from '@/components/grade'
import Charge from '@/components/charge'
import MyInfo from '@/components/myinfo'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
    path: '/',
    redirect: '/land'
  },
    {
      path: '/land',
      name: 'land',
      component: Land
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/courseselect',
      name: 'courseselect',
      component: Select
    },
    {
      path: '/grade',
      name: 'grade',
      component: Grade
    },
    {
      path: '/charge',
      name: 'charge',
      component: Charge
    },
    {
      path:'/myinfo',
      name:'myinfo',
      component:MyInfo
    }
  ]
})
