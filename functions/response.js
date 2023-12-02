// const exec = require("child_process").exec;
const exec = require("child_process").exec;

exports.handler = async function (event, context) {
  // Run the "yarn db" command
  exec("yarn db", (error, stdout, stderr) => {
    if (error) {
      console.error(`Error starting database: ${stderr}`);
      return {
        statusCode: 500,
        body: JSON.stringify({ error: "Internal Server Error" }),
      };
    }

    console.log(`Database started: ${stdout}`);
    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Database started" }),
    };
  });
};
