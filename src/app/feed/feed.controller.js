class FeedController {
    constructor ($scope, feedService) {
        this.feedService = feedService;
        this.feedService.getVideos('https://cdn.playbuzz.com/content/feed/items').then((resp) => {
            this.videos = resp;
            $scope.$apply();
        });
    }

    getTitle () {
        return this.feedService.title;
    }
}

export default FeedController;