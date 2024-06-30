
import { Stack } from "@mui/material";
import { ProfileCard } from "./profileCard";

export const InstagramWrapper = () => {
    return (
        <Stack height="100%" gap={3}>
        {[...Array(30).keys()].map(element => {
            return (
                <ProfileCard key={element} id={element} />
            )
        })}
        </Stack>
    )
}
