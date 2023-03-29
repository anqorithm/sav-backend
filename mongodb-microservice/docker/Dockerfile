FROM mongo

COPY init.js /docker-entrypoint-initdb.d/

EXPOSE 27017

CMD ["mongod", "--bind_ip_all", "--smallfiles"]