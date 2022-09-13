import { Box, Flex, Image, Stack, Text } from "@chakra-ui/react";

export function Banner() {
    return (
        <Flex 
            w='100%'
            display='flex'
            alignItems='cen'
        >
            <Image position='relative' w='100%' src="\assets\background.svg" />
            <Box
                position='absolute'
                paddingTop={20}
                paddingLeft={35}
            >
                <Text 
                    color='gray.100'
                    fontSize='4xl'
                    maxW={426}
                    maxH={108}
                >
                    5 Continentes,
                    <br/>
                    infinitas possibilidades.
                </Text>
            </Box>

        </Flex>
    );
}