FROM php:8.0.2-apache

RUN curl -sS https://getcomposer.org/installer | php -- \
    --install-dir=/usr/local/bin --filename=composer

# PHPのモジュールなどをインストール
RUN apt-get update \
    && apt-get install -y zlib1g-dev \
    && apt-get install -y zip unzip \
    && apt-get -y install libzip-dev libonig-dev \
    && docker-php-ext-install pdo_mysql mysqli zip \
    && docker-php-ext-enable pdo_mysql mysqli \
    && a2enmod rewrite

WORKDIR /app
COPY . .
RUN composer install

CMD php artisan serve --host=0.0.0.0