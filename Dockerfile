FROM node:18

WORKDIR /usr/src/app/mfecturbo

RUN npm install -g pnpm

COPY ./ package.json ./
COPY ./ pnpm-workspace.yaml ./
COPY ./ turbo.json ./

COPY apps apps/

# ใส่คำตอบ 'Y' สำหรับ pnpm install
RUN echo 'Y' | pnpm install

EXPOSE 3001

CMD [ "pnpm" ,"run", "dev" ]
