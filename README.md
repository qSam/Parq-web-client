# Parq-Web-Client

Web Client for Parq  
App built with React  

-----------------------------------
To run React App with Docker:  
1) Build Docker Image from Dockerfile:  
docker build -t parq-client .  

2) Run Docker Image inside Docker Container:  
docker run --rm --name web-client -it -p 8080:8080 parq-client    

-------------------------------------
To run with Docker Compose:  
1) docker-compose up  
