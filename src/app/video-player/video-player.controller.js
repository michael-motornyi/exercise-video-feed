class VideoController {
    constructor ($sce) {
        this.$sce = $sce;
        this.knownSources = ['url', 'youtube', 'facebook'];
    }

    isKnownSource () {
        return this.knownSources.indexOf(this.video.source) > -1;
    }

    getYoutubeURL () {
        return this.$sce.trustAsResourceUrl('https://www.youtube.com/embed/' + this.video.videoId);
    }

    getFacebookURL () {
        let url = 'https://www.facebook.com/v2.3/plugins/video.php?allowfullscreen=true&href=https%3A%2F%2Fwww.facebook.com%2Fredbull%2Fvideos%2F'+this.video.videoId+'%2F&locale=en_US&sdk=joey';
        return this.$sce.trustAsResourceUrl(url);
    }
}

export default VideoController; 