import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    {
      exact: true,
      path: '/login',
      component: 'login',
    },
    {
      path: '/',
      component: '@/layouts/index',
      wrappers: ['@/wrappers/auth'],
      routes: [
        { path: '/', exact: true, component: '@/pages/selectCompetition' },
        { path: '/mode', exact: true, component: '@/pages/selectMode' },
      ],
    },
   
  ],
  fastRefresh: {},
});
