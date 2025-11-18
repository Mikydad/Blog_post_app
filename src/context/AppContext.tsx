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
type UpdatePostPayLoad = {
    title: string;
    description: string;
}


type AppContextValue = {
    posts: Post[],
    createPost: (payload: CreatePostPayload) => String;
    updatePost: (id: string, payload: UpdatePostPayLoad) => void;
    deletePost: (id: string) => void;
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

    const updatePost = (id: string, {title, description}: UpdatePostPayLoad) => {
        setPosts((prev) => prev.map((post) => post.id === id ? {...post, title, description} : post))
    }

    const deletePost = (id: string): void => {
    setPosts((prev) => prev.filter((post) => post.id !== id));
  };




    return(
        <AppContext.Provider value = {{posts, createPost, updatePost, deletePost}}>
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