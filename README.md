# Step 01
composer install

# Step 02
npm install

# Step 03 / Add new table or column
php artisan migrate

# Running project
php artisan serve
npm run dev

# If we got error "No application encryption key has been specified."
php artisan key:generate


# Delele Data All Table
php artisan migrate:refresh

# Delete Data One Table
php artisan migrate:refresh --path=""

# clear cache, route, config
php artisan cache:clear
php artisan config:clear
php artisan view:clear
php artisan route:clear
php artisan route:cache
php artisan config:cache

# Run the queue worker:
php artisan queue:work


# Show image from storage:
php artisan storage:link


php artisan make:model YourModelName -mcr
