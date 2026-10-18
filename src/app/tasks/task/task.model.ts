export interface task{
  id: string;
  userId: string;
  title: string;
  summary: string;
  dueDate: string;
}

export interface NewTaskDialog {
  title: string;
  summary: string;
  date: string;
}
