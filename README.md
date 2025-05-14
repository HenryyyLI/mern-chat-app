# 💬 Real-Time Chat App (MERN + Socket.io)
A full-stack real-time chat platform powered by the MERN stack and WebSocket technology, delivering instant, reliable communication with seamless user presence awareness. Featuring secure JWT-based authentication and a reactive UI built with Tailwind CSS, the app supports smooth one-on-one messaging, dynamic online/offline tracking, and a fully synchronized chat experience—ideal for modern social or collaborative environments.

## 🔍 Key Features

- **🧱 Full-Stack MERN Architecture**

  Built with MongoDB, Express.js, React, and Node.js to ensure seamless backend-frontend integration with scalable infrastructure.

- **🔐 JWT-Based Authentication**

  Secure authentication system with JSON Web Tokens (JWT), featuring token validation middleware, route protection, and user session persistence across refreshes. Uses cookies over localStorage for better security, and keeps the client state in sync for a seamless, refresh-resistant login experience.

- **⚡ Real-Time Messaging with Socket.io**
  
  Leverages WebSockets via Socket.io for instantaneous message delivery, typing indicators, online status, and room-based handling. Enhances engagement by mimicking real-world chat responsiveness.
  
- **🎨 Clean & Responsive UI**
  
  Crafted with Tailwind CSS and DaisyUI, the interface is responsive by design, polished across devices, and consistent in look, feel, and behavior. Visual feedback and hover interactions enhance usability and flow.
  
- **🌐 Global State Management with Zustand**
  
  Uses Zustand to manage shared state with minimal boilerplate. Keeps the app fast and predictable without Redux or heavy context, making the codebase easier to maintain and extend.

## 📁 Project Structure

```bash
mern-chat-app/
├── backend/                         # Backend - Node.js + Express + MongoDB
│   ├── controllers/                 # Request handlers (auth, messages, etc.)
│   ├── db/                          # MongoDB connection setup
│   ├── middleware/                  # Middleware (JWT auth, error handlers)
│   ├── models/                      # Mongoose schemas (User, Message)
│   ├── routes/                      # Express API route definitions
│   ├── socket/                      # Socket.io event handlers and setup
│   ├── utils/                       # Utility functions
│   └── server.js                    # Entry point for the backend server
│
├── frontend/                        # Frontend - React + Zustand + Socket.io client
│   ├── public/                      # Static assets and index.html
│   ├── src/
│   │   ├── components/              # Reusable UI components (sidebar, message containers, etc.)
│   │   ├── pages/                   # Pages (Login, Register, Chat, etc.)
│   │   ├── context/                 # React context for global state
│   │   ├── hooks/                   # Custom React hooks
│   │   ├── zustand/                 # Zustand store setup
│   │   ├── App.js                   # Main app component and routing
│   │   └── ...                      # Other frontend modules and logic
│   └── package.json                 # Frontend dependencies and scripts
│
├── .env                             # Environment variables for both client/server
├── .gitignore                       # Files/folders to be ignored by Git
└── README.md                        # Project overview and documentation
```

## 🛠 Tech Stack

- **Backend**: `Node.js`, `Express.js`, `MongoDB`, `Mongoose`

- **Frontend**: `React`, `React Router`
- **UI & Visualization**: `Tailwind CSS`, `Daisy UI`, `react-hot-toast`

- **WebSocket**: `Socket.io` (real-time messaging and online status)

- **State Management**: `Zustand` (global state management)

- **Authentication**: `JWT` (secure session handling)

## 🌐 Deployment

👉 **Live Demo**: https://chat-app-prod-xvv5.onrender.com
