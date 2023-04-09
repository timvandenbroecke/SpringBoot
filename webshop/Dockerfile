FROM eclipse-temurin:17-jdk-alpine
LABEL maintainer="Tim Vandenbroecke"
ADD target/webshop-0.0.1-SNAPSHOT.jar docker-webshop.jar
ENTRYPOINT ["java", "-jar", "docker-webshop.jar"]