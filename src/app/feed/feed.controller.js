class FeedController {
    constructor ($scope, feedService) {
        this.feedService = feedService;
        this.error = null;
        this.feedService.getVideos('https://cdn.playbuzz.com/content/feed/items')
            .then((resp) => {
                this.videos = resp;
                $scope.$apply();
            })
            .catch((err) => {
                console.log(err);
                this.error = err;
                $scope.$apply();                
            });
    }

    getTitle () {
        return this.feedService.title;
    }
}

export default FeedController;