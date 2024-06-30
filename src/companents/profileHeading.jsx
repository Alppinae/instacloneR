import { Avatar, Box, Stack } from "@mui/material";
import { deepOrange } from '@mui/material/colors';

export const ProfileHeading = ({nickName, userName}) => {
    return (
        <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
        >
            <Stack direction="row" gap={3} alignItems="center"
            >
                <Avatar sx={{ bgcolor: deepOrange[500] }}>{nickName}</Avatar>
                <Box>{userName}</Box>
            </Stack>
            <Box>...</Box>
        </Stack>
    )
}
