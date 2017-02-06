######################################################
# MEAN-js application server deployment
######################################################

- Application: MEAN JS sample application
- Server : Digital Ocean
- Database : MongoDB


References:

	- http://meanjs.org/generator.html
	- https://www.youtube.com/watch?v=a-dn6k6Frq4
	- https://www.digitalocean.com/community/tutorials/how-to-install-a-mean-js-stack-on-an-ubuntu-14-04-server

Dependent modules:

	- MongoDB
	- Express
	- Angular	
	- Node
	- PM2
	
	
Userful server commands:

	-	npm install - install dependency mentioned in application's package json

	-	cd node-js-mongo/    -  to go to application folder
	-	npm start	-	to start node js application
	-	npm stop	- 	to stop node js application
	-	sudo npm install -g pm2	-	install pm2 module globally, which ensures application up and running
	-	pm2 start ./bin/www --name nodejs-app	-	start application by pm2 with name 'nodejs-app'
	-	pm2 stop nodejs-app	-	stop 'nodejs-app' application started by pm2
	-	pm2 list	-	list all processes
	


