import {createRouter, createWebHistory} from 'vue-router'
import ListComponent from '@/components/ListComponent'
import FillComponent from '@/components/FillComponent'
import DataComponent from '@/components/DataComponent'
import EditComponent from '@/components/EditComponent'
import DatepickerComponent from '@/components/DatepickerComponent'

const routes = [
    {
        path: '/',
        name: 'ListComponent',
        component: ListComponent,
    },
    {
        path: '/fill/:id',
        name: 'FillComponent',
        component: FillComponent,
    },
    {
        path: '/data/:id',
        name: 'DataComponent',
        component: DataComponent,
    },
    {
        path: '/edit/:id',
        name: 'EditComponent',
        component: EditComponent,
    },
    {
        path: '/datepicker',
        name: 'DatepickerComponent',
        component: DatepickerComponent,
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
