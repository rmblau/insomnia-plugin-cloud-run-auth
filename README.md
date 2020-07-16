# Google Cloud Run Authentication for Insomnia

This is a plugin for [Insomnia](https://insomnia.rest/) that automates creating identity tokens for making API calls to authenticated Google Cloud Run instances .

Identity tokens have a short lifetime, and it can be annoying to have to manually refresh them during development. This plugin automatically refreshes the token by executing `gcloud auth print-identity-token` before each request.
  
  ## Usage
  Ensure you have installed the [Google Cloud SDK](https://cloud.google.com/sdk/install) and its bundled `gcloud` command-line interface.
  
  Create a Bearer Token authentication and add the "Google Cloud Run Identity Token" template tag as the token value.
  
  You may need to override the default path to the `gcloud` executable (~/google-cloud-sdk/bin) if it is installed somewhere else on your machine.
  
  Note that this plugin has not been tested on Windows. 
