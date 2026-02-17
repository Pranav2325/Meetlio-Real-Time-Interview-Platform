import React from "react";
import Editor from "@monaco-editor/react";
import { LANGUAGE_CONFIG } from "../data/problems.js";
import { Loader2Icon, PlayIcon } from "lucide-react";

const CodeEditor = ({
  selectedLanguage,
  code,
  isRunning,
  onLanguageChange,
  onChangeCode,
  onRunCode,
}) => {
  return (
    <div className="h-full bg-base-300 flex flex-col">
      {/* header */}
      <div className="flex items-center justify-between px-4 py-3 bg-base-100 border-t border-base-100">
        {/* logo and language bar */}
        <div className="flex items-center gap-3">
          <img
            src={LANGUAGE_CONFIG[selectedLanguage].icon}
            alt={LANGUAGE_CONFIG[selectedLanguage].name}
            className="size-6"
          />
          <select
            className="select select-sm"
            value={selectedLanguage}
            onChange={onLanguageChange}
          >
            {Object.entries(LANGUAGE_CONFIG).map(([key, lang]) => (
              <option key={key} value={key}>
                {lang.name}
              </option>
            ))}
          </select>
        </div>
        {/* run code button */}
        <button
          className="btn btn-primary btn-sm gap-2"
          disabled={isRunning}
          onClick={onRunCode}
        >
          {isRunning ? (
            <>
              <Loader2Icon className="size-4 animate-spin" />
              Running...
            </>
          ) : (
            <>
              <PlayIcon className="size-4" />
              Run Code
            </>
          )}
        </button>
      </div>
      {/* actual editor */}
      <div className="flex-1">
        <Editor
          height={"100%"}
          language={LANGUAGE_CONFIG[selectedLanguage].monacoLang}
          value={code}
          onChange={onChangeCode}
          theme="vs-dark"
          options={{
            fontSize: 14,
            lineNumbers: "on",
            scrollBeyondLastLine: false,
            automaticLayout: true,
            minimap: { enabled: false },
          }}
        />
      </div>
    </div>
  );
};

export default CodeEditor;
