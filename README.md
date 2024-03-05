# prompt-battle-live

> A system to run prompt battles on stage.

[Prompt Battle](https://promptbattle.com) is a game show invented by Florian A. Schmidt and Sebastian Schmieg at HTW Dresden. It involves (at least) two players, who are presented with a challenge and then write a prompt to be fed to a text-to-image system such as OpenAI's DALL-E.

This system allows running prompt battles on stage. To do this, it contains
- A server component to sync all the components
- A screen for the players to enter their usernames, prompts and select their final image
- A screen for the master of ceremony (MC) to administer the game
- A screen to be projected for the audience to see

All information is updated live between the components, which means that the audience can see the prompts as the players type them.

## Commands

- `npm install` — Installs the required packages
- `npm run dev-backend` — To develop the backend — uses port `3000`
- `npm run dev-frontend` — To develop the frontend (you might also want to run the backend at the same time) — uses port `5173`
- `npm run lint` — Runs the linter
- `npm run build` — Produces a production build
- `npm run start` — Runs the system (requires a previous build)

## Docker

The system can be built and run using the provided Dockerfile.
- To build the image, run `docker build -t "prompt-battle-live" .`
- To run it execute `docker run --rm -ti -e OPENAI_API_KEY=[YOUR_OPENAI_KEY] -p 3000:3000 prompt-battle-live`
- The prompt battle server is now available on your machine on port 3000

## Environment

The following settings can be adjusted using environment variables:
- `OPENAI_API_KEY`: the OpenAI access key
- `IMAGE_COUNT`: The number of images per user, defaults to 2 — keep in mind the rate limits of OpenAI

These can either be set in your environment manually, in the `docker run` command (see above), or in a `.env` file — copy the `.env.example` to `.env` and fill out the information for this.

## Disclaimer

> This project is not 100% stable but usable. Pull requests are welcome!