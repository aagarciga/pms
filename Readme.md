# PMS
Dandelion property management system (Symfony 5.0)

> All your sensitive information or connections must be in a .env.local file ignored by git

## Coding rules (Use Test Driven Development)

If you're organizing your code well, then all classes will fall into one of two types.   
1. The first type - a model class - is a class whose job is basically to hold data... 
but not do much work. Our entities are model classes.   
2. The second type - a service class - is a class whose main job is to do work, 
but it doesn't hold much data, other than maybe some configuration.

## Commands

- Start the Development Server:
```
    symfony serve --port=7887 -d --no-tls
```
- Stop the development server: 
``` 
    symfony server:stop
```
- Running Tests:
```
    php .\bin\phpunit
```
- Creating the test database:
```
    php bin/console doctrine:schema:create --env=test
```

- Creating the new database structure:
```
    bin/console doctrine:schema:drop --force
    bin/console doctrine:schema:create / symfony console doctrine:database:create
    bin/console doctrine:fixtures:load -n
```
- Start the background worker process
```
    bin/console messenger:consume -vv
```

- Installing Webpack Encore
```
    composer require encore
```

- Installing all frontend packages in node_modules
```
    yarn install
```

- Compiling assets with webpack
```
    yarn run encore dev --watch | yarn watch
```

- Adding jQuery
```
    yarn add jquery --dev
```

- Debugging the routes
```
    php bin/console debug:router
```

- Update translation files
```
     php bin/console translation:update --force en
```
- Make Migration
```
    php .\bin\console make:migration
```

- Run Migration
```
    php .\bin\console doctrine:migrations:migrate
```

- Make Fixture
```
    php bin/console make:fixtures
```

- Load Fixtures
```
    php .\bin\console doctrine:fixtures:load
```

Checking for security issues

```
    symfony console security:check
```

Making User
```
symfony console make:user
```