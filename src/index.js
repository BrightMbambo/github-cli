const prompt = require('prompt');
const GitHub = require('github-api');
const { spawn } = require('child_process');

prompt.start();

prompt.get(['username','password'],(err, {password, username})=>{
	// if(err){return onErr(err); }

	const gh = new GitHub({
		username,
		password 
	});

	console.log({ gh });
	const user = gh.getUser();

	user.listRepos((err, repos) => {

		console.log({ err });
		console.log({ repos });

		repos.map((repo) => {
			console.log(repo.clone_url);
			spawn('git', ['clone', repo.clone_url]);
		});

	});
})
