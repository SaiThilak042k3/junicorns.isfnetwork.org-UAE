"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, Check, AlertTriangle } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  mobile: string;
  organization: string;
  designation: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  mobile?: string;
  organization?: string;
  designation?: string;
  duplicate?: string;
}

const defaultFormData: FormData = {
  name: "",
  email: "",
  mobile: "",
  organization: "",
  designation: ""
};

export default function RegisterPopup({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: (open: boolean) => void }) {
  const [formData, setFormData] = useState<FormData>(defaultFormData);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitState, setSubmitState] = useState<"idle" | "success" | "error" | "duplicate">("idle");

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!formData.mobile.trim()) newErrors.mobile = "Mobile number is required";
    if (!formData.organization.trim()) newErrors.organization = "Organization is required";
    if (!formData.designation.trim()) newErrors.designation = "Designation is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const resetPopup = () => {
    setFormData(defaultFormData);
    setErrors({});
    setSubmitState("idle");
    setIsSubmitting(false);
    setIsOpen(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitState("idle");

    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      if (response.status === 409) {
        setErrors(prev => ({ ...prev, duplicate: "You have already registered." }));
        setSubmitState("duplicate");
        return;
      }

      if (!response.ok) throw new Error("Failed to register");

      setSubmitState("success");

      setTimeout(() => {
        resetPopup();
      }, 2000);
    } catch {
      setSubmitState("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    setErrors(prev => ({ ...prev, [e.target.name]: undefined, duplicate: undefined }));
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="bg-[#1c212f] text-white p-6 rounded-xl shadow-lg w-full max-w-md mx-4"
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-semibold">Register for Event</h2>
              <button onClick={resetPopup} className="hover:bg-gray-700 p-1 rounded-full">
                <X className="w-6 h-6 text-white hover:text-red-500" />
              </button>
            </div>

            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              {["name", "email", "mobile", "organization", "designation"].map(field => (
                <div key={field}>
                  <label htmlFor={field} className="block text-sm font-medium">
                    {field.charAt(0).toUpperCase() + field.slice(1)}
                  </label>
                  <input
                    id={field}
                    name={field}
                    type={field === "email" ? "email" : "text"}
                    value={formData[field as keyof FormData]}
                    onChange={handleChange}
                    className={`w-full p-2 mt-1 rounded bg-gray-800 text-white border ${
                      errors[field as keyof FormErrors] ? "border-red-500" : "border-gray-700"
                    }`}
                  />
                  {errors[field as keyof FormErrors] && (
                    <motion.p initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="text-red-500 text-sm mt-1">
                      {errors[field as keyof FormErrors]}
                    </motion.p>
                  )}
                </div>
              ))}

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-2 rounded-lg font-semibold relative transition-colors ${
                  isSubmitting ? "bg-blue-400" : "bg-blue-500 hover:bg-blue-600"
                }`}
                whileTap={{ scale: 0.95 }}
              >
                <AnimatePresence mode="wait">
                  {isSubmitting && submitState === "idle" && (
                    <motion.div key="submitting" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 flex items-center justify-center">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    </motion.div>
                  )}
                  {submitState === "success" && (
                    <motion.div key="success" initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.5 }} className="absolute inset-0 flex items-center justify-center text-white">
                      <Check className="w-5 h-5 text-green-400" />
                    </motion.div>
                  )}
                  {submitState === "error" && (
                    <motion.div key="error" initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.5 }} className="absolute inset-0 flex items-center justify-center text-white">
                      <AlertTriangle className="w-5 h-5 text-red-500" />
                    </motion.div>
                  )}
                  <span className={isSubmitting || submitState !== "idle" ? "opacity-0" : "opacity-100"}>
                    Submit
                  </span>
                </AnimatePresence>
              </motion.button>

              {/* Duplicate Registration Error */}
              {errors.duplicate && (
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-yellow-400 text-sm text-center mt-2"
                >
                  {errors.duplicate}
                </motion.p>
              )}

              {submitState === "error" && (
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-red-500 text-sm text-center mt-2"
                >
                  Registration failed. Please try again.
                </motion.p>
              )}
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
