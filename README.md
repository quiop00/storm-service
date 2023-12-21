# Setup
docker compose up -d

npm i
npm start

# Build docker image
docker build -t storm-service .
docker run -d -p 3000:3000 --name storm-service-container storm-service