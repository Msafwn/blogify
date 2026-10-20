# Blogify

A full-stack blog application built with **React + Vite** where users can sign up, log in, and create, edit, and publish blog posts with rich-text content and featured images.

The app uses **Appwrite** as a Backend-as-a-Service, so there is no custom server to maintain — authentication, the post database, and image storage are all handled by Appwrite.

---

## ✨ Features

- **User authentication** — sign up, log in, and log out via Appwrite accounts
- **CRUD posts** — create, read, update, and delete blog posts
- **Rich-text editor** — write posts with formatting using TinyMCE (RTE)
- **Featured images** — upload and preview cover images stored in Appwrite Storage
- **Route protection** — authenticated and public routes guarded with a `Protection` wrapper
- **Post listing & detail view** — browse all active posts or open a single post by slug
- **Contact page** — a simple contact section
- **Responsive UI** — styled with Tailwind CSS

---

## 🛠 Tech Stack

| Layer        | Technology |
|--------------|------------|
| Framework    | React 18 + Vite |
| Backend      | [Appwrite](https://appwrite.io/) (Auth, Databases, Storage) |
| State        | Redux Toolkit + React Redux |
| Routing      | React Router v6 |
| Styling      | Tailwind CSS |
| Forms        | React Hook Form |
| Rich text    | `@tinymce/tinymce-react` |
| HTML render  | `html-react-parser` |
| Alerts       | SweetAlert2 |

---

## 📁 Project Structure

```
Blogify/
├── src/
│   ├── App.jsx                 # Root layout + auth bootstrapping
│   ├── main.jsx                # Entry point, router & Redux Provider
│   ├── Appwrite/
│   │   ├── Auth.js             # Appwrite account/auth service
│   │   └── config.js           # Appwrite databases + storage service
│   ├── component/
│   │   ├── pages/              # Home, Login, SignUp, AllPost, PostForm, Edit, Post
│   │   ├── Header.jsx / Footer.jsx
│   │   ├── PostCard.jsx
│   │   ├── Rte.jsx             # TinyMCE rich-text editor
│   │   ├── Protection.jsx      # Route guard
│   │   └── ...                 # UI primitives (Button, Input, SelectInput, etc.)
│   ├── confvar/
│   │   └── conf.js             # Reads Vite env vars for Appwrite config
│   ├── features/
│   │   └── AuthSlice.js        # Redux slice for auth state
│   └── store/
│       └── Store.js            # Redux store
├── .env                        # Appwrite credentials (see below)
├── index.html
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v18 or newer) and npm
- An **Appwrite** account — you can use [Appwrite Cloud](https://cloud.appwrite.io/) or self-host

### 1. Clone & install

```bash
git clone <your-repo-url>
cd Blogify
npm install
```

### 2. Configure Appwrite

1. Create a project in the Appwrite console.
2. Create a **Database** and a **Collection** (e.g. `posts`) with these attributes:
   | Key           | Type    | Required |
   |---------------|---------|----------|
   | `title`       | string  | yes      |
   | `content`     | string  | yes      |
   | `featuredImage` | string | no     |
   | `status`      | string  | yes (e.g. `active`) |
   | `userId`      | string  | yes      |
3. Add **permissions** so users can create/read/update/delete their documents.
4. Create a **Storage Bucket** for featured images and set read/write permissions.
5. Copy the **Project ID**, **Database ID**, **Collection ID**, and **Bucket ID** — you'll need them next.

### 3. Set environment variables

Create a `.env` file in the project root (you can copy from the existing one) with:

```env
VITE_APPWRITE_URL="https://cloud.appwrite.io/v1"
VITE_APPWRITE_PROJECT_ID="<your-project-id>"
VITE_APPWRITE_DATABASE_ID="<your-database-id>"
VITE_APPWRITE_COLLECTION_ID="<your-collection-id>"
VITE_APPWRITE_BUCKET_ID="<your-bucket-id>"
```

> ⚠️ The `.env` file contains project-specific IDs. Keep them out of version control and use your own values — never reuse someone else's credentials.

### 4. Run the app

```bash
npm run dev
```

Open the URL printed in the terminal (defaults to `http://localhost:5173`).

---

## 📜 Available Scripts

| Command           | Description |
|-------------------|-------------|
| `npm run dev`     | Start the Vite dev server with HMR |
| `npm run build`   | Build for production into `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint`    | Run ESLint over the project |

---

## 🔗 Application Routes

| Path                 | Page              | Access |
|----------------------|-------------------|--------|
| `/`                  | Home / post feed  | Public |
| `/signIn`            | Login             | Public (redirects if logged in) |
| `/signUp`            | Sign up           | Public (redirects if logged in) |
| `/AllPosts`          | All posts         | Private |
| `/AddPosts`          | Create a post     | Private |
| `//edit-post/:slug`  | Edit a post       | Private |
| `/post/:slug`        | Single post       | Public |
| `/contact`           | Contact us        | Public |

---

## 📝 Notes

- The repo ships with the default Vite ESLint config (React + React Hooks + React Refresh rules).
- This is a learning/demo project generated from a React + Vite template, extended with Appwrite-backed blogging functionality.

---

## 📄 License

This project is for educational/demo use.
