import BookmarkIcon from '@mui/icons-material/Bookmark';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ModeCommentIcon from '@mui/icons-material/ModeComment';
import SendIcon from '@mui/icons-material/Send';
import { Stack, Typography } from "@mui/material";
import { useEffect, useState } from 'react';
import { InputArea } from './inputArea';


export const LikesAndComments = ({post}) => {
    const [hasLike, setHasLike] = useState(false);
    const [isSaved, setIsSaved] = useState(false);
    const [isVideo, setIsVideo] = useState(false);

    useEffect(() => {
        setHasLike(post.has_like ? true : false)
        setIsSaved(post.is_saved ? true : false)
    }, [])

    const handleClickLike = () => setHasLike(hasLike ? false : true);
    const handleClickSave = () => setIsSaved(isSaved ? false : true);

    return (
        <Stack gap={1}>
            <Stack direction="row" justifyContent="space-between">
                <Stack direction="row" gap={2} width="100%">
                    {hasLike ?
                        <FavoriteIcon onClick={handleClickLike} />
                        :
                        <FavoriteBorderIcon onClick={handleClickLike} />
                    }
                    <ModeCommentIcon />
                    <SendIcon />
                </Stack>
                <Stack direction="row">
                    {isSaved ?
                        <BookmarkIcon onClick={handleClickSave} />
                        :
                        <BookmarkBorderIcon onClick={handleClickSave} />
                    }
                </Stack>
            </Stack>

            <Typography variant='h6' component="h2" display="flex" justifyContent="flex-start">{isVideo ? `${post.likesCount} görüntüleme` : `${post.likesCount} beğeni`}</Typography>

            <InputArea post={post} />
        </Stack>
    )
}
