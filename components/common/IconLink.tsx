import { Paper, Stack } from "@mui/material";
import { CSSProperties, PropsWithChildren } from "react";
import { LinkInternal } from "./LinkInternal";
import styles from "@styles/base";

interface IconLinkProps extends PropsWithChildren {
    href: string;
    style?: CSSProperties;
}

export const IconLink = ({ href, style, children }: IconLinkProps) => {
    return (
        <LinkInternal href={href} style={style}>
            <Paper elevation={3} sx={styles.paper}>
                <Stack spacing={2} justifyContent={'center'} alignItems={'center'}>
                    {children}
                </Stack>
            </Paper>
        </LinkInternal>
    )
}
