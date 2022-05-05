FROM php:8.0.2-apache

RUN curl -sS https://getcomposer.org/installer | php -- \
    --install-dir=/usr/local/bin --filename=composer

WORKDIR /app
COPY . .
RUN composer install

CMD php artisan serve --host=0.0.0.0