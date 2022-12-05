import { FileBrowser } from '@/components/FileBrowser';
import PageContainer from '@/components/PageContainer';
import { mockFileData } from '@test/mock-data';

import type { Folder } from '@types';

export function Files() {
  return (
    <PageContainer name='files'>
      <div className='flex flex-col h-full items-center max-w-3xl mx-auto'>
        <h2 className='text-center text-lg text-bold py-2'>Files</h2>
        <div className='flex flex-1 flex-col h-full w-full overflow-y-auto'>
          <FileBrowser rootFolder={mockFileData as Folder} />
        </div>
      </div>
    </PageContainer>
  );
}
