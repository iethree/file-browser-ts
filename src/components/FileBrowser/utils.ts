import type { Folder } from '@types';
import { slugify } from '@/utils/string';

// construct a stack of folders from slugified file names
export const getFolderStackFromPath = (
  pathStack: string[],
  rootFolder: Folder
): Folder[] => {
  const folderStack = [rootFolder];

  for (const folderName of pathStack) {
    if (!folderName) {
      return folderStack;
    }

    for (const fileItem of folderStack[folderStack.length - 1].files) {
      if (fileItem.type === 'folder' && slugify(fileItem.name) === folderName) {
        folderStack.push(fileItem as Folder);
        break;
      }
    }
  }

  return folderStack;
};

export const getPathFromFolderStack = (folderStack: Folder[]): string => {
  return folderStack.map((folder) => slugify(folder.name)).join('/');
};

export const isPathFromStack = (
  pathStack: string[],
  folderStack: Folder[]
): boolean => getPathFromFolderStack(folderStack) === pathStack.join('/');
