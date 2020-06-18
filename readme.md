1. 将本文件夹放在服务器上并通过指定的服务器地址访问index.html文件就能看到载入到场景中的模型。

2. 请注意不要将plugins里的threejs文件夹内的文件单独拿出来和其他文件混放，否则在浏览器在读取threejs里面的模块时会出现未找到文件或文件MIME类型错误的问题，因此threejs里面的文件不要单独和其他文件放在一起混用。


艾孜尔江撰；2020年2月22日。


<br><br><br>
<br><br><br>

------


1. install electron globally ---> npm install electron -g
2. install http-server globally ---> npm install http-server -g
3. run the server in localhost:8080 ---> npm run serve
4. run the electron in development mode ---> npm run start
5. build the executable package ourside the project folder ---> npm run pack

By Alexander,2020/6/18 12:00

<br><br><br>
------


1. 写好的脚本需要使用webpack转换；---> webpack 命令（先npm install webpack webpack-cli -D以安装webpack）;
2. 用转换好的脚本替换原来的脚本；
3. 将该脚本放置在index.html的script标签内部（不然会找不到window）；
4. 新建一个index.js并在里面填写electron创建窗体的代码，这里需要注意，不要使用官网上的，将win.loadFile换成win.loadUrl，二者的具体用法也不太一样，详情可项目脚本；
5. 在package.json文件中配置好electron的入口脚本为index.js；
6. 将index.html中script标签下的脚本中，找到之前的加载本地模型、本地图片的那个文件路径设置处，并将其改为从网上的某个服务器上获取，可以直接在本地开一个http-server测试；
7. 运行electron . ；
8. 运行pack命令；
9. 打开上一层文件夹下的exe文件，成功。

By Alexander,2020/6/18 16:00



