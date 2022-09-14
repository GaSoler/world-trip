import { Box, Flex, Image, Text } from "@chakra-ui/react";

export function Banner() {
    return (
        <Box
            height={368}
            width='100%'
            backgroundImage="url('/assets/background.png')"
            backgroundRepeat='no-repeat'
            backgroundSize='100% 90%'

        >
             <Flex
                width='100%'
                position='absolute'
                justify='space-between'
                p='80px 140px'
            >
                <Box
                    maxH={185}
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
                    <Text
                        color='gray.300'
                        fontSize='xl'
                        fontWeight='400'
                        maxW={524}
                        maxH={57}
                    >
                        Chegou a hora de tirar do papel a viagem que você sempre sonhou. 
                    </Text>
                </Box>

                <Image src='\assets\airplane.svg'/>
            </Flex>
        </Box>
    );
}