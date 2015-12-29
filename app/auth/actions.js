module.exports = {
	login,
	logout
}

function login (credentials) {
	return {
		type: "AUTH_LOGIN",
		payload: credentials
	}
}

function logout (userId) {
	return {
		type: "AUTH_LOGOUT",
		payload: userId
	}
}