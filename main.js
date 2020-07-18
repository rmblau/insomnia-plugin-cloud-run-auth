const {exec} = require("child_process");

tokenTemplate = {
    name: 'cloudRunIdToken',
    displayName: "Google Cloud Run Identity Token",
    description: "Generate an identity token for calling authenticated Google Cloud Run endpoints",
    args: [
        {
            displayName: "Path to Google Cloud CLI binary",
            type: 'string',
            defaultValue: `${process.env.HOME}/google-cloud-sdk/bin/gcloud`
        }
    ],
    run: async (_, gcloud) => {
        return await new Promise((resolve, reject) => {
            exec(`${gcloud} auth --quiet print-identity-token`, (err, stdout, stderr) => {
                if (err) reject(err);
                resolve(stdout.toString().trim());
            });
        });
    }
}

module.exports.templateTags = [tokenTemplate];

