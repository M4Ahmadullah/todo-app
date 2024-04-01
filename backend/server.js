import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import router from "./routes/ToDoRoute.js";
import bodyParser from "body-parser";

// dotenv config
dotenv.config();

// constants
const PORT = process.env.PORT || 5000;
const app = express();
const MONGODB_URI = process.env.MONGODB_URI;

//  middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

//Connecting to the MongoDB and Server
mongoose
	.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() => {
		console.log("Conneted to MongoDB");

		// Starting Server
		app.use(router);
		app.listen(PORT, () => {
			console.log(`Server running on port ${PORT}`);
		});
	})
	.catch((error) => {
		console.log("Error connecting to MongoDB", error);
	});
