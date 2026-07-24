// import LeadForm from '../components/LeadForm';

// const LandingPage = () => {
//   return (
//     <div className="min-h-screen bg-gray-50 flex flex-col">
//       {/* Hero Section */}
//       <section className="relative overflow-hidden bg-dark-200 text-white pt-24 pb-32">
//         {/* Abstract shapes background */}
//         <div className="absolute top-0 right-0 -mr-32 -mt-32 w-[600px] h-[600px] rounded-full bg-brand-500/10 blur-3xl opacity-50 pointer-events-none"></div>
//         <div className="absolute bottom-0 left-0 -ml-32 -mb-32 w-[500px] h-[500px] rounded-full bg-blue-500/10 blur-3xl opacity-50 pointer-events-none"></div>

//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//           <div className="text-center max-w-3xl mx-auto mb-16 animate-slide-up">
//             <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
//               Manage your leads with <span className="text-brand-500">confidence</span>
//             </h1>
//             <p className="text-lg md:text-xl text-gray-400 mb-8">
//               The modern CRM built for speed. Capture leads seamlessly, track their progress, and close more deals without the clutter.
//             </p>
//             <div className="flex justify-center gap-4">
//               <a href="#features" className="px-6 py-3 border border-gray-600 rounded-md font-medium hover:bg-gray-800 transition-colors">
//                 Learn More
//               </a>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Features & Form Section */}
//       <section id="features" className="py-24 -mt-16 relative z-20">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid lg:grid-cols-2 gap-16 items-center">
//             {/* Features list */}
//             <div className="space-y-12">
//               <div>
//                 <h2 className="text-3xl font-bold text-gray-900 mb-4">Why choose LeadDesk?</h2>
//                 <p className="text-gray-600">Everything you need to manage your sales pipeline efficiently.</p>
//               </div>

//               <div className="space-y-8">
//                 <div className="flex gap-4">
//                   <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-brand-100 flex items-center justify-center text-brand-600">
//                     <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
//                     </svg>
//                   </div>
//                   <div>
//                     <h3 className="text-xl font-semibold text-gray-900 mb-2">Lightning Fast</h3>
//                     <p className="text-gray-600">Built on modern tech for instant loads and real-time updates.</p>
//                   </div>
//                 </div>

//                 <div className="flex gap-4">
//                   <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600">
//                     <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
//                     </svg>
//                   </div>
//                   <div>
//                     <h3 className="text-xl font-semibold text-gray-900 mb-2">Secure & Private</h3>
//                     <p className="text-gray-600">Enterprise-grade security keeps your client data safe.</p>
//                   </div>
//                 </div>

//                 <div className="flex gap-4">
//                   <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center text-purple-600">
//                     <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
//                     </svg>
//                   </div>
//                   <div>
//                     <h3 className="text-xl font-semibold text-gray-900 mb-2">Actionable Analytics</h3>
//                     <p className="text-gray-600">Track your progress from New to Closed with clear statuses.</p>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Form component */}
//             <div className="relative">
//               <div className="absolute inset-0 bg-gradient-to-tr from-brand-500/20 to-purple-500/20 rounded-2xl blur-2xl transform scale-105"></div>
//               <LeadForm />
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default LandingPage;




import LeadForm from "../components/LeadForm";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-dark-200 text-white pt-20 sm:pt-24 lg:pt-28 pb-20 sm:pb-24 lg:pb-32">
        {/* Background Blur */}
        <div className="absolute top-0 right-0 -mr-24 -mt-24 w-72 h-72 sm:w-[450px] sm:h-[450px] lg:w-[600px] lg:h-[600px] rounded-full bg-brand-500/10 blur-3xl opacity-50 pointer-events-none"></div>

        <div className="absolute bottom-0 left-0 -ml-24 -mb-24 w-64 h-64 sm:w-[380px] sm:h-[380px] lg:w-[500px] lg:h-[500px] rounded-full bg-blue-500/10 blur-3xl opacity-50 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 lg:mb-16 animate-slide-up">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-6">
              Manage your leads with{" "}
              <span className="text-brand-500">confidence</span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-gray-400 leading-7 max-w-2xl mx-auto mb-8">
              The modern CRM built for speed. Capture leads seamlessly, track
              their progress, and close more deals without the clutter.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="#features"
                className="w-full sm:w-auto px-6 py-3 border border-gray-600 rounded-md font-medium hover:bg-gray-800 transition-colors text-center"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features + Form */}
      <section
        id="features"
        className="py-16 sm:py-20 lg:py-24 -mt-8 sm:-mt-12 lg:-mt-16 relative z-20"
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start lg:items-center">
            {/* Left */}
            <div className="space-y-10">
              <div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  Why choose LeadDesk?
                </h2>

                <p className="text-gray-600 text-base sm:text-lg">
                  Everything you need to manage your sales pipeline
                  efficiently.
                </p>
              </div>

              <div className="space-y-8">
                {/* Feature 1 */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-brand-100 flex items-center justify-center text-brand-600">
                    <svg
                      className="w-5 h-5 sm:w-6 sm:h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>

                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                      Lightning Fast
                    </h3>

                    <p className="text-gray-600">
                      Built on modern tech for instant loads and real-time
                      updates.
                    </p>
                  </div>
                </div>

                {/* Feature 2 */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600">
                    <svg
                      className="w-5 h-5 sm:w-6 sm:h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                      />
                    </svg>
                  </div>

                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                      Secure & Private
                    </h3>

                    <p className="text-gray-600">
                      Enterprise-grade security keeps your client data safe.
                    </p>
                  </div>
                </div>

                {/* Feature 3 */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-purple-100 flex items-center justify-center text-purple-600">
                    <svg
                      className="w-5 h-5 sm:w-6 sm:h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                      />
                    </svg>
                  </div>

                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                      Actionable Analytics
                    </h3>

                    <p className="text-gray-600">
                      Track every lead from New to Closed with a clean workflow.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right */}
            <div className="relative w-full max-w-xl mx-auto">
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-500/20 to-purple-500/20 rounded-2xl blur-2xl scale-105"></div>

              <LeadForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;