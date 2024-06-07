#################
# Подготовка
#################

# Используем официальный образ Node.js
FROM node:21 AS development

# Устанавливаем рабочую директорию в контейнере
WORKDIR usr/src/app

# Копируем package.json и package-lock.json для установки зависимостей
COPY --chown=node:node package*.json ./

# Устанавливаем зависимости
RUN npm ci

# Копируем все файлы проекта в рабочую директорию
COPY --chown=node:node . .

# Используем Node-пользователя
USER node

#################
# Сборка
#################

FROM node:21 AS build

WORKDIR /usr/src/app

COPY --chown=node:node --from=development /usr/src/app/node_modules ./node_modules
COPY --chown=node:node . .

# Сборка приложения
RUN npm run build

# Используем Node-пользователя
USER node

#################
# Релиз
#################

FROM node:21 AS production

WORKDIR /usr/src/app

COPY --chown=node:node --from=build /usr/src/app/.next ./.next
COPY --chown=node:node --from=build /usr/src/app/next.config.mjs ./next.config.mjs
COPY --chown=node:node --from=build /usr/src/app/node_modules ./node_modules
COPY --chown=node:node --from=build /usr/src/app/public ./public

EXPOSE 3000

CMD ["node", "./node_modules/next/dist/bin/next", "start"]