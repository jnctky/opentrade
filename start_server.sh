sudo forever stopall
cd databaseServer
sudo forever start main.js
cd ../accountsserver
sudo forever start main.js
cd ../server
sudo forever start main.js
cd ..
