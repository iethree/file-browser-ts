import { Breadcrumbs } from 'react-daisyui';
import { FolderOpenIcon } from '@heroicons/react/24/solid';

import type { Folder } from '@types';

export const FolderNavPath = ({
  folders,
  onFolderSelect,
}: {
  folders: Folder[];
  onFolderSelect: (folders: Folder[]) => void;
}) => {
  return (
    <Breadcrumbs
      className='sticky top-0 w-full bg-base-100 p-2 flex-shrink-0 z-20 text-xs md:text-sm'
      data-testid='folder-nav-path'
    >
      {folders.map((folder, index) => (
        <Breadcrumbs.Item
          className={`font-bold cursor-pointer hover:text-primary`}
          key={folder.id}
          onClick={() => onFolderSelect(folders.slice(0, index + 1))}
        >
          <FolderOpenIcon className='w-5 mr-2' />
          {folder.name ?? '/'}
        </Breadcrumbs.Item>
      ))}
    </Breadcrumbs>
  );
};
