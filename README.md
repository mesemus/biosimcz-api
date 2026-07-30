# BioSIM-CZ



Launch:

```bash
# open 3 tmux panes
celery --app invenio_app.celery worker --beat --events --loglevel INFO --queues celery,low
./run.sh cli assets watch
gunicorn invenio_app.wsgi:application --bind 0.0.0.0:5000 --workers 2 --threads 2 --access-logfile - --error-logfile - \
 --proxy-protocol auto --forwarded-allow-ips="100.104.30.23,172.16.0.175" --http-protocols h2,h1 \
 --keyfile ~/compchemdev.tail4eac46.ts.net.key --certfile ~/compchemdev.tail4eac46.ts.net.crt --log-level INFO 
```

