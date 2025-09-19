// "use client";

// import { useState, useEffect } from "react";
// import { useRouter } from "next/navigation";
// import { ThemeProvider, useTheme } from "next-themes";
// import { AnimatePresence, motion } from "framer-motion";
// import { Check, AlertTriangle, ArrowLeft, X } from "lucide-react";
// import { Button } from "@/components/ui/button";

// interface RSVPFormData {
//   fullName: string;
//   email: string;
//   attendance: string;
// }

// interface RSVPFormErrors {
//   fullName?: string;
//   email?: string;
//   attendance?: string;
//   form?: string;
// }

// const defaultFormData: RSVPFormData = {
//   fullName: "",
//   email: "",
//   attendance: "",
// };

// const attendanceOptions = [
//   "Junicorn Summit (29th May, 2025)",
//   "AI Summit (30th May, 2025)",
//   "Junicorn + AI Summit (29th & 30th, 2025)",
// ];

// function RSVPFormContent({
//   isPopup = false,
//   isOpen = true,
//   setIsOpen,
// }: {
//   isPopup?: boolean;
//   isOpen?: boolean;
//   setIsOpen?: (open: boolean) => void;
// }) {
//   const router = useRouter();
//   const { theme } = useTheme();
//   const [formData, setFormData] = useState<RSVPFormData>(defaultFormData);
//   const [errors, setErrors] = useState<RSVPFormErrors>({});
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submitState, setSubmitState] = useState<"idle" | "success" | "error" | "duplicate">("idle");
//   const [mounted, setMounted] = useState(false);

//   // Set mounted to true after the component mounts on the client
//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   const validateForm = (): boolean => {
//     const newErrors: RSVPFormErrors = {};

//     if (!formData.fullName.trim()) {
//       newErrors.fullName = "Full name is required";
//     }

//     if (!formData.email.trim()) {
//       newErrors.email = "Email is required";
//     } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
//       newErrors.email = "Invalid email format";
//     }

//     if (!formData.attendance) {
//       newErrors.attendance = "Please select an attendance option";
//     }

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const resetForm = () => {
//     setFormData(defaultFormData);
//     setErrors({});
//     setSubmitState("idle");
//     setIsSubmitting(false);
//     if (isPopup && setIsOpen) setIsOpen(false);
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     if (!validateForm()) return;

//     setIsSubmitting(true);
//     setSubmitState("idle");

//     try {
//       const response = await fetch("/api/rsvp", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       });

//       const data = await response.json();

//       if (!response.ok) {
//         if (response.status === 409) {
//           setSubmitState("duplicate");
//           setErrors({ email: data.message || "This email is already registered for RSVP" });
//         } else {
//           throw new Error(data.message || "RSVP submission failed");
//         }
//       } else {
//         setSubmitState("success");
//         setTimeout(() => {
//           if (isPopup) {
//             resetForm();
//           } else {
//             router.push("/");
//           }
//         }, 3500);
//       }
//     } catch (error) {
//       console.error("RSVP error:", error);
//       setSubmitState("error");
//       setErrors({
//         form: error instanceof Error ? error.message : "An unexpected error occurred during RSVP",
//       });
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//     setErrors((prev) => ({ ...prev, [name]: undefined }));
//   };

//   // Don't render theme-dependent content until mounted
//   if (!mounted) {
//     return null; // or a minimal fallback UI if needed
//   }

//   const inputFieldClass = `w-full px-4 py-2 rounded-lg border transition-all duration-200
//     ${theme === "dark"
//       ? "bg-gray-800 text-white border-gray-700 focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
//       : "bg-gray-50 text-gray-900 border-gray-300 focus:ring-2 focus:ring-blue-500 placeholder-gray-500"
//     } focus:outline-none focus:border-transparent`;

//   const formContent = (
//     <form onSubmit={handleSubmit} className={`space-y-6 ${isPopup ? "p-4" : "p-6 sm:p-8"}`}>
//     <div className="space-y-5">
//       <div>
//         <label htmlFor="fullName" className={`block text-sm font-medium mb-1.5 ${theme === "dark" ? "text-white" : "text-gray-700"}`}>
//         Full Name <span className="text-red-400">*</span>
//         </label>
//         <input
//         id="fullName"
//         name="fullName"
//         type="text"
//         value={formData.fullName}
//         onChange={handleChange}
//         className={`${inputFieldClass} ${errors.fullName ? "border-red-500" : ""}`}
//         placeholder="Enter your full name"
//         />
//         {errors.fullName && (
//         <motion.p
//           initial={{ opacity: 0, y: -5 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="text-red-400 text-xs mt-1"
//         >
//           {errors.fullName}
//         </motion.p>
//         )}
//       </div>
//       <div>
//         <label htmlFor="email" className={`block text-sm font-medium mb-1.5 ${theme === "dark" ? "text-white" : "text-gray-700"}`}>
//         Email <span className="text-red-400">*</span>
//         </label>
//         <input
//         id="email"
//         name="email"
//         type="email"
//         value={formData.email}
//         onChange={handleChange}
//         className={`${inputFieldClass} ${errors.email ? "border-red-500" : ""}`}
//         placeholder="Enter your email"
//         />
//         {errors.email && (
//         <motion.p
//           initial={{ opacity: 0, y: -5 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="text-red-400 text-xs mt-1"
//         >
//           {errors.email}
//         </motion.p>
//         )}
//       </div>
//       <div>
//         <label className={`block text-base font-medium mb-1.5 ${theme === "dark" ? "text-white" : "text-gray-700"}`}>
//         Which day(s) will you be attending? <span className="text-red-400">*</span>
//         </label>
//         <div className="space-y-3 mt-2">
//         {attendanceOptions.map((option) => (
//           <label key={option} className="flex items-center space-x-3">
//             <input
//             type="radio"
//             name="attendance"
//             value={option}
//             checked={formData.attendance === option}
//             onChange={handleChange}
//             className={`h-4 w-4 ${theme === "dark" ? "text-blue-500 border-gray-600" : "text-blue-500 border-gray-300"} focus:ring-blue-500`}
//             />
//             <span className={`text-sm ${theme === "dark" ? "text-white" : "text-gray-700"}`}>{option}</span>
//           </label>
//         ))}
//         </div>
//         {errors.attendance && (
//         <motion.p
//           initial={{ opacity: 0, y: -5 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="text-red-400 text-xs mt-1"
//         >
//           {errors.attendance}
//         </motion.p>
//         )}
//       </div>
//     </div>

//       <div className={`${isPopup ? "pt-4" : "pt-6 border-t"} ${theme === "dark" ? "border-gray-700/50" : "border-gray-200"}`}>
//         <div className={`flex flex-col sm:flex-row ${isPopup ? "" : "sm:justify-center"} gap-3`}>
//           <Button
//             type="submit"
//             disabled={isSubmitting}
//             className={`relative overflow-hidden w-full sm:w-48 py-2.5 rounded-lg font-medium transition-all duration-200
//               ${theme === "dark"
//                 ? "bg-blue-500 hover:bg-blue-600 text-white"
//                 : "bg-blue-500 hover:bg-blue-600 text-white"
//               }`}
//           >
//             <AnimatePresence mode="wait">
//               {isSubmitting && submitState === "idle" && (
//                 <motion.div
//                   key="loading"
//                   className="absolute inset-0 flex items-center justify-center"
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   exit={{ opacity: 0 }}
//                 >
//                   <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
//                 </motion.div>
//               )}
//               {submitState === "success" && (
//                 <motion.div
//                   key="success"
//                   className="absolute inset-0 flex items-center justify-center"
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                 >
//                   <Check className="w-5 h-5 mr-2" /> RSVP Successful
//                 </motion.div>
//               )}
//               {submitState === "error" && (
//                 <motion.div
//                   key="error"
//                   className="absolute inset-0 flex items-center justify-center"
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                 >
//                   <AlertTriangle className="w-5 h-5 mr-2" /> RSVP Failed
//                 </motion.div>
//               )}
//               {submitState === "duplicate" && (
//                 <motion.div
//                   key="duplicate"
//                   className="absolute inset-0 flex items-center justify-center"
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                 >
//                   <AlertTriangle className="w-5 h-5 mr-2" /> Already RSVPed
//                 </motion.div>
//               )}
//               <span className={submitState !== "idle" ? "opacity-0" : "opacity-100"}>
//                 {isPopup ? "Submit" : "Submit RSVP"}
//               </span>
//             </AnimatePresence>
//           </Button>
//           <Button
//             type="button"
//             variant="outline"
//             className={`w-full sm:w-48 py-2.5 rounded-lg font-medium transition-all duration-200
//               ${theme === "dark"
//                 ? "border-gray-600 text-white hover:bg-gray-700/30"
//                 : "border-gray-300 text-gray-700 hover:bg-gray-50"
//               }`}
//             onClick={() => (isPopup ? resetForm() : router.push("/"))}
//           >
//             Cancel
//           </Button>
//         </div>
//         {errors.form && (
//           <motion.div
//             className={`mt-4 p-4 rounded-lg border ${theme === "dark" ? "bg-red-900/50 border-red-800/50" : "bg-red-50 border-red-200"}`}
//             initial={{ opacity: 0, y: -5 }}
//             animate={{ opacity: 1, y: 0 }}
//           >
//             <p className={`text-sm ${theme === "dark" ? "text-red-400" : "text-red-600"}`}>{errors.form}</p>
//           </motion.div>
//         )}
//       </div>
//     </form>
//   );

//   if (!isPopup) {
//     return (
//       <div className={`min-h-screen ${theme === "dark" ? "bg-[#020817]" : "bg-gray-100"}`}>
//         <div className="container mx-auto px-4 py-8 sm:py-12 relative">
//           <Button
//             variant="ghost"
//             className={`absolute left-4 top-6 sm:left-6 text-base ${theme === "dark" ? "text-blue-400 hover:bg-blue-900/30" : "text-blue-500 hover:bg-blue-50"}`}
//             onClick={() => router.push("/")}
//           >
//             <ArrowLeft className="h-5 w-5 mr-2" /> Back
//           </Button>
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//             className="max-w-lg mx-auto mt-16 sm:mt-20"
//           >
//             <div className="mb-8 text-center">
//               <h1 className={`text-2xl sm:text-3xl font-bold ${theme === "dark" ? "text-white" : "text-gray-900"} mb-3`}>
//                 RSVP Form
//               </h1>
//               <p className={`text-base ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>
//                 Let us know which day(s) you'll be joining us for the summit!
//               </p>
//             </div>
//             <motion.div
//               className={`rounded-xl shadow-lg border ${theme === "dark" ? "bg-[#1c212f] border-white/20" : "bg-white border-gray-200"}`}
//               initial={{ scale: 0.95 }}
//               animate={{ scale: 1 }}
//               transition={{ duration: 0.3 }}
//             >
//               {formContent}
//             </motion.div>
//             <motion.div
//               className="mt-6 text-center text-sm"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 0.5 }}
//             >
//             </motion.div>
//           </motion.div>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <AnimatePresence>
//       {isOpen && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm z-50 p-4">
//           <motion.div
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -20 }}
//             transition={{ duration: 0.2 }}
//             className={`rounded-xl shadow-xl w-full max-w-md border ${theme === "dark" ? "bg-[#1c212f] text-white border-white/20" : "bg-white text-gray-900 border-gray-200"}`}
//           >
//             <div className={`flex justify-between items-center p-4 border-b ${theme === "dark" ? "border-gray-700" : "border-gray-200"}`}>
//               <h2 className="text-lg font-semibold">RSVP for ISF Global Summits</h2>
//               <button
//                 onClick={resetForm}
//                 className={`p-1 rounded-full ${theme === "dark" ? "text-white hover:text-red-500 hover:bg-gray-700" : "text-gray-600 hover:text-red-500 hover:bg-gray-100"}`}
//               >
//                 <X className="w-6 h-6" />
//               </button>
//             </div>
//             {formContent}
//           </motion.div>
//         </div>
//       )}
//     </AnimatePresence>
//   );
// }

// export default function RSVPForm(props: {
//   isPopup?: boolean;
//   isOpen?: boolean;
//   setIsOpen?: (open: boolean) => void;
// }) {
//   return (
//     <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
//       <RSVPFormContent {...props} />
//     </ThemeProvider>
//   );
// }




"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function RSVPFormContent() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-[#020817] flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto text-center"
      >
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
          RSVPs Have Closed
        </h1>
        <p className="text-sm md:text-base text-white/90 mb-8 max-w-2xl mx-auto">
          The ISF Global Junicorn & AI Summit 2025 has concluded. Thank you for your interest.
        </p>
        <Button
          variant="ghost"
          className="w-full sm:w-64 h-10 text-blue-400 hover:bg-blue-900/30"
          onClick={() => router.push("/")}
        >
          <ArrowLeft className="mr-2 h-5 w-5" />
          Back to Main Site
        </Button>
      </motion.div>
    </div>
  );
}