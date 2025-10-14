FROM node:18.18.0 AS builder

LABEL maintainer "kpthanh26@gmail.com"

WORKDIR /app

COPY . .

RUN yarn --network-timeout 100000

RUN yarn build

FROM nginx:alpine

WORKDIR /app

ENV TZ=Asia/Ho_Chi_Minh

RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

COPY --from=builder /app/dist /var/www

COPY --from=builder /app/nginx.conf /etc/nginx/nginx.conf

EXPOSE 80
