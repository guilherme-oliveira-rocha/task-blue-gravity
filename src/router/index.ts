import { createRouter, createWebHistory } from 'vue-router'
import ArtView from '@/views/ArtView.vue'
import MusicView from '@/views/MusicView.vue'
import ArtSingle from '@/components/ArtSingle.vue'
import MusicSingle from '@/components/MusicSingle.vue'
import NewSingle from '@/components/NewSingle.vue'
import NewView from '@/views/NewView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/art',
      // name: 'art',
      component: ArtView
    },
    {
      path: '/art/:id',
      // name: 'singleBlog',
      component: ArtSingle
      
    },
    {
      path: '/music',
      // name: 'music',
      component: MusicView
    },
    {
      path: '/music/:id',
      // name: 'singleBlog',
      component: MusicSingle
      
    },
    {
      path: '/new',
      // name: 'blog',
      component: NewView
    },
    {
      path: '/new/:id',
      // name: 'singleBlog',
      component: NewSingle
      
    },
  ]
})

export default router
