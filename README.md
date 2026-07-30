# BioSIM-CZ



## Launch:

```bash
# open 3 tmux panes
celery --app invenio_app.celery worker --beat --events --loglevel INFO --queues celery,low
cd .venv/var/instance/assets; NODE_PRESERVE_SYMLINKS=1 node_modules/.bin/rspack --mode development --watch --config ./build/rspack.config.js
gunicorn invenio_app.wsgi:application --bind 0.0.0.0:5000 --workers 2 --threads 2 --access-logfile - --error-logfile - \
 --proxy-protocol auto --forwarded-allow-ips="100.104.30.23,172.16.0.175" --http-protocols h2,h1 \
 --keyfile ~/compchemdev.tail4eac46.ts.net.key --certfile ~/compchemdev.tail4eac46.ts.net.crt --log-level INFO \
 --reload --reload-extra-file .venv/var/instance/
```

## IDE Setup (WebStorm):

Mark `.venv/var/instance/assets` as not excluded (via Right Click > Mark Directory As), and mark the `js` and `node_modules` folders as "Resources Root"

