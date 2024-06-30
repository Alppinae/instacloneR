import { Stack } from "@mui/material";
import { useEffect, useState } from "react";
import { supabase } from "../supabase/instance";
import { Header } from './header';
import { ProfileCard } from "./profileCard";

export const InstagramWrapper = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
      getPosts();
    }, []);

    async function getPosts() {
      const { data } = await supabase.from("posts").select();
      setPosts(data);
    }

    return (
        <Stack height="100%" gap={3}>
            <Header />
            {posts?.map(post => {
                return (
                    <ProfileCard key={post.id} id={post.id} post={post} />
                )
            })}
        </Stack>
    )
}
