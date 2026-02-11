import { Link } from "react-router";
import {
  ArrowRightIcon,
  CheckIcon,
  Code,
  Code2,
  Code2Icon,
  CodeXml,
  Shield,
  Users2,
  UsersIcon,
  Video,
  VideoIcon,
  ZapIcon,
} from "lucide-react";
import { SignInButton } from "@clerk/clerk-react";
const HomePage = () => {
  return (
    <div className="bg-gradient-to-br from-base-100 via-base-200 to-base-300">
      {/* navbar */}
      <nav className="bg-base-100/80 backdrop-blur-md border-b border-primary/20 sticky top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto p-4 flex items-center justify-between">
          {/* logo */}
          <Link
            to={"/"}
            className="flex items-center gap-3 hover:scale-105 transition-transform duration-200"
          >
            {/* img */}
            <div className="size-10 rounded-xl bg-primary flex items-center justify-center">
              <CodeXml />
            </div>
            {/* text */}
            <div className="flex flex-col">
              <span className="text-xl font-mono tracking-wider">Meetlio</span>
            </div>
          </Link>

          {/* auth btn */}
          <SignInButton mode="modal">
            <button className="group px-6 py-3 rounded-xl font-semibold text-sm shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 flex items-center gap-2 border">
              <span>Get Started</span>
              <ArrowRightIcon className="size-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </SignInButton>
        </div>
      </nav>
      {/* Hero section */}
      <div className="max-w-4xl mx-auto px-4 py-20 text-center">
        <div className="space-y-8">
          {/* Badge */}
          <div className="flex justify-center">
            <div className="badge badge-primary badge-lg rounded-xl">
              <Users2 className="size-4" />
              Built for 1-1 Interviews
            </div>
          </div>

          {/* Heading */}
          <h1 className="text-5xl lg:text-7xl leading-tight">
            <span className="font-bold">Code Together,</span>
            <br />
            <span className="font-bold bg-secondary px-3 rounded-xl">
              Learn Together.
            </span>
          </h1>

          {/* Description */}
          <p className="text-xl text-base-content/70 leading-relaxed mx-auto max-w-2xl">
            The ultimate platform for collaborative coding interviews and pair
            programming. Connect face-to-face, code in real-time, and ace your
            technical interviews.
          </p>

          {/* Feature Pills */}
          <div className="flex flex-wrap justify-center gap-3">
            <div className="badge badge-lg badge-secondary rounded-xl">
              <Video className="size-4 text-success" />
              Live Video Chat
            </div>
            <div className="badge badge-lg badge-secondary rounded-xl">
              <Code2 className="size-4 text-success" />
              Real-Time Coding
            </div>
            <div className="badge badge-lg badge-secondary rounded-xl">
              <Shield className="size-4 text-success" />
              Secure & Private Sessions
            </div>
          </div>

          {/* CTA */}
          <div className="flex justify-center">
            <SignInButton mode="modal">
              <button className="btn btn-outline rounded-xl btn-lg">
                Start Coding Now
                <ArrowRightIcon className="size-4" />
              </button>
            </SignInButton>
          </div>

          {/* Stats */}
          <div className="flex justify-center">
            <div className="stats stats-vertical lg:stats-horizontal bg-base-100 shadow-lg">
              <div className="stat">
                <div className="stat-value">5K+</div>
                <div className="stat-title">Active Users</div>
              </div>
              <div className="stat">
                <div className="stat-value">10K+</div>
                <div className="stat-title">Sessions</div>
              </div>
              <div className="stat">
                <div className="stat-value">99.9%</div>
                <div className="stat-title">Uptime</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* features section */}
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Everything You Need to{" "}
            <span className="text-white bg-primary rounded-xl px-2">
              Succeed
            </span>
          </h2>
          <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
            Powerful features designed to make your coding interviews seamless
            and productive
          </p>
        </div>
        {/* grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* f1 */}
          <div className="card bg-base-100 shadow-xl rounded-xl">
            <div className="card-body items-center text-center">
              <div className="size-16 bg-secondary rounded-2xl flex items-center justify-center mb-4">
              <VideoIcon className="size-8"/>
              </div>
              <h3 className="card-title">HD Video Call</h3>
              <p className="text-base-content/70">
              Crystal clear video and audio for seamless communication</p>
            </div>
          </div>

          <div className="card bg-base-100 shadow-xl rounded-xl">
            <div className="card-body items-center text-center">
              <div className="size-16 bg-secondary rounded-2xl flex items-center justify-center mb-4">
              <Code className="size-8"/>
              </div>
              <h3 className="card-title">Live code editor</h3>
              <p className="text-base-content/70">
              Collaborative in real-time with syntax highlighting and multiple language support</p>
            </div>
          </div>

          <div className="card bg-base-100 shadow-xl rounded-xl">
            <div className="card-body items-center text-center">
              <div className="size-16 bg-secondary rounded-2xl flex items-center justify-center mb-4">
              <UsersIcon className="size-8"/>
              </div>
              <h3 className="card-title">Easy Collaborations</h3>
              <p className="text-base-content/70">
              Share your screen, discuss solution, and learn from each other in real-time</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default HomePage;
