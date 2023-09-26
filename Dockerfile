FROM node:18
WORKDIR /devX
COPY . .
RUN npm install --legacy-peer-deps

ENV NPM_CONFIG_LEVEL warn
ENV PATH /app/node_modules/.bin:$PATH

RUN npm run build --production
RUN npm install -g serve
CMD serve -s build -l 3000
EXPOSE 3000