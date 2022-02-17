const connection = require('../');

module.exports = async () => {
	const db = await connection();
	return db.collection('tasks').find().toArray();
};