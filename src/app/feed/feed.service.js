import angular from 'angular';

class FeedService {
    constructor (webApi) {
        this.webApi = webApi;
        this.title = 'VIDEO FEED';
    }

    getVideos (url) {
        const videoType = 'video';
        return new Promise ((resolve, reject) => {
            this.webApi.get(url)
                .then((resp) => {
                    let result = [];
                    if (Array.isArray(resp)) {
                        angular.forEach(resp, (item) => {
                            if (item.type === videoType) {
                                result.push(item);
                            }
                        })
                    }
                    resolve(result);
                })
                .catch((err) => {
                    reject(err);
                })
        })
    }
}

export default FeedService;
    