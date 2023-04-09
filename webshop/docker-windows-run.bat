@ECHO ON
docker build -t webshop:latest .
docker run -p 8080:8080 webshop
