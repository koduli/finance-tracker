# Dockerfile im frontend-ft Verzeichnis

# Phase 1: Build Stage
FROM node:18 as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Phase 2: Serve Stage
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf

# Create necessary directories and set permissions for non-root user
RUN mkdir -p /var/cache/nginx /var/run /var/log/nginx && \
    chown -R 1001:1001 /var/cache/nginx /var/run /var/log/nginx /usr/share/nginx/html /tmp

USER 1001:1001 # Set the user to non-root
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
