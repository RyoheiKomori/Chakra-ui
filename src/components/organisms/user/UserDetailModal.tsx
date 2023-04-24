import { FC, memo } from "react";
import {
  Stack,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay
} from "@chakra-ui/react";
type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export const UserDetailModal: FC<Props> = memo((props) => {
  const { isOpen, onClose } = props;
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      autoFocus={false}
      motionPreset="slideInBottom"
    >
      <ModalOverlay>
        <ModalContent pb={6}>
          <ModalHeader>ユーザ詳細</ModalHeader>
          <ModalCloseButton />
          <ModalBody mx={4}>
            <Stack spacing={4}>
              <FormControl>
                <FormLabel>名前</FormLabel>
                <Input value="じゃけぇ" readOnly />
              </FormControl>
              <FormControl>
                <FormLabel>フルネーム</FormLabel>
                <Input value="Takumi Okada" readOnly />
              </FormControl>
              <FormControl>
                <FormLabel>MAIL</FormLabel>
                <Input value="1234@example.com" readOnly />
              </FormControl>
              <FormControl>
                <FormLabel>TEL</FormLabel>
                <Input value="090-1111-2222" readOnly />
              </FormControl>
            </Stack>
          </ModalBody>
        </ModalContent>
      </ModalOverlay>
    </Modal>
  );
});
