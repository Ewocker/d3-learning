import Vue from 'vue'
import Router from 'vue-router'
import Store from '@/store'
import {
  Dashboard,
  SVG,
  D3Select,
  ScaleAndAxes,
  TemplatePage
} from '@/pages'

Vue.use(Router)

export const routeData = [{
  meta: {
    icon: 'apps', // If icon is not empty, use icon instead of image
    image: '',
    imageActive: '',
    showOnBottomNav: true, // Shold show as a option on bottom navigation
    showBottomNav: true // When showing this page, should show bottom navigation
  },
  // If icon is empty, use image
  // image should have two version, one for active
  // ===== For router =====
  name: 'dashboard',
  path: '/',
  component: Dashboard
}, {
  meta: {
    icon: 'settings',
    image: '',
    imageActive: '',
    showOnBottomNav: false,
    showBottomNav: true
  },
  name: 'SVG',
  path: '/svg',
  component: SVG
}, {
  meta: {
    icon: 'settings',
    image: '',
    imageActive: '',
    showOnBottomNav: false,
    showBottomNav: true
  },
  name: 'D3 Select',
  path: '/d3_select',
  component: D3Select
}, {
  meta: {
    icon: 'settings',
    image: '',
    imageActive: '',
    showOnBottomNav: false,
    showBottomNav: true
  },
  name: 'Scale And Axes',
  path: '/scale_and_axes',
  component: ScaleAndAxes
}, {
  meta: {
    icon: 'settings',
    image: '',
    imageActive: '',
    showOnBottomNav: false,
    showBottomNav: true
  },
  name: 'tempate_page',
  path: '/tempate_page',
  component: TemplatePage
}]

const router = new Router({
  routes: routeData
})

router.beforeEach((to, from, next) => {
  // If the target route should show bottom navigation
  Store.commit('app/mutBottomNav', to.meta.showBottomNav)
  next()
})

export default router
