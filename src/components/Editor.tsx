import React from 'react';

interface EditorProps {
  language: string;
  displayName: string;
  value: string;
  onChange: (value: string) => void;
  theme?: 'dark' | 'light';
}

const Editor: React.FC<EditorProps> = ({ language, displayName, value, onChange, theme = 'dark' }) => {
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange(e.target.value);
  };

  const getIcon = () => {
    switch (language) {
      case 'xml':
        return '🌐';
      case 'css':
        return '🎨';
      case 'javascript':
        return '⚡';
      default:
        return '📄';
    }
  };

  const getPlaceholder = () => {
    switch (language) {
      case 'xml':
        return `<!-- Escribe tu HTML aquí -->
<div>
  <h1>¡Hola Mundo!</h1>
  <p>Este es mi primer proyecto</p>
</div>`;
      case 'css':
        return `/* Escribe tu CSS aquí */
body {
  font-family: Arial, sans-serif;
  background: #f0f0f0;
}

h1 {
  color: #333;
  text-align: center;
}`;
      case 'javascript':
        return `// Escribe tu JavaScript aquí
console.log("¡Hola Mundo!");

function saludar() {
  alert("¡Hola desde JavaScript!");
}

// saludar();`;
      default:
        return 'Escribe tu código aquí...';
    }
  };

  return (
    <div className="flex flex-col flex-1 mx-1 first:ml-0 last:mr-0">
      <div
        className={`flex justify-between items-center px-4 py-2 font-medium transition-colors ${
          theme === 'dark' ? 'bg-gray-800 text-white border-gray-600' : 'bg-gray-200 text-gray-800 border-gray-300'
        } rounded-t-lg border-b`}>
        <span className="flex items-center gap-2">
          <span>{getIcon()}</span>
          {displayName}
        </span>
        <span className="text-xs opacity-70">{language.toUpperCase()}</span>
      </div>

      <div className={`flex-1 rounded-b-lg overflow-hidden ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'}`}>
        <textarea
          value={value}
          onChange={handleChange}
          placeholder={value ? '' : getPlaceholder()}
          className={`w-full h-full resize-none border-0 outline-none p-4 font-mono text-sm leading-relaxed transition-colors ${
            theme === 'dark'
              ? 'bg-gray-900 text-gray-100 placeholder-gray-500'
              : 'bg-white text-gray-900 placeholder-gray-400'
          } focus:ring-2 focus:ring-blue-500`}
          style={{
            fontFamily: "'Fira Code', 'Consolas', 'Monaco', 'Courier New', monospace",
            fontSize: '14px',
            lineHeight: '1.6',
            tabSize: 2,
          }}
          spellCheck={false}
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
          data-gramm="false"
          onKeyDown={e => {
            // Añadir indentación con Tab
            if (e.key === 'Tab') {
              e.preventDefault();
              const start = e.currentTarget.selectionStart;
              const end = e.currentTarget.selectionEnd;
              const value = e.currentTarget.value;
              const newValue = value.substring(0, start) + '  ' + value.substring(end);
              onChange(newValue);

              // Mantener la posición del cursor
              setTimeout(() => {
                e.currentTarget.selectionStart = e.currentTarget.selectionEnd = start + 2;
              }, 0);
            }
          }}
        />
      </div>
    </div>
  );
};

export default Editor;
