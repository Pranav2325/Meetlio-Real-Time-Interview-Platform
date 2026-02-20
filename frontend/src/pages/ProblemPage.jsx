import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { PROBLEMS } from "../data/problems.js";
import NavBar from "../components/NavBar.jsx";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import ProblemDescription from "../components/ProblemDescription.jsx";
import CodeEditor from "../components/CodeEditor.jsx";
import OutputPanel from "../components/OutputPanel.jsx";
import { executeCode } from "../lib/piston.js";
import toast from "react-hot-toast";

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

  const handleLanguageChange = (e) => {
    const newLang = e.target.value;
    setSelectedLanguage(newLang);
    setCode(currentProblem.starterCode[newLang]);
    setOutput(null);
  };
  const handleProblemChange = (newProblemId) => {
    navigate(`/problem/${newProblemId}`);
  };
  const triggerConfetti = () => {
    confetti({
      particleCount: 80,
      spread: 250,
      origin: { x: 0.2, y: 0.6 },
    });
    confetti({
      particleCount: 80,
      spread: 250,
      origin: { x: 0.8, y: 0.6 },
    });
  };

  const normalizeOutput = (output) => {
    return output
      .trim()
      .split("\n")
      .map((line) =>
        line
          .trim()
          .replace(/\[\s+/g, "[")
          .replace(/\s+\]/g, "]")
          .replace(/\s*,\s*/g, ","),
      )
      .filter((line) => line.length > 0)
      .join("\n");
  };

  const checkIfTestsPassed = (actualOutput, expectedOutput) => {
    const normalizedActual = normalizeOutput(actualOutput);
    const normalizedExpected = normalizeOutput(expectedOutput);

    return normalizedActual == normalizedExpected;
  };

  const handleRunCode = async () => {
    toast.dismiss(); // clear old toasts

    setIsRunning(true);
    setOutput(null);

    const loadingToast = toast.loading("Running code...");

    try {
      const result = await executeCode(selectedLanguage, code);

      setOutput(result);
      setIsRunning(false);
      toast.dismiss(loadingToast);

      if (!result.success) {
        toast.error(result.error || "Execution failed");
        return;
      }

      const expectedOutput = currentProblem.expectedOutput[selectedLanguage];

      const testPassed = checkIfTestsPassed(result.output, expectedOutput);

      if (testPassed) {
        triggerConfetti()
        toast.success("All tests passed! Great job! 🎉");
      } else {
        toast.error("Tests failed. Check your output.");
      }
    } catch (err) {
      setIsRunning(false);
      toast.dismiss(loadingToast);
      toast.error("Something went wrong while running the code.");
    }
  };

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
                <OutputPanel output={output}/>
              </Panel>
            </PanelGroup>
          </Panel>
        </PanelGroup>
      </div>
    </div>
  );
};

export default ProblemPage;
