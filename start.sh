rm ./app/config/config.js
cp ./app/config/config.dev.js ./app/config/config.js

rm ./build/index.html
cp ./build/index.dev.html ./build/index.html

npm start