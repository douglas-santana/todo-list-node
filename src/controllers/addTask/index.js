const insertTask = require('../../services/addTask');

module.exports = async (req, res) => {
	try {
		const { task } = req.body;
		await insertTask(task);
		res.status(201).json({ message: 'created'});
	} catch (error) {
		res.status(500).send('erro');
	}
};