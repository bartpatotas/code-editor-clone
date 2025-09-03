import { useEffect } from 'react';

interface KeyboardShortcutsProps {
  onRun: () => void;
  onSave: () => void;
  onReset: () => void;
  onToggleTheme: () => void;
  onToggleSettings: () => void;
}

const KeyboardShortcuts = ({ onRun, onSave, onReset, onToggleTheme, onToggleSettings }: KeyboardShortcutsProps) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Ctrl/Cmd + Enter: Ejecutar código
      if ((event.ctrlKey || event.metaKey) && event.key === 'Enter') {
        event.preventDefault();
        onRun();
      }

      // Ctrl/Cmd + S: Guardar proyecto
      if ((event.ctrlKey || event.metaKey) && event.key === 's') {
        event.preventDefault();
        onSave();
      }

      // Ctrl/Cmd + R: Reset (con Shift para evitar recarga de página)
      if ((event.ctrlKey || event.metaKey) && event.shiftKey && event.key === 'R') {
        event.preventDefault();
        onReset();
      }

      // Ctrl/Cmd + D: Cambiar tema
      if ((event.ctrlKey || event.metaKey) && event.key === 'd') {
        event.preventDefault();
        onToggleTheme();
      }

      // Ctrl/Cmd + ,: Abrir configuración
      if ((event.ctrlKey || event.metaKey) && event.key === ',') {
        event.preventDefault();
        onToggleSettings();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onRun, onSave, onReset, onToggleTheme, onToggleSettings]);

  return null; // Este componente no renderiza nada
};

export default KeyboardShortcuts;
