if [ "$ENV" = "production" ]; then
  npm run start
elif [ "$ENV" = "development" ]; then
  npm run dev
else
  echo "Invalid environment. Must be one of production, staging, or development."
  exit 1
fi