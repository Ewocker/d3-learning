import Vue from 'vue'
import Router from 'vue-router'
import Store from '@/store'
import {
  Dashboard,
  Notification,
  MeshNetwork,
  // Loading,
  Settings
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
    icon: '',
    image: 'mesh.png',
    imageActive: 'mesh-active.png',
    showOnBottomNav: true,
    showBottomNav: true
  },
  name: 'mesh network',
  path: '/mesh_network',
  component: MeshNetwork
}, {
  meta: {
    icon: 'settings',
    image: '',
    imageActive: '',
    showOnBottomNav: false,
    showBottomNav: true
  },
  name: 'settings',
  path: '/settings',
  component: Settings
}, {
  meta: {
    icon: 'mdi-bell',
    image: '',
    imageActive: '',
    showOnBottomNav: true,
    showBottomNav: true
  },
  name: 'notification',
  path: '/notification',
  component: Notification
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
