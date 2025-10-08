# StoreIt 📁

**StoreIt - The only storage solution you need.**

A modern, cloud-based file storage and management application built with Next.js 15, TypeScript, and Appwrite. StoreIt provides a seamless experience for uploading, organizing, and managing your files with an intuitive dashboard and powerful file categorization.

## ✨ Features

### Current Features

- 🔐 **Secure Authentication** - User registration and login with Appwrite
- 📤 **File Upload** - Drag & drop file upload with support for multiple file types
- 📊 **Smart Dashboard** - Visual storage usage with interactive charts
- 🗂️ **File Organization** - Automatic categorization by file type (Documents, Images, Media, Others)
- 🔍 **Search & Filter** - Find files quickly with advanced search and sorting options
- 📱 **Responsive Design** - Works seamlessly on desktop and mobile devices
- 🎨 **Modern UI** - Beautiful interface built with Tailwind CSS and Radix UI components
- ⚡ **Real-time Updates** - Instant file upload progress and status updates
- 🔒 **File Management** - Rename, download, and delete files with ease

### File Type Support

- **Documents**: PDF, DOC, DOCX, TXT, CSV
- **Images**: JPG, PNG, SVG, GIF
- **Media**: MP4, AVI, MOV, MP3, WAV
- **Others**: Any other file type

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- Appwrite account and project setup

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/storeit.git
   cd storeit
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Environment Setup**
   Create a `.env.local` file in the root directory:

   ```env
   NEXT_PUBLIC_APPWRITE_ENDPOINT=your_appwrite_endpoint
   NEXT_PUBLIC_APPWRITE_PROJECT_ID=your_project_id
   NEXT_PUBLIC_APPWRITE_DATABASE=your_database_id
   NEXT_PUBLIC_APPWRITE_USERS_TABLE_ID=your_users_table_id
   NEXT_PUBLIC_APPWRITE_FILES_TABLE_ID=your_files_table_id
   NEXT_PUBLIC_APPWRITE_BUCKET=your_bucket_id
   NEXT_APPWRITE_KEY=your_appwrite_secret_key
   ```

4. **Run the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🛠️ Tech Stack

- **Frontend**: Next.js 15, React 19, TypeScript
- **Styling**: Tailwind CSS, Radix UI
- **Backend**: Appwrite (Database, Storage, Authentication)
- **File Handling**: React Dropzone
- **Charts**: Recharts
- **Forms**: React Hook Form with Zod validation
- **Icons**: Lucide React
- **Notifications**: Sonner

## 📁 Project Structure

```
src/
├── app/                    # Next.js app router
│   ├── (auth)/            # Authentication pages
│   └── (root)/            # Main application pages
├── components/            # Reusable UI components
│   ├── ui/               # Base UI components
│   └── ...               # Feature-specific components
├── lib/                  # Utility functions and configurations
│   ├── actions/          # Server actions
│   └── appwrite/         # Appwrite configuration
├── constants/            # Application constants
├── schemas/              # Zod validation schemas
└── types/                # TypeScript type definitions
```

## 🔧 Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier
- `npm run check-types` - Type check with TypeScript

## 🎯 Future Plans

### Upcoming Features

- 💳 **Subscription Plans** - Multiple storage tiers with premium features
- 🔗 **File Sharing** - Share files with others via secure links
- 👥 **Collaboration** - Team workspaces and shared folders
- 🔄 **File Sync** - Real-time synchronization across devices
- 📱 **Mobile App** - Native mobile applications
- 🔐 **Advanced Security** - End-to-end encryption and access controls
- 📈 **Analytics** - Detailed usage statistics and insights
- 🌐 **API Access** - RESTful API for third-party integrations

### Roadmap

- **Q1 2024**: Subscription plans and file sharing
- **Q2 2024**: Team collaboration features
- **Q3 2024**: Mobile applications
- **Q4 2024**: Advanced security and API access

## 🤝 Contributing

We welcome contributions! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - The React framework for production
- [Appwrite](https://appwrite.io/) - Backend-as-a-Service platform
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Radix UI](https://www.radix-ui.com/) - Low-level UI primitives
- [Lucide](https://lucide.dev/) - Beautiful & consistent icon toolkit

## 📞 Support

If you have any questions or need help, please:

- Open an issue on GitHub

---

**Made with ❤️ by the StoreIt team**
