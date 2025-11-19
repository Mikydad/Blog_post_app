import { Children, createContext, use, useContext, useEffect, useState } from "react";
type Post = {
    _id: String;
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

const API_URL = "http://localhost:3000/api/posts";

export const AppProvider: React.FC<{children: React.ReactNode}> = ({children}) => {

    const [posts, setPosts] = useState<Post[]>([])

    //Fetch from backend.

    useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch(API_URL);
        const data = await res.json();
        setPosts(data);
      } catch (err) {
        console.error("Failed to load posts", err);
      }
    };

    fetchPosts();
  }, []);

     //Send to Backend.

    //Load from Local Storage.
//   const [posts, setPosts] = useState<Post[]>(() => {
//         const stored = localStorage.getItem("posts")

//         return stored ? JSON.parse(stored) : [];
//      });


//      //2. Save to local storate
//      useEffect( () => {
//         localStorage.setItem("posts", JSON.stringify(posts));
//      }, [posts])    

     //load to backend.

     const createPost = async ({ title, description }: CreatePostPayload): Promise<string> => {
    const res = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, description }),
    });

    const newPost = await res.json();
    setPosts((prev) => [newPost, ...prev]);

    return newPost._id;
  };

//     const updatePost = (id: string, {title, description}: UpdatePostPayLoad) => {
//         setPosts((prev) => prev.map((post) => post.id === id ? {...post, title, description} : post))
//     }

//     const deletePost = (id: string): void => {
//     setPosts((prev) => prev.filter((post) => post.id !== id));
//   };




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