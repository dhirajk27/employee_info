// Importing the Mongoose library
const mongoose = require("mongoose");

// Importing the environment variables using the dotenv library
require("dotenv").config();

// "mongodb+srv://dheerajkhandave9552:4JOz4BijpXzEshyH@cluster0.ljgjpvg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

// Defining a function to connect to the database
const dbConnect = () => {
	// Connecting to the database using the provided URL from the environment variables
	mongoose
		.connect(process.env.MONGODB_CLOUD_DB, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		})
		// If the connection is successful, log a success message
		.then(() => console.log("DB CONNECTION SUCCESS"))
		// If there are issues connecting to the database, log an error message and exit the process
		.catch((err) => {
			console.log(`DB CONNECTION ISSUES`);
			console.error(err.message);
			process.exit(1);
		});
};

// Exporting the dbConnect function for use in other files
module.exports = dbConnect;
