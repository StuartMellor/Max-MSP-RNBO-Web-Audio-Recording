import { createRoot } from 'react-dom/client';
import React from 'react';

import MaxLoader from './MaxLoader';

const App = () => {
    return <MaxLoader maxFileName="audiorecorder" />
}

const root = createRoot(document.getElementById('root'));
root.render(<App />);