import angular from 'angular';
import component from './feed.component';
import routing from './feed.route';
import service from './feed.service';

angular
    .module('feed', [])
    .component('feed', component)
    .factory('feedService', service)    
    .config(routing);
    

