import { Flex, Image, Text } from "@chakra-ui/react";

export function TravelTypes() {
    return (
        <Flex
            width='100%'
            justifyContent='space-between'
        >
            <Flex
                direction='column'
                alignItems='center'
                justifyItems='center'
            >
                <Image src="\icons\cocktail.svg" />
                <Text 
                    paddingTop={6}
                    fontWeight='600'
                    fontSize='2xl'
                >
                    vida noturna
                </Text>
            </Flex>

            <Flex
                direction='column'
                alignItems='center'
                justifyItems='center'
            >
                <Image src="\icons\surf.svg" />
                <Text 
                    paddingTop={6}
                    fontWeight='600'
                    fontSize='2xl'
                >
                    praia
                </Text>
            </Flex>
            
            <Flex
                direction='column'
                alignItems='center'
                justifyItems='center'
            >
                <Image src="\icons\building.svg" />
                <Text 
                    paddingTop={6}
                    fontWeight='600'
                    fontSize='2xl'
                >
                    moderno
                </Text>
            </Flex>

            <Flex
                direction='column'
                alignItems='center'
                justifyItems='center'
            >
                <Image src="\icons\museum.svg" />
                <Text 
                    paddingTop={6}
                    fontWeight='600'
                    fontSize='2xl'
                >
                    clássico
                </Text>
            </Flex>

            <Flex
                direction='column'
                alignItems='center'
                justifyItems='center'
            >
                <Image src="\icons\earth.svg" />
                <Text 
                    paddingTop={6}
                    fontWeight='600'
                    fontSize='2xl'
                >
                    e mais...
                </Text>
            </Flex>
        </Flex>

    );
}