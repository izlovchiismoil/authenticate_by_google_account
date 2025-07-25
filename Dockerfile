# Node.js image
FROM node:22

# App folder
WORKDIR /usr/src/app

# Copy files
COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3000
CMD ["npm", "start"]
