# 36ZEROVISION TASK
Retal time collaborative Todo management app

# REQUIREMENTS:
- Docker
- Local Dev environment with NodeJS (v16), NestJS(v10), Angular(v15), NPM(v8)

# TOOLS:
- Agular Material
- Postman for testing 
- MySQL/Postgres database
- ProyxConfig is created in proxy.conf.json file for requests between frontend and backend.

# Start APP
- Run docker engine
- at the project root folder, run 'docker-compose up'. This will start all the servers in development mode (or as set in the Dockerfile).
- If there is any issue with the startup, you can still cd into todo-backend and start the servers with 'npm ruin build' and the todo-frontend with 'npm install' and 'ng serve'
