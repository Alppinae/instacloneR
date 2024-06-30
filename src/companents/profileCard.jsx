import { Stack } from "@mui/material";
import { LikesAndComments } from "./LikeAndComments";
import { ProfileHeading } from "./profileHeading";

export const ProfileCard = ({id, post}) => {
    return (
        <>
            <ProfileHeading nickName={post.nick_name} userName={post.user_name}/>

            <Stack height="300px" width="500px" sx={{marginInline: "auto"}}>
                <img src={`https://picsum.photos/500/300?random=${id}`} />
            </Stack>

            <LikesAndComments post={post} />
        </>
    )
}
