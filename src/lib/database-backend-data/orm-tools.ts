
import type { Tool } from '@/lib/types';

export const ormTools: Tool[] = [
    { name: 'Prisma', description: 'Next-generation ORM for Node.js and TypeScript.', url: 'https://www.prisma.io/', image: 'https://www.google.com/s2/favicons?sz=128&domain=prisma.io', dataAiHint: 'typescript orm', pricing: 'Free' },
    { name: 'Drizzle ORM', description: 'A TypeScript ORM that feels like writing SQL.', url: 'https://orm.drizzle.team/', image: 'https://www.google.com/s2/favicons?sz=128&domain=orm.drizzle.team', dataAiHint: 'typescript orm', pricing: 'Free' },
    { name: 'SQLAlchemy', description: 'The Python SQL Toolkit and Object Relational Mapper.', url: 'https://www.sqlalchemy.org/', image: 'https://www.google.com/s2/favicons?sz=128&domain=sqlalchemy.org', dataAiHint: 'python orm', pricing: 'Free' },
    { name: 'Sequelize', description: 'A modern TypeScript and Node.js ORM for Postgres, MySQL, and more.', url: 'https://sequelize.org/', image: 'https://www.google.com/s2/favicons?sz=128&domain=sequelize.org', dataAiHint: 'node.js orm', pricing: 'Free' },
    { name: 'TypeORM', description: 'An ORM for TypeScript and JavaScript (ES7, ES6, ES5).', url: 'https://typeorm.io/', image: 'https://www.google.com/s2/favicons?sz=128&domain=typeorm.io', dataAiHint: 'typescript orm', pricing: 'Free' },
    { name: 'Entity Framework Core', description: 'A modern object-database mapper for .NET.', url: 'https://docs.microsoft.com/en-us/ef/core/', image: 'https://www.google.com/s2/favicons?sz=128&domain=docs.microsoft.com', dataAiHint: '.net orm', pricing: 'Free' },
    { name: 'Hibernate', description: 'An object-relational mapping tool for the Java language.', url: 'https://hibernate.org/', image: 'https://www.google.com/s2/favicons?sz=128&domain=hibernate.org', dataAiHint: 'java orm', pricing: 'Free' },
    { name: 'Django ORM', description: 'The built-in ORM for the Django web framework.', url: 'https://docs.djangoproject.com/en/stable/topics/db/', image: 'https://www.google.com/s2/favicons?sz=128&domain=djangoproject.com', dataAiHint: 'python orm', pricing: 'Free' },
    { name: 'Ruby on Rails ActiveRecord', description: 'The ORM for the Ruby on Rails framework.', url: 'https://guides.rubyonrails.org/active_record_basics.html', image: 'https://www.google.com/s2/favicons?sz=128&domain=guides.rubyonrails.org', dataAiHint: 'ruby orm', pricing: 'Free' },
    { name: 'Laravel Eloquent', description: 'An object-relational mapper (ORM) included with Laravel.', url: 'https://laravel.com/docs/eloquent', image: 'https://www.google.com/s2/favicons?sz=128&domain=laravel.com', dataAiHint: 'php orm', pricing: 'Free' },
];
