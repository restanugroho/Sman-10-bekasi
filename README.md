# 🏫 School Profile Website

### A Laravel & React website project for SMA Negeri 10 Kota Bekasi

A school profile website originally developed as an official commissioned project. Development stopped before the full scope was completed, and the current codebase is presented as a personal portfolio project.

> **Portfolio demo — not an official or active school service.** Some pages contain static sample content or placeholders, and several linked features have not been implemented.

---

## ✨ About the Project

This project explores building a school information website with a public-facing interface for school profiles, extracurricular activities, news, and announcements.

It demonstrates a full-stack web workflow using Laravel, Inertia.js, and React, with Laravel Breeze providing the initial authentication and profile flows.

## 🚀 Current Features

- 🏠 School homepage with introductory sections
- 🏫 School profile pages for organizational structure and extracurricular activities
- 📰 News and announcement pages
- 🔐 Laravel Breeze authentication flows, including registration, login, password reset, email verification, and profile management
- 📱 Responsive interface built with Tailwind CSS

### Known Limitations

- News and announcements are currently static and cannot be managed through a CMS.
- Some content and page sections are examples or placeholders.
- School content such as news, announcements, extracurricular activities, and organizational structure is not backed by dedicated database models.
- Some navigation links point to features that are not implemented yet.
- The authentication scaffold is present, but school administration and content-management workflows have not been built.

---

## 💻 Tech Stack

**Backend**

![PHP](https://img.shields.io/badge/PHP-777BB4?style=for-the-badge&logo=php&logoColor=white)
![Laravel](https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white)

**Frontend**

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Inertia.js](https://img.shields.io/badge/Inertia.js-9553E9?style=for-the-badge&logo=inertia&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)

---

## ⚙️ Run Locally

### Requirements

- PHP 8.2+
- Composer
- Node.js and npm
- MySQL

### Installation

1. Install project dependencies:

   ```bash
   composer install
   npm install
   ```

2. Create a local environment file:

   ```powershell
   Copy-Item .env.example .env
   ```

3. Configure your database connection in `.env`, then generate the application key and run migrations:

   ```bash
   php artisan key:generate
   php artisan migrate
   ```

4. Start the Laravel and Vite development servers in separate terminals:

   ```bash
   php artisan serve
   ```

   ```bash
   npm run dev
   ```

5. Open the local URL shown by Laravel Artisan, usually `http://127.0.0.1:8000`.

---

## 📌 Project Note

This repository represents the implementation and project status as they currently stand; it is not a completed school information system. School-related identity, images, and content should only be published or reused with appropriate permission and verification.

<p align="center">
  <i>Built with Laravel, Inertia.js, and React.</i>
</p>
