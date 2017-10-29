import view from './feed.html';
import controller from './feed.controller';
import './feed.style.scss';

let component = {
    template: view,
    controller: controller,
    bindings: {
        videos: '<'
    }
}

export default component;
