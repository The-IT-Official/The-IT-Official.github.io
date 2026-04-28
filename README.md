# nathanpeter.me

Personal portfolio site for Nathan Peter 

**Live site:** [nathanpeter.me](https://nathanpeter.me)

---

## Stack

| Layer | Technology |
|---|---|
| Markup | HTML5 |
| Styles | CSS3 (custom, no framework) |
| Interactivity | Vanilla JavaScript |
| Web server | Nginx (via Docker) |
| Hosting | GitHub Pages + custom domain |
| Domain | Namecheap → CNAME → GitHub Pages |

---

## Features

- Light/dark theme toggle
- Fully static — no build step, no dependencies
- Containerized with Docker for local dev and portable deployment

---

## Run Locally with Docker

Requires [Docker Desktop](https://www.docker.com/products/docker-desktop).

```bash
# 1. Clone
git clone https://github.com/The-IT-Official/The-IT-Official.github.io.git
cd The-IT-Official.github.io

# 2. Build image
docker build -t nathanpeter-site .

# 3. Run container
docker run -d -p 8080:80 --name portfolio nathanpeter-site

# 4. Open
open http://localhost:8080
```

To rebuild after making changes:

```bash
docker stop portfolio && docker rm portfolio
docker build -t nathanpeter-site .
docker run -d -p 8080:80 --name portfolio nathanpeter-site
```

---

## File Structure

```
.
├── index.html        # Main page
├── style.css         # All styles including theme variables
├── script.js         # Theme toggle logic
├── favicon.svg       # SVG favicon
├── CNAME             # Custom domain config for GitHub Pages
├── Dockerfile        # Nginx Alpine container
└── .dockerignore     # Excludes .git, README, CNAME from image
```

---

## Docker Quick Reference

| Command | What it does |
|---|---|
| `docker build -t nathanpeter-site .` | Build image |
| `docker run -d -p 8080:80 --name portfolio nathanpeter-site` | Start container |
| `docker ps` | List running containers |
| `docker stop portfolio` | Stop container |
| `docker rm portfolio` | Remove container |
| `docker logs portfolio` | View nginx access logs |

---
