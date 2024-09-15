# finance-tracker

Container stoppen:
docker-compose down

Container aufstarten:
docker-compose up -d --build
docker images

Laufende Containers anzeigen:
docker ps

Tags und Versionierung anschauen:
docker images

Inspect volumes:
docker inspect finance_tracker_db

Remove volumes:
docker volume ls
docker-compose down
docker volume rm finance-tracker_db_data
docker volume ls

Ressourcen monitoren:
docker stats

Logging:
docker logs finance_tracker_backend
docker logs -f finance_tracker_backend

Vulnerability scanning:
trivy image finance-tracker-backend:v1.0
trivy image finance-tracker-frontend:v1.0

Skalierung:
docker-compose down
docker-compose up -d --scale backend=3 --scale frontend=2

Load Balancing:
docker swarm init
docker stack rm finance-tracker
docker network rm finance-tracker_finance_network

docker-compose build

docker stack deploy -c docker-stack.yml finance-tracker

docker service ls
docker service ps finance-tracker_backend
docker service ps finance-tracker_frontend

docker stack rm finance-tracker
docker service ls
docker swarm leave --force
docker network ls
docker network rm finance-tracker_finance_network
