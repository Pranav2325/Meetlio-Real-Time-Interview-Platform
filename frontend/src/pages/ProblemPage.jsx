import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { PROBLEMS } from "../data/problems.js";
import NavBar from "../components/NavBar.jsx";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import ProblemDescription from "../components/ProblemDescription.jsx";
import CodeEditor from "../components/CodeEditor.jsx";
import OutputPanel from "../components/OutputPanel.jsx";

const ProblemPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [currentProblemId, setCurrentProblemId] = useState("two-sum");
  const [selectedLanguage, setSelectedLanguage] = useState("javascript");
  const [code, setCode] = useState(
    PROBLEMS[currentProblemId].starterCode.javascript,
  );
  const [output, setOutput] = useState(null);
  const [isRunning, setIsRunning] = useState(false);

  const currentProblem = PROBLEMS[currentProblemId];
  useEffect(() => {
    if (id && PROBLEMS[id]) {
      setCurrentProblemId(id);
      setCode(PROBLEMS[id].starterCode[selectedLanguage]);
      setOutput(null);
    }
  }, [id, selectedLanguage]);

  const handleLanguageChange = (e) => {};
  const handleProblemChange = (newProblemId) => {
    navigate(`/problem/${newProblemId}`);
  };
  const triggerConfetti = () => {};
  const checkIfTestsPassed = () => {};
  const handleRunCode = () => {};
  return (
    <div className="h-screen  bg-base-100 flex flex-col ">
      <NavBar />
      <div className="flex-1">
        <PanelGroup direction="horizontal">
          {/* left problem desc */}
          <Panel defaultSize={30} minSize={30}>
            <ProblemDescription
              problem={currentProblem}
              onProblemChange={handleProblemChange}
              allProblems={Object.values(PROBLEMS)}
            />
          </Panel>

          <PanelResizeHandle className="w-2 bg-base-300 hover:bg-primary transition-colors cursor-col-resize" />

          {/* right code editor */}
          <Panel defaultSize={30} minSize={30}>
            <PanelGroup direction="vertical">
              {/* top panel */}
              <Panel defaultSize={70} minSize={30}>
                <CodeEditor
                  selectedLanguage={selectedLanguage}
                  code={code}
                  isRunning={isRunning}
                  onLanguageChange={handleLanguageChange}
                  onChangeCode={setCode}
                  onRunCode={handleRunCode}
                />
              </Panel>
              <PanelResizeHandle className="h-2 bg-base-300 hover:bg-primary transition-colors cursor-row-resize" />
              {/* bottom pannel */}
              <Panel defaultSize={30} minSize={30}>
                <OutputPanel />
              </Panel>
            </PanelGroup>
          </Panel>
        </PanelGroup>
      </div>
    </div>
  );
};

export default ProblemPage;
