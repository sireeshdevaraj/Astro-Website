echo "Deploying..."
npm run build
rm /var/www/build -r
mv dist/* /var/www/build
systemctl restart nginx
echo "deployed!"