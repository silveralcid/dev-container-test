# Use the lightweight Node.js Alpine base image
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Enable polling for file watching in Next.js
ENV CHOKIDAR_USEPOLLING=true

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies with npm
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose port 3000 (Next.js default port)
EXPOSE 3000

# Start the Next.js app
CMD ["npm", "run", "dev"]
