
# Stage 1: Build the application
FROM node:18-alpine as build

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production

# Copy source code
COPY . .

ENV NODE_OPTIONS=--openssl-legacy-provider

# Build the application
RUN npm run build


# Stage 2: Production stage
FROM node:18-alpine

# Install serve globally to serve static files
RUN npm install -g serve