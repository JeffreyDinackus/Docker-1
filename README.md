# Docker-1


docker run -d {img}
docker run --name web-app -d -p 80:80 nginx:1.25.3

docker pull img:version

docker logs {container-name-or-id}

docker stop {container-name}

docker start {container-name}

you can start or stop multiple containers at once

docker ps -a

docker ps

docker build -t node-app:1.0 .

-p localport:containerport

docker run -p 3000:3000 --name web-app-1 node-app

docker run -d -p 3000:3000 --name test -t node-app

docker build -t your-image-name -f YourDockerfile .


docker container rm $(docker container ls -qa)

docker container rm -f $(docker container ls -qa)

docker container -qa

docker image rm -f $(docker image ls -q)

https://dev.to/ysmnikhil/how-to-build-with-react-or-vue-with-vite-and-docker-1a3l
