// "use client"

// import { useState, useMemo } from "react";
// import { useRouter } from "next/navigation";
// import { AnimatePresence, motion } from "framer-motion";
// import { Check, AlertTriangle, ArrowLeft, X, ExternalLink } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import PhoneInput from 'react-phone-input-2';
// import 'react-phone-input-2/lib/style.css';
// import Select from 'react-select';
// import countryList from 'react-select-country-list';
// import { defaultFormData, registrationTypes, arrivalLocations } from "@/constants/registrationForm";
// import { FormData, FormErrors, CountryOption } from "@/types/registrationForm";

// export default function RegisterForm({ isPopup = false, isOpen = true, setIsOpen }: {
//   isPopup?: boolean;
//   isOpen?: boolean;
//   setIsOpen?: (open: boolean) => void
// }) {
//   const router = useRouter();
//   const [formData, setFormData] = useState<FormData>(defaultFormData);
//   const [errors, setErrors] = useState<FormErrors>({});
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submitState, setSubmitState] = useState<"idle" | "success" | "error" | "duplicate">("idle");

//   const countryOptions = useMemo(() => countryList().getData(), []);

//   const validateForm = (): boolean => {
//     const newErrors: FormErrors = {};
//     const requiredFields: (keyof FormData)[] = [
//       'fullName', 'email', 'mobile', 'organization', 'designation',
//       'city', 'country', 'registrationType'
//     ];
  
//     requiredFields.forEach(field => {
//       if (!formData[field] || !formData[field].trim()) {
//         newErrors[field] = `${field.charAt(0).toUpperCase() + field.slice(1).replace(/([A-Z])/g, ' $1').trim()} is required`;
//       }
//     });
  
//     if (formData.email && !/^\S+@\S+\.\S+$/.test(formData.email)) {
//       newErrors.email = "Invalid email format";
//     }
  
//     if (formData.arrivalFrom === "other" && (!formData.otherArrivalLocation || !formData.otherArrivalLocation.trim())) {
//       newErrors.otherArrivalLocation = "Please specify your arrival location";
//     }
  
//     if (formData.arrivalDate) {
//       const arrivalDate = new Date(formData.arrivalDate);
//       if (isNaN(arrivalDate.getTime())) {
//         newErrors.arrivalDate = "Invalid arrival date";
//       }
//     }
  
//     if (formData.departureDate) {
//       const departureDate = new Date(formData.departureDate);
//       if (isNaN(departureDate.getTime())) {
//         newErrors.departureDate = "Invalid departure date";
//       }
//     }
  
//     if (formData.arrivalDate && formData.departureDate) {
//       const arrivalDate = new Date(formData.arrivalDate);
//       const departureDate = new Date(formData.departureDate);
      
//       if (!isNaN(arrivalDate.getTime()) && !isNaN(departureDate.getTime()) && departureDate < arrivalDate) {
//         newErrors.departureDate = "Departure date must be on or after arrival date";
//       }
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
//       console.log("Submitting form data:", formData);
      
//       const response = await fetch("/api/register", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       });
  
//       const data = await response.json();
  
//       if (!response.ok) {
//         if (response.status === 409) {
//           setSubmitState("duplicate");
//           setErrors({ email: data.message || "This email is already registered" });
//         } else if (response.status === 400 && data.errors) {
//           const newErrors: FormErrors = {};
//           data.errors.forEach((err: { field: string; message: string }) => {
//             newErrors[err.field as keyof FormErrors] = err.message;
//           });
//           setErrors(newErrors);
//           setSubmitState("error");
//         } else {
//           throw new Error(data.message || "Registration failed");
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
//       console.error("Registration error:", error);
//       setSubmitState("error");
//       setErrors({
//         form: error instanceof Error 
//           ? error.message 
//           : "An unexpected error occurred during registration"
//       });
//     } finally {
//       setIsSubmitting(false);
//     }
//   };  

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//     setErrors(prev => ({ ...prev, [name]: undefined }));
//   };

//   const handlePhoneChange = (value: string) => {
//     setFormData(prev => ({ ...prev, mobile: value }));
//     setErrors(prev => ({ ...prev, mobile: undefined }));
//   };

//   const handleCountryChange = (option: CountryOption | null) => {
//     if (option) {
//       setFormData(prev => ({ ...prev, country: option.label }));
//       setErrors(prev => ({ ...prev, country: undefined }));
//     }
//   };

//   const handleArrivalFromChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const value = e.target.value;
//     setFormData(prev => ({
//       ...prev,
//       arrivalFrom: value,
//       otherArrivalLocation: value !== "other" ? "" : prev.otherArrivalLocation
//     }));
//     setErrors(prev => ({ ...prev, arrivalFrom: undefined, otherArrivalLocation: undefined }));
//   };

//   const customSelectStyles = {
//     control: (provided: any, state: any) => ({
//       ...provided,
//       backgroundColor: isPopup ? '#1f2937' : 'rgba(55, 65, 81, 0.5)',
//       borderColor: errors.country ? '#ef4444' : (isPopup ? '#374151' : 'rgba(75, 85, 99, 0.5)'),
//       borderRadius: '0.375rem',
//       minHeight: isPopup ? '36px' : '40px',
//       height: isPopup ? '36px' : '40px',
//       boxShadow: state.isFocused ? '0 0 0 1px #3b82f6' : 'none',
//       '&:hover': { borderColor: '#3b82f6' }
//     }),
//     valueContainer: (provided: any) => ({ ...provided, padding: '0 8px', height: isPopup ? '36px' : '40px' }),
//     option: (provided: any, state: any) => ({
//       ...provided,
//       backgroundColor: state.isSelected ? '#3b82f6' : (state.isFocused ? 'rgba(75, 85, 99, 0.7)' : '#1f2937'),
//       color: 'white',
//       cursor: 'pointer',
//       '&:hover': { backgroundColor: 'rgba(75, 85, 99, 0.7)' }
//     }),
//     menu: (provided: any) => ({ ...provided, backgroundColor: '#1f2937', zIndex: 9999 }),
//     singleValue: (provided: any) => ({ ...provided, color: 'white' }),
//     input: (provided: any) => ({ ...provided, color: 'white', margin: '0', padding: '0' }),
//     placeholder: (provided: any) => ({ ...provided, color: '#9ca3af' }),
//     indicatorSeparator: (provided: any) => ({ ...provided, backgroundColor: '#4b5563' }),
//     dropdownIndicator: (provided: any) => ({
//       ...provided,
//       padding: '0 8px',
//       color: '#9ca3af',
//       '&:hover': { color: '#d1d5db' }
//     })
//   };

//   const inputFieldClass = `w-full px-3 rounded-md ${isPopup 
//     ? 'bg-gray-800 text-white border-gray-700 focus:ring-blue-500 h-9' 
//     : 'bg-gray-700/50 text-white border-gray-600/50 focus:ring-blue-400 h-10'
//   } border ${errors.mobile ? 'border-red-500' : ''} focus:ring-1 focus:border-transparent transition-all`;

//   const formContent = (
//     <form onSubmit={handleSubmit} className={`space-y-5 ${isPopup ? '' : 'p-8'}`}>
//       <div className="space-y-4">
//         <div className={`grid grid-cols-1 ${isPopup ? '' : 'md:grid-cols-2'} gap-4`}>
//           <div>
//             <label htmlFor="fullName" className={`block text-sm font-medium mb-1.5 ${isPopup ? 'text-white' : 'text-white'}`}>
//               Full Name <span className="text-red-400">*</span>
//             </label>
//             <input
//               id="fullName"
//               name="fullName"
//               type="text"
//               value={formData.fullName}
//               onChange={handleChange}
//               className={inputFieldClass + (errors.fullName ? ' border-red-500' : '')}
//             />
//             {errors.fullName && <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-red-400 text-sm mt-1">{errors.fullName}</motion.p>}
//           </div>
//           <div>
//             <label htmlFor="email" className={`block text-sm font-medium mb-1.5 ${isPopup ? 'text-white' : 'text-white'}`}>
//               Email <span className="text-red-400">*</span>
//             </label>
//             <input
//               id="email"
//               name="email"
//               type="email"
//               value={formData.email}
//               onChange={handleChange}
//               className={inputFieldClass + (errors.email ? ' border-red-500' : '')}
//             />
//             {errors.email && <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-red-400 text-sm mt-1">{errors.email}</motion.p>}
//           </div>
//         </div>

//         <div className={`grid grid-cols-1 ${isPopup ? '' : 'md:grid-cols-2'} gap-4`}>
//           <div>
//             <label htmlFor="organization" className={`block text-sm font-medium mb-1.5 ${isPopup ? 'text-white' : 'text-white'}`}>
//               Organization <span className="text-red-400">*</span>
//             </label>
//             <input
//               id="organization"
//               name="organization"
//               type="text"
//               value={formData.organization}
//               onChange={handleChange}
//               className={inputFieldClass + (errors.organization ? ' border-red-500' : '')}
//             />
//             {errors.organization && <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-red-400 text-sm mt-1">{errors.organization}</motion.p>}
//           </div>
//           <div>
//             <label htmlFor="designation" className={`block text-sm font-medium mb-1.5 ${isPopup ? 'text-white' : 'text-white'}`}>
//               Designation <span className="text-red-400">*</span>
//             </label>
//             <input
//               id="designation"
//               name="designation"
//               type="text"
//               value={formData.designation}
//               onChange={handleChange}
//               className={inputFieldClass + (errors.designation ? ' border-red-500' : '')}
//             />
//             {errors.designation && <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-red-400 text-sm mt-1">{errors.designation}</motion.p>}
//           </div>
//         </div>

//         <div className={`grid grid-cols-1 ${isPopup ? '' : 'md:grid-cols-2'} gap-4`}>
//           <div>
//             <label htmlFor="city" className={`block text-sm font-medium mb-1.5 ${isPopup ? 'text-white' : 'text-white'}`}>
//               City <span className="text-red-400">*</span>
//             </label>
//             <input
//               id="city"
//               name="city"
//               type="text"
//               value={formData.city}
//               onChange={handleChange}
//               className={inputFieldClass + (errors.city ? ' border-red-500' : '')}
//             />
//             {errors.city && <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-red-400 text-sm mt-1">{errors.city}</motion.p>}
//           </div>
//           <div>
//             <label htmlFor="mobile" className={`block text-sm font-medium mb-1.5 ${isPopup ? 'text-white' : 'text-white'}`}>
//                 Mobile <span className="text-red-400">*</span>
//             </label>
//             <div className={`${errors.mobile ? 'border border-red-500 rounded-md' : ''}`}>
//                 <PhoneInput
                
//                 value={formData.mobile}
//                 onChange={handlePhoneChange}
//                 inputProps={{ name: 'mobile', id: 'mobile', required: true }}
//                 containerClass="!w-full flex"
//                 inputClass={`!w-full !pl-14 !pr-3 !rounded-md ${isPopup 
//                     ? '!bg-gray-800 !text-white !border-gray-700 !h-9' 
//                     : '!bg-gray-700/50 !text-white !border-gray-600/50 !h-10'
//                 } !border ${errors.mobile ? '!border-red-500' : ''} focus:!ring-blue-400 focus:!border-transparent`}
//                 buttonClass={`!bg-gray-800 !border-gray-700 !rounded-l-md ${isPopup ? '!h-9' : '!h-10'} !w-14 !min-w-[56px]`}
//                 dropdownClass="!bg-gray-800 !text-white"
//                 searchClass="!bg-gray-700 !text-white"
//                 buttonStyle={{ padding: '0 8px', borderTopLeftRadius: '0.375rem', borderBottomLeftRadius: '0.375rem', width: '56px', minWidth: '56px' }}
//                 />
//             </div>
//             <p className="text-gray-400 text-xs mt-1">Enter the country code first (e.g., +1 for US)</p>
//             {errors.mobile && <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-red-400 text-sm mt-1">{errors.mobile}</motion.p>}
//             </div>
//         </div>

//         <div>
//           <label htmlFor="country" className={`block text-sm font-medium mb-1.5 ${isPopup ? 'text-white' : 'text-white'}`}>
//             Country <span className="text-red-400">*</span>
//           </label>
//           <Select
//             options={countryOptions}
//             value={formData.country ? { label: formData.country, value: '' } : null}
//             onChange={handleCountryChange}
//             placeholder="Select country"
//             className="country-select"
//             classNamePrefix="country-select"
//             styles={customSelectStyles}
//             isSearchable={true}
//           />
//           {errors.country && <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-red-400 text-sm mt-1">{errors.country}</motion.p>}
//         </div>

//         <div>
//           <label htmlFor="registrationType" className={`block text-sm font-medium mb-1.5 ${isPopup ? 'text-white' : 'text-white'}`}>
//             Registration Type <span className="text-red-400">*</span>
//           </label>
//           <select
//             id="registrationType"
//             name="registrationType"
//             value={formData.registrationType}
//             onChange={handleChange}
//             className={inputFieldClass + (errors.registrationType ? ' border-red-500' : '')}
//           >
//             <option value="">Select Registration Type</option>
//             {registrationTypes.map((type) => (
//               <option key={type} value={type} className="bg-gray-800">{type}</option>
//             ))}
//           </select>
//           {errors.registrationType && <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-red-400 text-sm mt-1">{errors.registrationType}</motion.p>}
//         </div>

//         <div className="pt-4 border-t border-gray-700/30">
//           <h3 className="text-lg font-medium text-blue-400 mb-4">Travel Details</h3>
//           <div className="mb-4">
//             <label className="block text-sm font-medium mb-2 text-white">
//               Arrival From
//             </label>
//             <div className="space-y-2">
//               {arrivalLocations.map((location) => (
//                 <div key={location.value} className="flex items-center">
//                   <input
//                     type="radio"
//                     id={`arrival-${location.value}`}
//                     name="arrivalFrom"
//                     value={location.value}
//                     checked={formData.arrivalFrom === location.value}
//                     onChange={handleArrivalFromChange}
//                     className="mr-2 h-4 w-4 text-blue-500 focus:ring-blue-400"
//                   />
//                   <label htmlFor={`arrival-${location.value}`} className="text-white">{location.label}</label>
//                 </div>
//               ))}
//             </div>
//             {errors.arrivalFrom && <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-red-400 text-sm mt-1">{errors.arrivalFrom}</motion.p>}
//             {formData.arrivalFrom === "other" && (
//               <div className="mt-2">
//                 <input
//                   type="text"
//                   id="otherArrivalLocation"
//                   name="otherArrivalLocation"
//                   value={formData.otherArrivalLocation}
//                   onChange={handleChange}
//                   placeholder="Please specify"
//                   className={inputFieldClass + (errors.otherArrivalLocation ? ' border-red-500' : '')}
//                 />
//                 {errors.otherArrivalLocation && <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-red-400 text-sm mt-1">{errors.otherArrivalLocation}</motion.p>}
//               </div>
//             )}
//           </div>
//           <div className={`grid grid-cols-1 ${isPopup ? '' : 'md:grid-cols-2'} gap-4`}>
//             <div>
//               <label htmlFor="arrivalDate" className="block text-sm font-medium mb-1.5 text-white">
//                 Arrival Date in Austin (Optional)
//               </label>
//               <input
//                 type="date"
//                 id="arrivalDate"
//                 name="arrivalDate"
//                 value={formData.arrivalDate}
//                 onChange={handleChange}
//                 className={inputFieldClass + (errors.arrivalDate ? ' border-red-500' : '')}
//               />
//               {errors.arrivalDate && <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-red-400 text-sm mt-1">{errors.arrivalDate}</motion.p>}
//             </div>
//             <div>
//               <label htmlFor="departureDate" className="block text-sm font-medium mb-1.5 text-white">
//                 Departure Date from Austin (Optional)
//               </label>
//               <input
//                 type="date"
//                 id="departureDate"
//                 name="departureDate"
//                 value={formData.departureDate}
//                 onChange={handleChange}
//                 className={inputFieldClass + (errors.departureDate ? ' border-red-500' : '')}
//               />
//               {errors.departureDate && <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-red-400 text-sm mt-1">{errors.departureDate}</motion.p>}
//             </div>
//           </div>
//           <div className="mt-4">
//             <label htmlFor="specialRequests" className="block text-sm font-medium mb-1.5 text-white">
//               Special Requests (Optional)
//             </label>
//             <textarea
//               id="specialRequests"
//               name="specialRequests"
//               value={formData.specialRequests}
//               onChange={handleChange}
//               rows={3}
//               className={`w-full px-3 py-2 text-base rounded-md ${isPopup 
//                 ? 'bg-gray-800 text-white border-gray-700 focus:ring-blue-500' 
//                 : 'bg-gray-700/50 text-white border-gray-600/50 focus:ring-blue-400'
//               } border focus:ring-1 focus:border-transparent transition-all`}
//               placeholder="Enter any special requirements or questions here..."
//             />
//           </div>

//           {/* Virtual Attendance Option */}
//           {/* <div className="mt-6 p-0">
//             <h4 className="text-blue-400 font-medium text-lg mb-2">Can't be in Austin?</h4>
//             <a
//               href="https://www.playubu.ai/isf"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-white mb-3 inline-block hover:underline hover:text-blue-400 transition-colors"
//             >
//               Join us in a virtual webinar 
//             </a>
//           </div> */}
//         </div>
//       </div>

//       <div className={`${isPopup ? 'pt-4' : 'pt-6 border-t border-gray-700/50'}`}>
//         <div className={`flex ${isPopup ? 'flex-col' : 'flex-col sm:flex-row sm:justify-center'} gap-4`}>
//           <Button
//             type="submit"
//             disabled={isSubmitting}
//             className={`relative overflow-hidden ${isPopup 
//               ? 'w-full h-9 bg-blue-500 hover:bg-blue-600 text-white rounded-md font-medium text-base' 
//               : 'w-full sm:w-64 h-10 bg-blue-500 hover:bg-blue-600 rounded-md font-medium text-base text-white transition-all'
//             }`}
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
//                   <Check className="w-5 h-5 mr-2" /> Registration Successful
//                 </motion.div>
//               )}
//               {submitState === "error" && (
//                 <motion.div 
//                   key="error"
//                   className="absolute inset-0 flex items-center justify-center" 
//                   initial={{ opacity: 0 }} 
//                   animate={{ opacity: 1 }}
//                 >
//                   <AlertTriangle className="w-5 h-5 mr-2" /> Registration Failed
//                 </motion.div>
//               )}
//               {submitState === "duplicate" && (
//                 <motion.div 
//                   key="duplicate"
//                   className="absolute inset-0 flex items-center justify-center" 
//                   initial={{ opacity: 0 }} 
//                   animate={{ opacity: 1 }}
//                 >
//                   <AlertTriangle className="w-5 h-5 mr-2" /> Already Registered
//                 </motion.div>
//               )}
//               <span className={submitState !== "idle" ? "opacity-0" : "opacity-100"}>
//                 {isPopup ? "Submit" : "Complete Registration"}
//               </span>
//             </AnimatePresence>
//           </Button>
//           <Button
//             type="button"
//             variant="outline"
//             className={`${isPopup 
//               ? 'w-full h-9 text-white text-base border-gray-700 hover:bg-gray-700/30' 
//               : 'w-full sm:w-64 h-10 text-white text-base border-gray-600 hover:bg-gray-700/30'
//             }`}
//             onClick={() => isPopup ? resetForm() : router.push("/")}
//           >
//             Cancel
//           </Button>
//         </div>
//         {errors.form && (
//           <motion.div className={`mt-5 p-4 ${isPopup ? 'bg-red-900/50' : 'bg-red-900/30'} border border-red-800/50 rounded-md`} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
//             <p className="text-red-400 text-sm">{errors.form}</p>
//           </motion.div>
//         )}
//       </div>
//     </form>
//   );

//   if (!isPopup) {
//     return (
//       <div className="min-h-screen bg-[#020817]">
//         <div className="container mx-auto px-4 py-10 relative z-10">
//           <Button
//             variant="ghost"
//             className="text-blue-400 hover:bg-blue-900/30 mb-8 text-base absolute left-4 md:left-8"
//             onClick={() => router.push("/")}
//           >
//             <ArrowLeft className="h-5 w-5 mr-2" /> Back to Main Site
//           </Button>
//           <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="max-w-3xl mx-auto mt-16 md:mt-12">
//             <div className="mb-10 text-center">
//               <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Registration Form</h1>
//             </div>
//             <motion.div className="bg-[#1c212f] backdrop-blur-lg rounded-xl border border-white/20 shadow-lg" initial={{ scale: 0.95 }} animate={{ scale: 1 }}>
//               {formContent}
//             </motion.div>
//             <motion.div className="mt-8 text-center text-blue-300 text-sm" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
//               <p className="mt-1">Follow us @theisfnetwork for updates</p>
//             </motion.div>
//           </motion.div>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <AnimatePresence>
//       {isOpen && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50">
//           <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.2 }} className="bg-[#1c212f] text-white p-5 rounded-lg border border-white/20 shadow-lg w-full max-w-md mx-4">
//             <div className="flex justify-between items-center mb-5">
//               <h2 className="text-xl font-medium">Register for ISF Global AI Summit</h2>
//               <button onClick={resetForm} className="hover:bg-gray-700 p-1 rounded-full">
//                 <X className="w-6 h-6 text-white hover:text-red-500" />
//               </button>
//             </div>
//             {formContent}
//           </motion.div>
//         </div>
//       )}
//     </AnimatePresence>
//   );
// }