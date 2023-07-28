FROM public.ecr.aws/nginx/nginx:1.24-alpine

COPY ./docker/nginx.conf /etc/nginx/nginx.conf
COPY ./build/ /usr/share/nginx/html/
RUN mkdir -p /usr/share/nginx/html/ui/adg
COPY ./build/ /usr/share/nginx/html/ui/adg/
