1. install electron globally ---> npm install electron -g
2. install http-server globally ---> npm install http-server -g
3. run the server in localhost:8080 ---> npm run serve
4. run the electron in development mode ---> npm run start
5. build the executable package ourside the project folder ---> npm run pack




1. 将本文件夹放在服务器上并通过指定的服务器地址访问index.html文件就能看到载入到场景中的模型。

2. 请注意不要将plugins里的threejs文件夹内的文件单独拿出来和其他文件混放，否则在浏览器在读取threejs里面的模块时会出现未找到文件或文件MIME类型错误的问题，因此threejs里面的文件不要单独和其他文件放在一起混用。


艾孜尔江撰；2020年2月22日。