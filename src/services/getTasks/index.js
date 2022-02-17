const getTasks = require('../../models/getTasks');

module.exports = async () => {
	const tasks = await getTasks();
	return tasks.map((task) => task.item);
};