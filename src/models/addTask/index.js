const connection = require('../');

module.exports = async (item) => {
	const db = await connection();
	await db.collection('tasks').insertOne({ item });
	return item;
};