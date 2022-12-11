function validate() {
	let username = document.getElementById('username').value;
	let password = document.getElementById('password').value;

	if (username === 'activity_owner' && password === 'pippo_is_the_owner') {
		alert('Login successfuly!');
	} else {
		alert('Login failed');
	}
}
