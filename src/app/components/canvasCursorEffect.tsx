'use client';

import useCanvasCursor from '../../hooks/useCanvasCursor';

const CanvasCursor = () => {
  useCanvasCursor();

  return <canvas className='pointer-events-none fixed inset-0 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text animate-text-glow' id='canvas' />;
};
export default CanvasCursor;
