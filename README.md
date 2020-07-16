# todoodler-auth-server
authetication and authorization for todoodler app

#Database

in dev mode, run mongoDB (todoDb) as docker by pasting the following in the terminal:
docker run -d -p 8002:27017 --name tododb mongo:4.4.0-rc8

to run mongo in the shell, type 'docker exec -it mongodb bash' and then 'mongo'

Todo:
- add permissions
- tests
- refine db methods (for more granular control):
  -> have group methods for counting compled and deleted todos
  -> have filter to bring only active/deleted/completed todos
- deployment config for pm2 (ecosystem.json)
  - circle ci config file