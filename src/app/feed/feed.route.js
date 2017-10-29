class FeerRoutes {
    constructor ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.when('', '/feed');
        $urlRouterProvider.when('/', '/feed');
        $stateProvider
            .state('feed', {
                url: '/feed',
                component: 'feed'
            })
    }
}
  
export default FeerRoutes;
  