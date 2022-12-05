import { Routes, Route } from 'react-router-dom';

import { Files } from '@/pages/Files';

import '@/css/App.css';

export default function Router() {
  return (
    <Routes>
      <Route path='/files/*' element={<Files />} />
    </Routes>
  );
}
