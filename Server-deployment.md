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
	- https://github.com/bustardcelly/grunt-forever
	- http://stackoverflow.com/questions/22543580/how-to-use-grunt-forever-and-grunt-watch-together
	- https://github.com/foreverjs/forever

Dependent modules:

	- MongoDB
	- Express
	- Angular	
	- Node
	- grunt-forever
	
	
Userful server commands:

	-	npm install - install dependency mentioned in application's package json

	-	cd meanjsblog    -  to go to application folder	
	-	npm install -g grunt-forever	- 	install module to run grunt always	
	-	grunt --force forever:server1:start - to start application with forever
	-	grunt --force forever:server1:stop - to stop application started by forever
	-	grunt --force forever:server1:restart - to restart application started by forever
	


