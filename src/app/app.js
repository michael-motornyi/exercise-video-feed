import angular from 'angular';
import uirouter from 'angular-ui-router';
import webApi from './web-api/web-api.module'
import videoPlayer from './video-player/video-player.component';
import feed from './feed/feed.module';
import './main.scss';

const MODULE_NAME = 'pbVideoFeed';

angular
    .module(MODULE_NAME, [uirouter, 'webApi', 'feed'])
    .component('videoPlayer', videoPlayer);

export default MODULE_NAME;