import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import TodoList from "./components/TodoList";
import PostsComponent from "./components/PostsComponent";
import RegistrationForm from "./components/RegistrationForm";
import Profile from "./components/Profile";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
    return (
        <BrowserRouter>
            <div className="min-h-screen bg-gray-100 p-4">
                <TodoList />
                <RegistrationForm />
                <PostsComponent />
              
                <Routes>
                    <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
                    <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
