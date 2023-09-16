echo "Deploying..."
npm run build
mv dist build
rm /var/www/build -r
mv build /var/www/
systemctl restart nginx
echo "deployed!"