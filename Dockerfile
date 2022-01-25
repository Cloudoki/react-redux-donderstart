FROM node:16.13.2-alpine AS build
WORKDIR /build
COPY . /build
RUN yarn
RUN yarn build

FROM nginx:1.21-alpine
COPY --from=build /build/dist /usr/share/nginx/admin-app
COPY nginx/public.conf /etc/nginx/conf.d/default.conf
