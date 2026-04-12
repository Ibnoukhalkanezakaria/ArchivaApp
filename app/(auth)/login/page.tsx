import React from "react";
import Link from "next/link";
import { ArrowLeft, Lock, Mail } from "lucide-react";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-[#111111] flex items-center justify-center p-6 text-white selection:bg-[#FE5729] selection:text-white">
      {/* GLOWS */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FE5729]/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="w-full max-w-[480px] bg-[#1a1a1a]/80 backdrop-blur-xl border border-white/10 rounded-[32px] p-8 md:p-12 relative z-10 shadow-2xl ring-1 ring-white/5">
        <Link href="/" className="inline-flex items-center gap-2 text-sm font-semibold text-gray-400 hover:text-white transition-colors mb-10">
          <ArrowLeft size={16} /> Back to home
        </Link>
        
        <div className="flex flex-col items-center text-center mb-10">
           <div className="w-12 h-12 rounded-[14px] bg-white flex items-center justify-center p-3 shadow-[0_0_20px_rgba(255,255,255,0.15)] mb-6">
             <div className="w-full h-full bg-[#1C1C1C] rounded-[4px]"></div>
           </div>
           <h1 className="text-3xl font-extrabold tracking-tight mb-2">Welcome Back</h1>
           <p className="text-gray-400 font-medium text-sm">Sign in to your Archiva account</p>
        </div>

        <form className="flex flex-col gap-5">
           <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
              <input 
                 type="email" 
                 placeholder="Email address"
                 className="w-full bg-black/40 border border-white/10 text-white placeholder:text-gray-600 font-medium px-12 py-4 rounded-xl focus:outline-none focus:border-[#FE5729]/50 focus:ring-1 focus:ring-[#FE5729]/30 transition-all font-sans"
              />
           </div>
           
           <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
              <input 
                 type="password" 
                 placeholder="Password"
                 className="w-full bg-black/40 border border-white/10 text-white placeholder:text-gray-600 font-medium px-12 py-4 rounded-xl focus:outline-none focus:border-[#FE5729]/50 focus:ring-1 focus:ring-[#FE5729]/30 transition-all font-sans"
              />
           </div>

           <div className="flex items-center justify-between text-sm mt-2">
              <label className="flex items-center gap-2 cursor-pointer font-medium text-gray-400">
                 <input type="checkbox" className="accent-[#FE5729] w-4 h-4 rounded-sm bg-black/40 border-white/10" />
                 Remember me
              </label>
              <Link href="#" className="font-semibold text-[#FE5729] hover:text-white transition-colors hover:underline">
                 Forgot password?
              </Link>
           </div>

           <Link href="/" 
              
              className="mt-6 w-full bg-white text-[#1C1C1C] font-bold py-4 rounded-xl shadow-[0_4px_25px_rgba(255,255,255,0.15)] hover:shadow-[0_8px_30px_rgba(255,255,255,0.25)] hover:-translate-y-0.5 transition-all text-[15px] group flex items-center justify-center gap-2"
           >
              Sign In
           </Link>
        </form>

        <p className="mt-8 text-center text-sm font-medium text-gray-400">
           Don't have an account? <Link href="/signup" className="text-white hover:text-[#FE5729] font-bold transition-colors">Sign up here</Link>
        </p>

      </div>
    </div>
  );
}
