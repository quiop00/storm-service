# Setup
```sh
docker compose up -d
```

```sh
npm i
npm start
```

# Build docker image
```sh
docker build -t storm-service .
docker run -d -p 3000:3000 --name storm-service-container storm-service
```