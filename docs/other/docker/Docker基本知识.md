### Docker基本知识

#### Docker基本操作

- 查看当前镜像 `docker images`
- 删除镜像 `docker rm <image_id>`
- 构建镜像 `docker build <image_tag>`
- 拉取镜像 `docker pull <image>`
- 把一个镜像运行在一个容器里： `docker run <image>`
- 查看运行中的容器 `docker ps` 查看全部容器 `docker ps -a`
- 启动容器 `docker start <container_id>`
- 停止容器 `docker stop <container_id>` 
- 删除容器 `docker rm <container_id>`

#### 使用docker做一个Nginx WEB服务器

拉取镜像

```
docker pull nginx
```

运行镜像

```
docker run --name nginx-server -p 4000:80 -d nginx
```

> 参数说明
>
>  --name   指定容器名 ， 若是不指定docker就会自动对他进行命名。
>
>  -d 设置让这个容器一直运行着 
>
> -p 4000:80 表示将端口进行映射，我们访问云服务器的4000端口的话其实就是访问nginx服务的80端口。

然后就可以在localhost:4000查看你的nginx默认的网页

![](https://tva1.sinaimg.cn/large/008i3skNly1gwdeij7j0cj328p0u0thv.jpg)

