# 构建镜像命令
# 1) docker build . -t vue3-mobile-template --build-arg mode=prd
# 运行镜像命令 
# 1) docker run -d -p 8080:80 vue3-mobile-template
# 2) curl localhost:8080

ARG mode
ENV mode=${mode} 

FROM node:10
COPY ./ /app
WORKDIR /app
RUN npm install && npm run build-${mode:-prd}

FROM nginx
RUN mkdir /app
COPY --from=0 /app/dist /app
COPY nginx.conf /etc/nginx/nginx.conf

RUN echo '${mode:-prd} environment published successfully !!'