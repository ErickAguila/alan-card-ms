#FROM gcr.io/gsc-gitlab-ce/cicd/secaas/base/node-12-oracle:12-latest
FROM gcr.io/gsc-gitlab-ce/cicd/secaas/base/node:14-latest

COPY ./node_modules node_modules
COPY dist/ ./dist
COPY package.json .
COPY src src
COPY environment environment
#COPY tsconfig.base.json .
COPY tsconfig.build.json .
COPY tsconfig.json .
COPY docker/entrypoint.sh .
COPY envgonsul .

# Run
CMD ["/bin/sh","entrypoint.sh"]
#CMD [ "npm", "run", "start:prod"]

