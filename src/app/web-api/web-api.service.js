class WebApiService {
    constructor ($http) {
        this.$http = $http;
    }

    get (path) {
        return new Promise ((resolve, reject) => {
            this.$http.get(path)
                .then((resp) => {
                    if (resp && resp.data) {
                        resolve(resp.data.items);
                    } else {
                        reject('Incorect response');
                    }
                })
                .catch((err) => {
                    reject(err);
                });
        });
    }
}

export default WebApiService;