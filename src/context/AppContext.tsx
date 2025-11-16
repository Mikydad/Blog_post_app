import React, { createContext, useContext, useState } from "react";

type Post = {
  id: string;
  title: string;
  description: string;
  createdAt: string;
};

type CreatePostPayload = {
  title: string;
  description: string;
};

type AppContextValue = {
  posts: Post[];
  createPost: (payload: CreatePostPayload) => string;
};

const AppContext = createContext<AppContextValue | null>(null);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [posts, setPosts] = useState<Post[]>([]);

  const createPost = ({ title, description }: CreatePostPayload): string => {
    const addPost: Post = {
      id: crypto.randomUUID(),
      title,
      description,
      createdAt: new Date().toISOString(),
    };

    setPosts((prev) => [addPost, ...prev]);

    return addPost.id;
  };

  return (
    <AppContext.Provider value={{ posts, createPost }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const ctx = useContext(AppContext);
  if (!ctx) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return ctx;
};
