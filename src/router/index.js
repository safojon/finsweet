import { createRouter, createWebHistory } from "vue-router";

import Layout from '@/layout/layout.vue'
import Home from "@/views/Home.vue";
import Service from "@/views/Service.vue";
import Company from "@/views/Company.vue";
import Career from "@/views/Career.vue";
import Blog from "@/views/Blog.vue";
import Contact from "@/views/Contact.vue";

const routes = [
    {
        path: "/",
        component: Layout,
        children: [
            {
                path: "",
                name: "Home",
                component: Home,
            },
            {
                path: "service",
                name: "service",
                component: Service,
            },
            {
                path: "company",
                name: "company",
                component: Company,
            },
            {
                path: "career",
                name: "career",
                component: Career,
            },
            {
                path: "blog",
                name: "blog",
                component: Blog,
            },
            {
                path: "contact",
                name: "contact",
                component: Contact,
            },
        ],
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        } else {
            return { top: 0 };
        }
    },
});

export default router






