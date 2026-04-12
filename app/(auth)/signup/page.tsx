import React from "react";
import Link from "next/link";
import { ArrowLeft, User, Lock, Mail } from "lucide-react";

export default function SignupPage() {
  return (
    <div className="min-h-screen bg-[#111111] flex items-center justify-center p-6 text-white selection:bg-[#FE5729] selection:text-white">
      {/* GLOWS */}
      <div className="absolute top-1/2 left-1/2 -translate-x-[60%] -translate-y-1/2 w-[700px] h-[700px] bg-white/[0.03] blur-[200px] rounded-full pointer-events-none" />

      <div className="w-full max-w-[540px] bg-[#1a1a1a]/80 backdrop-blur-xl border border-white/10 rounded-[40px] p-8 md:p-14 relative z-10 shadow-2xl ring-1 ring-white/5">
        <Link href="/" className="inline-flex items-center gap-2 text-sm font-semibold text-gray-400 hover:text-white transition-colors mb-8">
          <ArrowLeft size={16} /> Back to main site
        </Link>
        
        <div className="flex flex-col items-center text-center mb-10">
           <h1 className="text-4xl font-extrabold tracking-tight mb-3">Create Account</h1>
           <p className="text-gray-400 font-medium text-[15px] leading-relaxed max-w-sm">
             Join thousands of users managing business the smart way on Archiva.
           </p>
        </div>

        <form className="flex flex-col gap-6">
           <div className="grid grid-cols-2 gap-4">
              <div className="relative col-span-1">
                 <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                 <input 
                    type="text" 
                    placeholder="First name"
                    className="w-full bg-black/40 border border-white/10 text-white placeholder:text-gray-600 font-medium px-12 py-4 rounded-2xl focus:outline-none focus:border-[#FE5729]/50 focus:ring-1 focus:ring-[#FE5729]/30 transition-all font-sans text-sm md:text-base"
                 />
              </div>
              <div className="relative col-span-1">
                 <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                 <input 
                    type="text" 
                    placeholder="Last name"
                    className="w-full bg-black/40 border border-white/10 text-white placeholder:text-gray-600 font-medium px-12 py-4 rounded-2xl focus:outline-none focus:border-[#FE5729]/50 focus:ring-1 focus:ring-[#FE5729]/30 transition-all font-sans text-sm md:text-base"
                 />
              </div>
           </div>

           <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
              <input 
                 type="email" 
                 placeholder="Work Email"
                 className="w-full bg-black/40 border border-white/10 text-white placeholder:text-gray-600 font-medium px-12 py-4 rounded-2xl focus:outline-none focus:border-[#FE5729]/50 focus:ring-1 focus:ring-[#FE5729]/30 transition-all font-sans text-sm md:text-base"
              />
           </div>
           
           <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
              <input 
                 type="password" 
                 placeholder="Create password"
                 className="w-full bg-black/40 border border-white/10 text-white placeholder:text-gray-600 font-medium px-12 py-4 rounded-2xl focus:outline-none focus:border-[#FE5729]/50 focus:ring-1 focus:ring-[#FE5729]/30 transition-all font-sans text-sm md:text-base"
              />
           </div>

           <Link href="/" 
              
              className="mt-6 w-full bg-[#FE5729] text-white font-bold py-4 rounded-2xl shadow-[0_4px_14px_rgba(254,87,41,0.4)] hover:shadow-[0_6px_20px_rgba(254,87,41,0.6)] hover:-translate-y-0.5 transition-all text-[16px] flex items-center justify-center gap-2"
           >
              Complete Registration 
           </Link>
        </form>

        <p className="mt-8 text-center text-sm font-medium text-gray-400">
           By signing up, you agree to our <a href="#" className="underline hover:text-white transition-colors">Terms of Service</a> and <a href="#" className="underline hover:text-white transition-colors">Privacy Policy</a>
        </p>

        <p className="mt-8 pt-8 border-t border-white/5 text-center text-sm font-medium text-gray-400">
           Already have an account? <Link href="/login" className="text-white hover:text-[#FE5729] font-bold transition-colors underline-offset-4 hover:underline">Log in now</Link>
        </p>

      </div>
    </div>
  );
}
