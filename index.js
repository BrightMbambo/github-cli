var GitHub = require('github-api');
var prompt = require('prompt');
var username;
var password;

prompt.start();

prompt.get(['username','password'], function(err, result)
{
if (err){return onErr(err);}

 username=result.username;
password=result.password;
console.log('Command-line input recieved:');
console.log('Git Username:' + result.username);
console.log('Git Password:' + result.password);


// basic auth
var gh = new GitHub({
   username: username,
   password: password
   


});


var username  = gh.getUser(username);
username.listStarredRepos(function(err, repos) {
   // look at all the starred repos!
});
});

