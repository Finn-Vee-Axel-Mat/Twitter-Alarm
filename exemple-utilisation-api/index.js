import fetch from 'node-fetch'

const TOKEN = `AAAAAAAAAAAAAAAAAAAAAKZtYQEAAAAA8OWu8GKNSLSfitU9OSL86dD9YkI%3D2YmR2FfRDr1Kqo4yrL0sQArmgvRHWtTxPQN6pcdsxiidwktmSn`;
const SINCE = `2022-01-21T21:00:00Z`;
//.............YYYY-MM-DDTHH:MM:SSZ

const SEARCH = `Hello world`;

(async() => {
	const data = await fetch(`https://api.twitter.com/2/tweets/counts/recent?query=`+SEARCH+`&start_time=`+SINCE, {
		headers : {
			Authorization: `Bearer ${TOKEN}`,
		}
	})
	.then(res => res.json())
	console.log("--------");
	console.log("- Ce script donne le nbr de tweet avec exactement '"+SEARCH+"' dedans depuis le : "+SINCE);
	console.log("--------");
	console.log("[RESULT] Il y a eu : "+data.meta.total_tweet_count+" tweets répondant à la recherche !");
})()