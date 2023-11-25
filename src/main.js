import { createApp } from 'vue'
import App from './App.vue'
import Main from '@/pages/main-page'
import MaleTime from '@/pages/male-time'
import FemaleTime from '@/pages/female-time'
import FamilyNumber from '@/pages/family-number'
import Kitchen from '@/pages/kitchen-page'
import AdditionalServices from '@/pages/additional-services'
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
    routes: [
        {
            path: '/',
            component: Main
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
            component: FamilyNumber
        },
        {
            path: '/kitchen-page',
            component: Kitchen
        },
        {
            path: '/additional-services',
            component: AdditionalServices
        },
        {
            path: '/contacts-page',
            component: Contacts
        },
        {
            path: '/vacancies-page',
            component: Vacancies
        },
        {
            path: '/rules-page',
            component: Rules
        }
    ],
    history: createWebHistory()
})

const app = createApp(App)

app
    .use(router)
    .mount('#app')
