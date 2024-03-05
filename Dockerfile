FROM node:current-alpine as build
# don't copy package-lock.json because of this issue: https://github.com/npm/cli/issues/4828
COPY package.json ./
RUN npm install --production=false
COPY .eslintrc.cjs postcss.config.js tailwind.config.js tsconfig.json tsconfig.node.json vite.config.ts index.html interface.ts ./
COPY src ./src
RUN npm run build

FROM node:current-alpine as run
COPY package.json ./
RUN npm install
COPY tsconfig.json tsconfig.node.json interface.ts server.ts .en[v] ./
COPY --from=build dist ./dist
CMD ["npm", "run", "start"]