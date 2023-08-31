import { Box, Button, Flex, useDisclosure, Heading } from "@/app/chakra";
import { Image } from "@/app/chakra-next";
import HistoryModal from "./HistoryModal";

const Navbar = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	return (
		<Flex justifyContent={"space-between"} py={6} alignItems={"center"}>
			<Box position={"relative"} aspectRatio={5 / 3} minHeight={20}>
				<Image src={"/ia.png"} fill alt='github logo'/>
			</Box>
			<Box>
				<Heading>GIT BUDDY GLIMPSE</Heading>
			</Box>
			<Box>
				<Button size='md' colorScheme='whatsapp' onClick={onOpen}>
					Search History
				</Button>
			</Box>

			{isOpen && <HistoryModal isOpen={isOpen} onClose={onClose} />}
		</Flex>
	);
};

export default Navbar;
