export type FileItem = {
  type: 'file' | 'folder';
  id: string;
  name: string;
  created_at: string;
  updated_at: string;
  files?: Array<FileItem>;
};

export type Folder = Omit<FileItem, 'type' | 'files'> & {
  type: 'folder';
  files: Array<FileItem>;
};

export type File = Omit<FileItem, 'type' | 'files'> & {
  type: 'file';
  size?: number;
};

export type TeamFolder = Omit<Folder, 'webUrl'> & {
  description: string;
};
