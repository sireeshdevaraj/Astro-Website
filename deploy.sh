echo "Deploying..."
npm run build
rm -r /var/www/build
mv dist/* /var/www/build
systemctl restart nginx
