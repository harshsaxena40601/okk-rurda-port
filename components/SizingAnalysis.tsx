import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function SizingAnalysis() {
  const [expandedSection, setExpandedSection] = useState('issues');

  const issues = [
    {
      title: "Inconsistent Card Heights",
      problem: "Dev and Video mode cards have different aspect ratios but no explicit height constraints",
      code: "Dev: min-w-[400px-440px] | Video: min-w-[420px-500px]",
      solution: "Set explicit h-full or min-h on parent container"
    },
    {
      title: "Scroll Container Height Mismatch",
      problem: "The flex container doesn't have a defined height, causing vertical alignment issues",
      code: "No explicit height on scroll container div",
      solution: "Add h-auto or min-h-[600px] to scrollContainerRef"
    },
    {
      title: "Mobile Width Issues",
      problem: "90vw on mobile may be too wide or too narrow depending on screen",
      code: "min-w-[90vw] can exceed safe viewport on small screens",
      solution: "Use responsive values: sm:min-w-[95vw] for better mobile fit"
    },
    {
      title: "Image Container Sizing (Video Mode)",
      problem: "aspect-video doesn't guarantee consistent sizing across devices",
      code: "aspect-video on variable-width containers",
      solution: "Use aspect-video with explicit max-w or combine with min-h"
    },
    {
      title: "Dev Card Image Height",
      problem: "Fixed h-52 on image may not scale well with responsive card widths",
      code: "h-52 (208px) fixed height",
      solution: "Use aspect-ratio or h-1/3 for responsive scaling"
    }
  ];

  const solutions = [
    {
      label: "Solution 1: Set Scroll Container Height",
      code: `<div 
  ref={scrollContainerRef}
  className="flex gap-4 md:gap-6 overflow-x-auto pb-8 snap-x snap-mandatory -mx-6 px-6 md:mx-0 md:px-0 [&::-webkit-scrollbar]:hidden min-h-[600px] md:min-h-[700px]"
  style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
>`
    },
    {
      label: "Solution 2: Fix Mobile Card Width",
      code: `// Change from:
min-w-[90vw] sm:min-w-[400px]

// To:
min-w-[92vw] xs:min-w-[350px] sm:min-w-[400px]`
    },
    {
      label: "Solution 3: Responsive Image Heights",
      code: `// Dev mode - replace fixed h-52:
<div className="relative h-40 sm:h-48 md:h-52 overflow-hidden">

// Video mode - improve aspect ratio handling:
<div className="relative aspect-video min-h-[200px] md:min-h-[250px] rounded-2xl overflow-hidden">`
    },
    {
      label: "Solution 4: Enforce Card Height Consistency",
      code: `// Wrap each card in container with explicit height:
<div className="h-full flex flex-col">
  <div className="group h-full bg-[#0F1115] border... flex flex-col">
    {/* existing content */}
  </div>
</div>`
    },
    {
      label: "Solution 5: Add CSS Custom Properties",
      code: `// In your CSS or style block:
@layer components {
  .project-card-container {
    min-height: 600px;
    @apply md:min-h-[700px];
  }
  
  .project-card {
    @apply h-full flex flex-col;
  }
}`
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white p-6 md:p-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
          Featured Projects Sizing Issues
        </h1>
        <p className="text-slate-300 mb-8">Analysis of your Projects component and solutions</p>

        {/* Issues Section */}
        <div className="mb-8">
          <button
            onClick={() => setExpandedSection(expandedSection === 'issues' ? '' : 'issues')}
            className="w-full flex items-center justify-between bg-slate-700 hover:bg-slate-600 p-4 rounded-lg transition-colors mb-4"
          >
            <h2 className="text-xl font-bold">🔴 Identified Issues</h2>
            <ChevronDown size={20} className={`transform transition-transform ${expandedSection === 'issues' ? 'rotate-180' : ''}`} />
          </button>
          
          {expandedSection === 'issues' && (
            <div className="space-y-3">
              {issues.map((issue, idx) => (
                <div key={idx} className="bg-slate-800 border border-slate-700 rounded-lg p-4 hover:border-blue-500/30 transition-colors">
                  <h3 className="font-bold text-blue-300 mb-2">{issue.title}</h3>
                  <p className="text-slate-300 text-sm mb-2"><strong>Problem:</strong> {issue.problem}</p>
                  <p className="text-slate-400 text-xs font-mono bg-slate-900 p-2 rounded mb-2">{issue.code}</p>
                  <p className="text-slate-300 text-sm"><strong className="text-green-300">Fix:</strong> {issue.solution}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Solutions Section */}
        <div className="mb-8">
          <button
            onClick={() => setExpandedSection(expandedSection === 'solutions' ? '' : 'solutions')}
            className="w-full flex items-center justify-between bg-emerald-700 hover:bg-emerald-600 p-4 rounded-lg transition-colors mb-4"
          >
            <h2 className="text-xl font-bold">🟢 Recommended Solutions</h2>
            <ChevronDown size={20} className={`transform transition-transform ${expandedSection === 'solutions' ? 'rotate-180' : ''}`} />
          </button>
          
          {expandedSection === 'solutions' && (
            <div className="space-y-4">
              {solutions.map((solution, idx) => (
                <div key={idx} className="bg-slate-800 border border-slate-700 rounded-lg p-4">
                  <h3 className="font-bold text-emerald-300 mb-3">{solution.label}</h3>
                  <pre className="bg-slate-900 p-4 rounded overflow-x-auto text-xs text-green-300 border border-slate-700">
                    <code>{solution.code}</code>
                  </pre>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Quick Fix Priority */}
        <div className="bg-gradient-to-r from-orange-900 to-red-900 border border-orange-500 rounded-lg p-6">
          <h3 className="text-lg font-bold mb-3">⚡ Quick Fix Priority (Do These First)</h3>
          <ol className="space-y-2 text-sm">
            <li><strong>1. Add min-h to scroll container</strong> - This fixes 70% of sizing issues</li>
            <li><strong>2. Make image heights responsive</strong> - Prevents overflow on mobile</li>
            <li><strong>3. Adjust mobile card width</strong> - Improves viewport fit</li>
            <li><strong>4. Test across breakpoints</strong> - sm, md, lg, xl screens</li>
          </ol>
        </div>
      </div>
    </div>
  );
}
