import React, { Component, ErrorInfo, ReactNode } from "react";
import { ShieldAlert } from "lucide-react";

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
}

export default class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error in component tree:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-[50vh] flex flex-col items-center justify-center p-8 text-center bg-slate-50 rounded-3xl border-2 border-slate-100 my-12 max-w-3xl mx-auto">
          <ShieldAlert className="h-12 w-12 text-amber-500 mb-4" />
          <h2 className="text-2xl font-black text-[#0B1F3A] mb-2">
            We couldn't complete the analysis.
          </h2>
          <p className="text-slate-600 font-medium max-w-md mx-auto">
            Showing demo business data instead.
          </p>
          <button
            onClick={() => window.location.reload()}
            className="mt-8 bg-[#0B1F3A] hover:bg-[#2563EB] text-white font-bold px-6 py-3 rounded-xl transition-all shadow-md cursor-pointer border-none"
          >
            Restart Journey
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
