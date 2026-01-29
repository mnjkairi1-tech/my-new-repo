
import type { Tool } from '@/lib/types';

export const ormTools: Tool[] = [
    { name: 'Prisma', description: 'Next-generation ORM for Node.js and TypeScript.', url: 'https://www.prisma.io/', image: 'https://picsum.photos/seed/prisma-orm/600/400', dataAiHint: 'typescript orm', pricing: 'Free' },
    { name: 'Drizzle ORM', description: 'A TypeScript ORM that feels like writing SQL.', url: 'https://orm.drizzle.team/', image: 'https://picsum.photos/seed/drizzle-orm/600/400', dataAiHint: 'typescript orm', pricing: 'Free' },
    { name: 'SQLAlchemy', description: 'The Python SQL Toolkit and Object Relational Mapper.', url: 'https://www.sqlalchemy.org/', image: 'https://picsum.photos/seed/sqlalchemy/600/400', dataAiHint: 'python orm', pricing: 'Free' },
    { name: 'Sequelize', description: 'A modern TypeScript and Node.js ORM for Postgres, MySQL, and more.', url: 'https://sequelize.org/', image: 'https://picsum.photos/seed/sequelize/600/400', dataAiHint: 'node.js orm', pricing: 'Free' },
    { name: 'TypeORM', description: 'An ORM for TypeScript and JavaScript (ES7, ES6, ES5).', url: 'https://typeorm.io/', image: 'https://picsum.photos/seed/typeorm/600/400', dataAiHint: 'typescript orm', pricing: 'Free' },
    { name: 'Entity Framework Core', description: 'A modern object-database mapper for .NET.', url: 'https://docs.microsoft.com/en-us/ef/core/', image: 'https://picsum.photos/seed/efcore/600/400', dataAiHint: '.net orm', pricing: 'Free' },
    { name: 'Hibernate', description: 'An object-relational mapping tool for the Java language.', url: 'https://hibernate.org/', image: 'https://picsum.photos/seed/hibernate/600/400', dataAiHint: 'java orm', pricing: 'Free' },
    { name: 'Django ORM', description: 'The built-in ORM for the Django web framework.', url: 'https://docs.djangoproject.com/en/stable/topics/db/', image: 'https://picsum.photos/seed/django-orm/600/400', dataAiHint: 'python orm', pricing: 'Free' },
    { name: 'Ruby on Rails ActiveRecord', description: 'The ORM for the Ruby on Rails framework.', url: 'https://guides.rubyonrails.org/active_record_basics.html', image: 'https://picsum.photos/seed/activerecord/600/400', dataAiHint: 'ruby orm', pricing: 'Free' },
    { name: 'Laravel Eloquent', description: 'An object-relational mapper (ORM) included with Laravel.', url: 'https://laravel.com/docs/eloquent', image: 'https://picsum.photos/seed/eloquent/600/400', dataAiHint: 'php orm', pricing: 'Free' },
];
