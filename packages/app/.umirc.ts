import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index', wrappers: ['@/wrappers/auth'] },
    {
      exact: true,
      path: '/login',
      component: '@/pages/login',
    },
  ],
  fastRefresh: {},
});
