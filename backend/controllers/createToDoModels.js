import ToDoModel from "../models/ToDoModel.js";
const createToDoModel = async (req, res) => {
	const { text } = req.body;
	console.log(text);

	ToDoModel.create({ text }).then((data) => {
		console.log("Successfuly Created new TODO ");
		console.log(data);
		res.send(data);
	});
};

export default createToDoModel;
