import Router from 'miox-router';

import HomePage from '../webviews/home/index.vue';
import TestPage from '../webviews/home/test.vue';

const route = new Router();

route.patch('/', async ctx => await ctx.render(HomePage));
route.patch('/test', async ctx => await ctx.render(TestPage));

export default route;