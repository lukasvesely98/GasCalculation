/**
 * Created by developer on 5.5.17.
 */
var request = require('request');

var username = 'lukasvesely98';
var password = 'ROjnsnsapvnj4l';

var options = {
  url: 'https://api.github.com/repos/pavelbinar/ro_convert-github-issues-to-csv/issues?per_page=100&state=all&page=1',
  headers: {
    'User-Agent': 'request'
  },
  auth: {
    'user': username,
    'pass': password
  }
};

request.get(options).on('response', function(response) {
  console.log(response.statusCode) // 200
  console.log(response.headers['content-type'])
});