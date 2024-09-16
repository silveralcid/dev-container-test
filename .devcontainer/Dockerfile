# Use the lightweight Node.js Alpine base image
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Enable polling for file watching in Next.js (especially useful in Docker for some systems)
ENV CHOKIDAR_USEPOLLING=true

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install project dependencies including axios
RUN npm install axios && npm install

# Copy the rest of the application code to the container
COPY . .

# Expose port 3000 for the Next.js app
EXPOSE 3000

# Start the Next.js app in development mode
CMD ["npm", "run", "dev"]
