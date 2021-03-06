import xhr from "xhr";
import solrQuery from "./solr-query";

let server = {};

server.performXhr = function (options, accept, reject = () => { console.warn("Undefined reject callback! "); (console.trace || () => {})(); }) {
	xhr(options, accept, reject);
};

server.submitQuery = (query, callback) => {
	callback({type: "SET_RESULTS_PENDING"});

	server.performXhr({
		url: query.url,
		data: solrQuery(query),
		method: "POST",
		headers: {
			"Content-type": "application/x-www-form-urlencoded"
		}
	}, (err, resp) => {
		if (resp.statusCode >= 200 && resp.statusCode < 300) {
			callback({type: "SET_RESULTS", data: JSON.parse(resp.body)});
		} else {
			console.log("Server error: ", resp.statusCode);
		}
	});
};

export default server;