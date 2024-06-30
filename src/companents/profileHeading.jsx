import { Avatar, Box, Stack } from "@mui/material";
import { deepOrange } from '@mui/material/colors';

export const ProfileHeading = () => {
    return (
        <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
        >
            <Stack direction="row" gap={3} alignItems="center"
            >
                <Avatar src="./src/assets/serhat.jpg" />
                <Box>Alppinae</Box>
            </Stack>
            <Box>...</Box>
        </Stack>
    )
}