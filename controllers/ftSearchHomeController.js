const moment = require("moment");
const ftFetch = require("../api/ftFetch");

module.exports = function(req, res) {
    //fetch only the latest 9 results
    let maxResults = 9;
    let offset = 0;
    let query = req.query;
    ftFetch(query, maxResults, offset)
        .then(response => {
            let articles = [];

            response.results[0].results.forEach(article => {
                articles.push({
                    keyword: " FT Latest",
                    title: article.title.title,
                    author: article.editorial.byline,
                    excerpt: article.summary.excerpt,
                    publicationDate: moment(
                        article.lifecycle.initialPublishDateTime
                    ).format("dddd, Do MMMM, YYYY"),
                    link: article.location.uri,
                    tag: article.metadata.primarySection ?
                        article.metadata.primarySection.term.name :
                        "General",
                    tagLink: article.metadata.primarySection ?
                        `https://www.ft.com/${article.metadata.primarySection.term.name.toLowerCase()}` :
                        "#"
                });
            });

            res.render("home", { articles: articles });
        })
        .catch(function(err) {
            // Will catch failure of first failed promise
            console.log("Failed:", err);
        });
};