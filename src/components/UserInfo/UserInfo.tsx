import { Todo } from '../../types/Todo';

interface TodoProps {
  todo: Todo | null;
}

export const UserInfo = ({ todo }: TodoProps) => {
  if (!todo || !todo.user) {
    return null;
  }

  return (
    <a className="UserInfo" href={`mailto:${todo.user.email}`}>
      {todo.user.name}
    </a>
  );
};
