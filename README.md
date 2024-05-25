Pasos para ejecutar el proyecto de web 2
situarse en la carpeta Front-End
--cd Front-End
luego en vite-Project
--cd vite-Project
ejecutar
--npm run dev


instalar en la carpeta Front-End:
npm install styled-components
npm install react-icons

para inicializar prisma
--cd Back-End
-npx prisma generate

si es la primera vez instalar:
npm install @prisma/cli @prisma/client
npx prisma init
-luego de eso generar el/los schemas de la bd
npx prisma generate
npx prisma db push -> para generar los cambios en MySQL localmente
