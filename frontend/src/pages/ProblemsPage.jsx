import React from "react";
import NavBar from "../components/NavBar.jsx";
import { PROBLEMS } from "../data/problems.js";
import { ChevronRightIcon, CodeIcon } from "lucide-react";
import { getDifficultyBadgeClass } from "../lib/utils.js";
import { Link } from "react-router";

const ProblemsPage = () => {
  const problems = Object.values(PROBLEMS);
  const easyCount=problems.filter(p=>p.difficulty==="Easy").length;
  const mediumCount=problems.filter(p=>p.difficulty==="Medium").length;
  const hardCount=problems.filter(p=>p.difficulty==="Hard").length;

  return (
    <div className="min-h-screen bg-base-200">
      <NavBar />
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Practice Problems</h1>
          <p className="text-base-content/70">
            Sharpen your coding skills with these curated problems
          </p>
        </div>
        {/* problems list */}
        <div className="space-y-4">
          {problems.map((problem) => (
            <Link
              key={problem.id}
              to={`/problem/${problem.id}`}
              className="card bg-base-100 hover:scale-[1.01] transition-transform"
            >
              <div className="card-body">
                <div className="flex items-center justify-between gap-4">
                  {/* left part */}
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      {/* icon */}
                      <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center ">
                        <CodeIcon className="size-6" />
                      </div>
                      {/* title,difficuly and category */}

                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h1 className="text-xl font-bold">{problem.title}</h1>
                          <span
                            className={`badge ${getDifficultyBadgeClass(problem.difficulty)}`}
                          >
                            {problem.difficulty}
                          </span>
                        </div>
                        <p className="text-sm text-base-content/60">
                          {problem.category}
                        </p>
                      </div>
                    </div>
                    <p className="text-base-content/80 mb-3">
                      {problem.description.text}
                    </p>
                  </div>

                  {/* right part */}
                  <div className="flex items-center gap-2 bg-primary rounded-xl px-2 py-2">
                    <span className="font-medium ">Solve</span>
                    <ChevronRightIcon className="size-5" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        {/* stas */}
        <div className="mt-12 card bg-base-100 shadow-lg">
          <div className="card-body">
            <div className="stats stats-vertical lg:stats-horizontal">
              <div className="stat">
                <div className="stat-title">Total Problems</div>
                <div className="stat-value">{problems.length}</div>
              </div>
              <div className="stat">
                <div className="stat-title">Easy Problems</div>
                <div className="stat-value text-success">{easyCount}</div>
              </div>
              <div className="stat">
                <div className="stat-title">Medium Problems</div>
                <div className="stat-value text-warning">{mediumCount}</div>
              </div>
              <div className="stat">
                <div className="stat-title">Hard Problems</div>
                <div className="stat-value text-error">{hardCount}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProblemsPage;
