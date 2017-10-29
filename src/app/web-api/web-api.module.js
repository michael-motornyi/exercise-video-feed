import angular from 'angular';
import service from './web-api.service';

angular
    .module('webApi', [])
    .factory('webApi', service);
