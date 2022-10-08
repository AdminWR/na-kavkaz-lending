FROM php:7.4-apache

RUN a2enmod rewrite

ADD . /var/www/html

ARG user_id=1000
RUN usermod -u $user_id www-data