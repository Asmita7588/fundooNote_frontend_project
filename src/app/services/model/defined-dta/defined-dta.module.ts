
export interface CreateNote {
  title:string;
  note:string;
}

export interface Collaborator {
  collaboratorId: number;
  email: string;
  userId: number;
  noteId: number;
}