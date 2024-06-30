import { Stack, Typography } from "@mui/material";
import { useState } from 'react';

export const InputArea = ({post}) => {
    const [postContent, setPostContent] = useState("asşlkdfjalşsdfjaslasdfasfdasdfasdfasdfasfasdffjaslşdfjalşsdkfjalsdkfjalşsdkfjasşldfkjasşldfkjasşldfkjaşskldfjasşldf");
    const [comments, setComments] = useState(["aaa erhan ne güzelmiş burası!"]);

    return (
        <Stack>
            <Stack direction="row" gap={1} alignItems="flex-start">
                <Typography variant="h5" component="h2">
                    {post.user_name}
                </Typography>
                <Typography variant="body1" component="span" textAlign="start" sx={{wordBreak:"break-all"}}>
                    {post.title}
                </Typography>
            </Stack>

            {post.comments?.map((comment, index) => {
                return (
                    <Typography key={index} variant="body2" component="span" textAlign="start" sx={{wordBreak:"break-all"}}>
                        {comment}
                    </Typography>
                )
            })}

            <Typography variant="body1" component="span" textAlign="start" sx={{wordBreak:"break-all"}}>
                Yorum ekle...
            </Typography>
        </Stack>
    )
}
