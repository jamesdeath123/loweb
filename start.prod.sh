rm ./app/config/config.js
cp ./app/config/config.prod.js ./app/config/config.js

rm ./build/index.html
cp ./build/index.prod.html ./build/index.html

rm -rf ./public

mkdir ./public

npm run build

cp ./build/* ./public/
rm ./public/index.dev.html

npm run start:prod
