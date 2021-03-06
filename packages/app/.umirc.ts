import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  qiankun: {
    master: {
      apps: [{
        name: 'vue3',
        entry:'//localhost:3000'
      }]
    },
  },
  routes: [
    {
      exact: true,
      path: '/login',
      component: 'login',
    },
    {exact: true, path: '/vue3', microApp: 'vue3' },
    {
      path: '/',
      component: '@/layouts/index',
      wrappers: ['@/wrappers/auth'],
      routes: [
        { path: '/', exact: true, component: '@/pages/selectCompetition' },
        { path: '/mode', exact: true, component: '@/pages/selectMode' },
        {
          path: '/validation',
          exact: true,
          component: '@/pages/validationBefore',
        },
        {
          path: '/examination',
          component: '@/layouts/examination',
          routes: [
            {
              path: '/examination/library',
              exact: true,
              component: '@/pages/examinationLib',
            },
          ],
        },
      ],
    },
    
  ],
  fastRefresh: {},
});
