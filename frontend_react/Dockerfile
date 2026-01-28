# Build
FROM node:20-alpine AS builder
WORKDIR /app
COPY package.json yarn.lock tsconfig.json ./

# Copies package.json file and soruce code to /app directory
COPY package.json yarn.lock tsconfig.json vite.config.ts ./
COPY .env.production .
COPY ./public ./public
COPY ./src ./src
COPY index.html ./

# dependencies install and build
RUN yarn install
RUN yarn build

# Runtime
FROM nginx:alpine
COPY --from=builder /app/build /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start the nginx web server
CMD ["nginx", "-g", "daemon off;"]
