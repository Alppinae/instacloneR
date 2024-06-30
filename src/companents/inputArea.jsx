import { Stack, Typography } from "@mui/material";
import { useState } from 'react';

export const InputArea = () => {
    const [user, setUser] = useState("Alppinae");
    const [postContent, setPostContent] = useState("lorem ipsum dolor sit amet consectetur adipiscing elit curabitur euismod nunc nec nisi fermentum, nec tincidunt odio tincidunt cras ");

    return (
        <Stack direction="row" gap={1} alignItems="flex-start">
            <Typography variant="h5" component="h2">
                {user}
            </Typography>
            <Typography variant="body1" component="span" textAlign="start" sx={{wordBreak:"break-all"}}>
                {postContent}
            </Typography>
          
            <Stack flexDirection={"column"}>
            <Typography variant="body1" component="span" textAlign="start"  sx={{wordBreak:"break-all"}}>
                Yorum ekle...
            </Typography>
            </Stack>
        </Stack>
    )
}