import { Box, Divider, Stack, Text } from "@chakra-ui/react";

export function TextContent() {
    return (
        <Box display='flex' flexDirection='column' alignItems='center' justifyContent='center' p={20}>
            <Divider width='90px' border='2px solid' borderColor='gray.700' backgroundColor='red' />
            <Stack fontWeight={500} fontSize='36px' align='center' paddingTop='52px' >
                <Text>Vamos nessa?</Text>
                <Text>Então escolha seu continente</Text>
            </Stack>
        </Box>
    );
}