import { Children, createContext, use, useContext, useState } from "react";
type Post = {
    id: String;
    title: String;
    description: String;
    createdAt:String;
};
type CreatePostPayload = {
    title: String;
    description:String;
}
type AppContextValue = {
    posts: Post[],
    createPost: (payload: CreatePostPayload) => String;
};

const AppContext = createContext<AppContextValue | null>(null);

export const AppProvider: React.FC<{children: React.ReactNode}> = ({children}) => {

    const [posts, setPosts] = useState<Post[]>([]);
    const createPost =({title,description}:CreatePostPayload):String => {
        const addPost: Post = {
            id: crypto.randomUUID(),
            title,
            description,
            createdAt: new Date().toISOString(),
        }

        setPosts((prev) => [addPost, ...prev]);

        return addPost.id;
    };

    return(
        <AppContext.Provider value = {{posts, createPost}}>
        {children}
        </AppContext.Provider>
    )
}

export const useAppContext = () => {
    const ctx = useContext(AppContext);

    if(!ctx){
        throw new Error("useAppContext must be used within app")
    } return ctx;
}