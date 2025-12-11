# 🧭 Navbar UI - React + Tailwind

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)

A clean and responsive navbar user interface built using React and Tailwind CSS, designed to be reusable across web applications.

---

## 🚀 Live Demo: [Try it on Vercel](https://buildwithrani-react-navbar-ui.vercel.app/)

---

## ⚙️ Tech Stack

- ⚛️ [**React.js (Vite)**](https://vitejs.dev/) – fast development setup with hot module reloading  
- 🎨 [**Tailwind CSS**](https://tailwindcss.com/) – utility-first CSS framework for responsive design  
- 🔷 [**TypeScript**](https://www.typescriptlang.org/) – static typing for reliability and scalability  
- 🔄 [**React Router DOM**](https://reactrouter.com/en/main) – for navigation flow and route handling  
- 🧩 [**React Icons**](https://react-icons.github.io/react-icons/) – for wishlist, cart, and profile icons  
- 🎞️ [**Framer Motion**](https://www.framer.com/motion/) – for smooth dropdown and menu animations
  
---

## 📸 Screenshots

### Desktop Views
![Navbar Desktop](https://github.com/rangari-rani/buildwithrani-react-navbar-ui/blob/585183ecf4d4eb92d0577e925972520602e7bcf9/public/navbar-desktop.png)  
_Navbar_

### Mobile Views
<p align="center">
  <img src="https://github.com/rangari-rani/buildwithrani-react-navbar-ui/blob/585183ecf4d4eb92d0577e925972520602e7bcf9/public/navbar-mobile1.png" alt="Mobile Navbar" width="22%">
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <img src="https://github.com/rangari-rani/buildwithrani-react-navbar-ui/blob/585183ecf4d4eb92d0577e925972520602e7bcf9/public/navbar-mobile2.png" alt="Mobile Navbar" width="22%">

</p>
_Mobile responsive design screenshots_

---

## ✨ Features 

This module introduces a **two-layer e-commerce navbar** designed for clarity and engagement.

### Top Layer
- 🧩 **Rotating quote banner** for short motivational snippets  
- 💬 **Promotional message** highlighting the “WELCOME10” new-user offer  
- 👤 **Dynamic login/profile state** switching between logged-in and guest views  

### Bottom Layer
- 🛍️ **Wellness Cart logo** reinforcing brand identity  
- 📂 **Category navigation** with dropdown and mega-menu interactions  
- ❤️🛒 **Wishlist and Cart icons** for quick access  

---

## 📂 Folder Structure

<details>
<summary><strong>📂 Click to view folder structure</strong></summary>

```tsx
src/
├── App.tsx
├── main.tsx
├── App.css
├── index.css
│
├── assets/
│   └── react.svg
│
├── data/
│   └── categories.ts
│
├── components/
│   ├── Footer/
│   │   └── Footer.tsx
│   │
│   └── Navbar/
│       ├── SearchBar.tsx
│       ├── index.ts
│       │
│       ├── MegaMenu/
│       │   ├── MegaMenu.tsx
│       │   ├── MegaMenuList.tsx
│       │   ├── index.ts
│       │   └── utils/
│       │       └── menuUtils.ts
│       │
│       ├── NavbarMain/
│       │   ├── NavbarMain.tsx
│       │   ├── DesktopNav.tsx
│       │   ├── MobileDrawer.tsx
│       │   ├── NavbarLogo.tsx
│       │   ├── CartWishlistButtons.tsx
│       │   └── index.ts
│       │
│       ├── NavbarTop/
│       │   ├── NavbarTop.tsx
│       │   ├── PromoBanner.tsx
│       │   ├── RotatingQuote.tsx
│       │   ├── UserSection.tsx
│       │   ├── index.ts
│       │   ├── data/
│       │   │   └── quotes.ts
│       │   └── hooks/
│       │       └── useRotatingQuote.ts
│       │
│       └── UserMenu/
│           ├── UserMenu.tsx
│           ├── UserMenuList.tsx
│           ├── AvatarButton.tsx
│           ├── LoginButton.tsx
│           ├── types.ts
│           └── index.ts
```
</details>

---

## 🔧 Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/rangari-rani/buildwithrani-react-navbar-ui.git
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```
> App runs at:
🌐 http://localhost:5173

---

## ✨ Part of BuildWithRani

This project is part of the **BuildWithRani** learning series.

📖 Implementation details:  [buildwithrani.com](https://buildwithrani.com)

---

## 📬 Contact

Connect with me on **[LinkedIn – Rani Rangari](https://www.linkedin.com/in/rani-rangari/)**  

⭐ If you found this project helpful, consider giving it a star!
