const PageContainer = ({
  children,
  name = 'default',
}: {
  children: React.ReactNode;
  name: string;
}) => (
  <div
    className='w-screen h-screen overflow-auto'
    data-testid={`${name}-page-container`}
  >
    <div className='h-screen flex flex-col'>
      <div className='flex-1 flex-col overflow-auto'>{children}</div>
    </div>
  </div>
);

export default PageContainer;
