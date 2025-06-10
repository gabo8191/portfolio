import React, { useEffect, useRef, useState } from 'react';
import { useLocale } from '../../contexts/LocaleContext';
import type { TerminalCommand } from '../../types';
import { executeCommand, generatePrompt } from '../../utils/terminal';

interface TerminalProps {
  className?: string;
}

export const Terminal: React.FC<TerminalProps> = ({ className = '' }) => {
  const { t } = useLocale();
  const [commands, setCommands] = useState<TerminalCommand[]>([]);
  const [currentCommand, setCurrentCommand] = useState('');
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

  // Initialize with welcome message when component mounts or language changes
  useEffect(() => {
    setCommands([
      {
        command: '',
        output: `${t('terminal.welcome')} v1.0.0\n${t('terminal.typeHelp')}`,
        timestamp: new Date(),
      },
    ]);
  }, [t]);

  useEffect(() => {
    // Auto-focus the input when component mounts
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  useEffect(() => {
    // Scroll to bottom when new commands are added
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [commands]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!currentCommand.trim()) return;

    const output = executeCommand(currentCommand, t);
    const newCommand: TerminalCommand = {
      command: currentCommand,
      output,
      timestamp: new Date(),
    };

    if (currentCommand.toLowerCase() === 'clear') {
      setCommands([
        {
          command: '',
          output: `${t('terminal.welcome')} v1.0.0\n${t('terminal.typeHelp')}`,
          timestamp: new Date(),
        },
      ]);
    } else {
      setCommands(prev => [...prev, newCommand]);
    }

    // Add to history
    setCommandHistory(prev => [...prev, currentCommand]);
    setHistoryIndex(-1);
    setCurrentCommand('');
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const newIndex =
          historyIndex === -1
            ? commandHistory.length - 1
            : Math.max(0, historyIndex - 1);
        setHistoryIndex(newIndex);
        setCurrentCommand(commandHistory[newIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex >= 0) {
        const newIndex = historyIndex + 1;
        if (newIndex >= commandHistory.length) {
          setHistoryIndex(-1);
          setCurrentCommand('');
        } else {
          setHistoryIndex(newIndex);
          setCurrentCommand(commandHistory[newIndex]);
        }
      }
    }
  };

  const handleTerminalClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div className={`terminal ${className}`}>
      <div className="terminal-header">
        <div className="flex items-center">
          <div className="terminal-button close"></div>
          <div className="terminal-button minimize"></div>
          <div className="terminal-button maximize"></div>
        </div>
        <div className="flex-1 text-center">
          <span className="text-xs text-gray-400">
            {t('common.portfolio')} Terminal
          </span>
        </div>
      </div>

      <div
        ref={terminalRef}
        className="terminal-content cursor-text"
        onClick={handleTerminalClick}
      >
        {commands.map((cmd, index) => (
          <div key={index} className="mb-2">
            {cmd.command && (
              <div className="terminal-line">
                <span className="terminal-prompt">{generatePrompt()}</span>
                <span className="text-terminal-text">{cmd.command}</span>
              </div>
            )}
            {cmd.output && (
              <div className="text-terminal-text whitespace-pre-line mb-1">
                {cmd.output}
              </div>
            )}
          </div>
        ))}

        <form onSubmit={handleSubmit} className="terminal-line">
          <span className="terminal-prompt">{generatePrompt()}</span>
          <input
            ref={inputRef}
            type="text"
            value={currentCommand}
            onChange={e => setCurrentCommand(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 bg-transparent border-none outline-none text-terminal-text font-mono"
            autoComplete="off"
            spellCheck={false}
          />
          <span className="terminal-cursor"></span>
        </form>
      </div>
    </div>
  );
};
