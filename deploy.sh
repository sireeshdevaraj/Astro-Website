echo "Deploying..."
npm run build
mv dist build
rm /var/www/build -r
mv dist /var/www/
systemctl restart nginx
echo "deployed!"