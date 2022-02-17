const insertTask = require('../../models/addTask');

module.exports = async (item) => {
	await insertTask(item);
};