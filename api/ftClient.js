require("es6-promise").polyfill();
require("isomorphic-fetch");

module.exports = function(query, maxResult, Offset) {
    return new Promise(function(resolve, reject) {
        let keyword, currentPage;
        if (query) {
            //if no query passed search with empty string => will return latest headlines/news
            keyword = query.q ? query.q : "";
            //if the page number has been passed
            currentPage = query.page ? parseInt(query.page) : 1;
        }

        let offset = 0;
        if (currentPage >= 1 && currentPage <= 200) {
            //as we are displaying 20 result at a time
            offset = (currentPage - 1) * 20;
        }

        fetch("http://api.ft.com/content/search/v1", {
                method: "POST",
                headers: {
                    "X-Api-Key": process.env.FTAPIKEY,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    queryString: `title:\"${keyword}\"`,
                    queryContext: {
                        curations: ["ARTICLES", "BLOGS"]
                    },
                    resultContext: {
                        maxResults: maxResult,
                        offset: offset,
                        contextual: true,
                        aspects: [
                            "title",
                            "summary",
                            "editorial",
                            "location",
                            "metadata",
                            "lifecycle"
                        ]
                    }
                })
            })
            .then(function(response) {
                if (response.status >= 400) {
                    throw new Error("The resource is not found");
                }
                return response.json();
            })
            .then(function(response) {
                resolve(response);
            });
    });
};