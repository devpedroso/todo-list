import { Checkbox } from "components/Checkbox";
import { TrashIcon } from "components/TrashIcon";

import * as S from "./styles";
import { ModalConfirm } from "components/ModalConfirm";
import { useState } from "react";

type TaskCardProps = {
  id: string;
  task: string;
  isTaskFinished: boolean;
  date: string;
  onChangeFinishedTask: (id: string) => void;
  onDeleteTask: (id: string) => void;
};

export function TaskCard({
  id,
  task,
  isTaskFinished,
  date,
  onChangeFinishedTask,
  onDeleteTask,
}: TaskCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  function handleDeleteTaskById(event: React.MouseEvent<HTMLButtonElement>) {
    event.stopPropagation();
    onDeleteTask(id);
  }

  function handleChangeFinishedTask() {
    onChangeFinishedTask(id);
  }

  function handleOpenCloseModal(event: React.MouseEvent<HTMLButtonElement>) {
    event.stopPropagation();
    setIsOpen((isOpen) => !isOpen);
  }

  return (
    <S.TaskCard onClick={handleChangeFinishedTask} role="button">
      <Checkbox checked={isTaskFinished} onChange={handleChangeFinishedTask} />
      <S.TaskText isTaskFinished={isTaskFinished}>{task}</S.TaskText>
      <S.DateHour>{date}</S.DateHour>
      <S.DeleteTaskButton
        type="button"
        onClick={handleOpenCloseModal}
        aria-label="Excluir tarefa"
        title="Excluir tarefa"
      >
        <TrashIcon />
      </S.DeleteTaskButton>

      <ModalConfirm
        isOpen={isOpen}
        onRequestClose={handleOpenCloseModal}
        onDeleteTask={handleDeleteTaskById}
      />
    </S.TaskCard>
  );
}
