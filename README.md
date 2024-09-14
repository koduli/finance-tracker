# finance-tracker

Container stoppen:
docker-compose down

Container aufstarten:
docker-compose up -d --build

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
docker logs finance_tracker_backend (direkt von Docker)
docker logs -f finance_tracker_backend (Kontinuierlich Logs verfolgen)

Vulnerability scanning:
trivy image finance-tracker-backend:v1.0
trivy image finance-tracker-frontend:v1.0

Skalierung:
docker-compose up -d --scale backend=3 (startet 3 Instanzen des Backend-Services)
