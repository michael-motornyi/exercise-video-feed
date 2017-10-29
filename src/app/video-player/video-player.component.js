import view from './video-player.html';
import controller from './video-player.controller';
import './video-player.scss';

let component = {
    template: view,
    controller: controller,
    bindings: {
        video: '<'
    }
}

export default component;
 