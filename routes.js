const routes=require('next-routes')();
routes.add('/projects/new','/projects/new')
routes.add('/projects/:address','/projects/show')
routes.add('/projects/:address/requests','/projects/requests/index')
routes.add('/projects/:address/requests/new','/projects/requests/new')


module.exports=routes;