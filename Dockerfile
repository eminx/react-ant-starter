FROM node:carbon

# We need serve
RUN npm install -g serve

# Create app directory
WORKDIR /usr/src/app

# Prepare for install of dependencies
COPY package*.json ./

# Install dependencies
RUN npm install

# Bundle app source
COPY . .

# Build code
RUN npm run build

EXPOSE 5000

CMD ["serve", "-s", "build"]
