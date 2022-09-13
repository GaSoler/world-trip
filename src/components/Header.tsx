import { Box, Image } from "@chakra-ui/react";


export function Header() {
    return (
        <Box 
            w='100%' 
            h={100}
            display='flex' 
            alignItems='center' 
            justifyContent='center' 
        >
            <Image src="\assets\logo.svg" />
        </Box>
    );
}