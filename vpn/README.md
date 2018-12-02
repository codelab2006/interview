1.购买海外服务器
随便香港的、韩国的，日本的，美国的都行

2.安装shadowsoc安装
    Debian / Ubuntu:
        apt-get install python-pip
        pip install shadowsocks

    CentOS:
        yum install python-setuptools && easy_install pip
        pip install shadowsocks

3.编辑配置文件(没有就直接新建)
vim /etc/shadowsocks.json
{
  "server":"0.0.0.0",
  "server_port":8888,
  "local_address": "127.0.0.1",
  "local_port":1080,
  "password":"password",
  "timeout":300,
  "method":"aes-256-cfb",
  "fast_open": false
}

多个账号：
{
  "server":"0.0.0.0",
  "port_password":{
      "8381":"password",
      "8382":"password",
      "8383":"password",
      "8384":"password"
  },
  "timeout":300,
  "method":"aes-256-cfb",
  "fast_open": false
}

参数说明
字段                    说明
server                  ss服务监听地址，0.0.0.0允许所有人访问，如果只是自己用，可以改成自己使用端的ip
server_port             ss服务监听端口
local_address           本地的监听地址
local_port              本地的监听端口
password                密码
timeout                 超时时间，单位秒
method                  加密方法，默认是aes-256-cfb
fast_open               使用TCP_FASTOPEN, true / false
workers                 workers数，只支持Unix/Linux系统

启动和停止
ssserver -c /etc/shadowsocks.json -d start
ssserver -c /etc/shadowsocks.json -d stop
写日志方式启动
ssserver -c /etc/shadowsocks.json --log-file /opt/ss.log -d start

4.打开服务器端口8888

5.使用客户端

6.安装Proxy SwitchyOmega
