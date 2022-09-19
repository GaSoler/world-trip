import { Box, Flex, HStack, Text, Image } from "@chakra-ui/react";

export function BannerAndInfo() {
    return (
        <>
            <Box
                height={500}
                width='100%'
                backgroundImage="url('/banners/europe.svg')"
                backgroundRepeat='no-repeat'
                backgroundSize='100%'
            >
                <Text
                    fontWeight='600'
                    fontSize={48}
                    color='gray.100'
                    ml='140'
                    pt='369'
                >
                    Europa
                </Text>
            </Box>
                <Flex
                    paddingTop={20}
                    alignItems='center'
                    justifyContent='space-around'
                >
                    <Box>
                        <Text maxW='600px' fontWeight='400' fontSize={24} lineHeight='36px'>
                            A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
                        </Text>
                    </Box>
                    <Flex
                        justifyContent='space-between'
                        
                    >
                        <Flex direction='column' alignItems='center' justifyItems='center'>
                            <Text color='yellow.500' lineHeight='72px' fontWeight={600} fontSize={48}>50</Text>
                            <Text lineHeight='36px' fontWeight={600}fontSize={24}>países</Text>
                        </Flex>
                        <Flex direction='column' alignItems='center' justifyItems='center'>
                            <Text color='yellow.500' lineHeight='72px' fontWeight={600} fontSize={48}>60</Text>
                            <Text lineHeight='36px' fontWeight={600}fontSize={24}>línguas</Text>
                        </Flex>
                        <Flex direction='column' alignItems='center' justifyItems='center'>
                            <Text color='yellow.500' lineHeight='72px' fontWeight={600} fontSize={48}>27</Text>
                            <Text lineHeight='36px' fontWeight={600}fontSize={24}>cidades +100</Text>
                        </Flex>
                    </Flex>
                </Flex>

        </>
    );
}