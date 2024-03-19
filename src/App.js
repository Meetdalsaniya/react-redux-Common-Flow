import { useState } from 'react';
import './App.css';
import MainLayout from './components/employee/uploadExcel';

function App() {
  const [file, setFile] = useState("")
  const handleDrop = (acceptedFiles) => {
    if (acceptedFiles.length > 0) {
      const files = acceptedFiles[0];
      setFile({
        files,
        preview: URL.createObjectURL(files),
      });
      // setError(null);
    } else {
      // setError('Please select a file');
    }
  };

  return (
    <div className="App">
      <MainLayout file={file} onDrop={handleDrop} />
    </div>
  );
}

export default App;
