import { createApp } from 'vue'
import App from './App.vue'
import Main from '@/pages/main-page'
import MaleTime from '@/pages/male-time'
import FemaleTime from '@/pages/female-time'
import FamilyNumber from '@/pages/family-number'
import Kitchen from '@/pages/kitchen-page'
import Services from '@/pages/services-page'
import Dop from '@/pages/dop-page'
import Contacts from '@/pages/contacts-page'
import Vacancies from '@/pages/vacancies-page'
import Rules from '@/pages/rules-page'
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

library.add(faChevronLeft, faChevronRight);
import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter ({
    scrollBehavior (to){
        if (to.hash) {
            return {
              el: to.hash,
              behavior: 'smooth',
            }
          }
    },
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Main,
            name: 'Main'
        },
        {
            path: '/male-time',
            component: MaleTime
        },
        {
            path: '/female-time',
            component: FemaleTime
        },
        {
            path: '/family-number',
            component: FamilyNumber,
            name: 'Family'
        },
        {
            path: '/kitchen-page',
            component: Kitchen,
            name: 'Kitchen'
        },
        {
            path: '/services-page',
            component: Services,
            name: 'Services'
        },
        {
            path: '/dop-page',
            component: Dop,
            name: 'Dop'
        },
        {
            path: '/contacts-page',
            component: Contacts,
            name: 'Contacts'
        },
        {
            path: '/vacancies-page',
            component: Vacancies,
            name: 'Vacancies'
        },
        {
            path: '/rules-page',
            component: Rules,
            name: 'Rules'
        }
    ],
    history: createWebHistory()
})

const app = createApp(App)

app
    .use(router)
    .mount('#app')
