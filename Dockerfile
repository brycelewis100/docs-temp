# Stage 1: Build
FROM node:18-alpine AS builder

# Set the working directory
WORKDIR /app

# Install pnpm globally
RUN npm install -g pnpm

# Copy only package.json and lockfile
COPY package.json pnpm-lock.yaml ./

# Install dependencies
RUN pnpm install --frozen-lockfile

# Copy the rest of the application source code
COPY . .

# Build the Nuxt app
RUN pnpm build

# Stage 2: Production
FROM node:18-alpine

# Set the working directory
WORKDIR /app

# Install pnpm globally
RUN npm install -g pnpm

# Copy only the production build files from the builder stage
COPY --from=builder /app/.output ./.output

# Expose the application port
EXPOSE 3000

# Set the default command to run the Nuxt app
CMD ["node", ".output/server/index.mjs"]