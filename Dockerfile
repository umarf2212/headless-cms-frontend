# Use an official Node.js runtime as the base image
FROM node:21-alpine3.18 as build

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the entire React app to the working directory
COPY . .

# Build the React app
RUN npm run build

# Set the working directory to the parent directory
WORKDIR /app

# Expose port 3000 for the Express server
EXPOSE 3001

# Start the Express server when the container starts
CMD ["node", "server.js"]
