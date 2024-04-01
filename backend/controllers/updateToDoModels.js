import ToDoModel from "../models/ToDoModel.js";

const updateToDoModel = async (req, res) => {
	const { _id, text } = req.body;

	ToDoModel.findByIdAndUpdate(_id, { text })
		.then(() => res.send("Update Successfuly"))
		.catch((err) => console.log(err));
};

export default updateToDoModel;
