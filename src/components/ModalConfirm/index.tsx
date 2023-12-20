import * as S from "./styles";

import Modal from "react-modal";

interface ModalProps {
  isOpen: boolean;
  onRequestClose: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onDeleteTask: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export function ModalConfirm({
  isOpen,
  onRequestClose,
  onDeleteTask,
}: ModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <S.Content>
        <strong>Excluir tarefa</strong>
        <p>Você tem certeza que gostaria de excluir esta tarefa?</p>
        <S.OptionDelete>
          <button onClick={onRequestClose}>Cancelar</button>
          <button onClick={onDeleteTask}>Sim, excluir</button>
        </S.OptionDelete>
      </S.Content>
    </Modal>
  );
}
