import { useHeroPageLogic } from "../../pages/heroLogic";
import React, { useEffect } from "react";
import ResultModalUI from "./resultmodeluI";

// Tutorial Icons Component - Now supports images with optimization
const TutorialIcon = ({ type, imageSrc }) => {
  // If image source is provided, use image instead of SVG
  if (imageSrc) {
    return (
      <div className="relative w-40 h-40 flex items-center justify-center">
        <img
          src={imageSrc}
          alt={type}
          loading="lazy"
          className="w-full h-full object-contain scale-200"
          style={{ maxWidth: "135px", maxHeight: "135px" }}
        />
      </div>
    );
  }

  // Fallback to original SVG icons
  switch (type) {
    case "position":
      return (
        <div className="relative w-32 h-32">
          <div className="absolute inset-0 rounded-full bg-gradient-to-b from-cyan-500 to-blue-600 opacity-20"></div>
          <div className="absolute inset-2 rounded-full border-2 border-cyan-400 flex items-center justify-center">
            <div className="w-16 h-20 border-2 border-cyan-400 rounded-full relative">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-12 border-2 border-cyan-300 rounded-full"></div>
            </div>
          </div>
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-12 h-0.5 bg-cyan-400"></div>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 h-0.5 bg-cyan-400"></div>
        </div>
      );

    case "distance":
      return (
        <div className="relative w-32 h-32">
          <div className="absolute inset-0 rounded-full bg-gradient-to-b from-cyan-500 to-blue-600 opacity-20"></div>
          <div className="absolute inset-2 rounded-full border-2 border-cyan-400 flex items-center justify-center">
            <div className="relative">
              <div className="w-12 h-16 border-2 border-cyan-400 rounded-lg relative">
                <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-cyan-400"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 w-6 h-1 bg-cyan-400"></div>
              </div>
              <div className="absolute -left-8 top-1/2 transform -translate-y-1/2 w-6 h-0.5 bg-cyan-400"></div>
              <div className="absolute -right-8 top-1/2 transform -translate-y-1/2 w-6 h-0.5 bg-cyan-400"></div>
            </div>
          </div>
        </div>
      );

    case "guidance":
      return (
        <div className="relative w-32 h-32">
          <div className="absolute inset-0 rounded-full bg-gradient-to-b from-cyan-500 to-blue-600 opacity-20"></div>
          <div className="absolute inset-2 rounded-full border-2 border-cyan-400 flex items-center justify-center">
            <div className="relative w-20 h-20 border-2 border-cyan-400 rounded-full">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-0.5 h-full bg-cyan-400"></div>
                <div className="absolute w-full h-0.5 bg-cyan-400"></div>
              </div>
            </div>
          </div>
        </div>
      );

    case "scan":
      return (
        <div className="relative w-32 h-32 flex items-center justify-center">
          <div className="absolute inset-0 rounded-full bg-gradient-to-b from-cyan-500 to-blue-600 opacity-20 animate-pulse"></div>
          <div className="absolute inset-2 rounded-full border-2 border-cyan-400 flex items-center justify-center">
            <div className="text-cyan-400 text-2xl font-bold tracking-wider">
              SCAN
            </div>
          </div>
          <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-1 h-8 bg-gradient-to-b from-cyan-400 to-transparent animate-pulse"></div>
        </div>
      );

    default:
      return null;
  }
};

// Privacy Icons Component
const PrivacyIcon = ({ type }) => {
  const iconClass =
    "w-16 h-16 rounded-full border-2 border-cyan-400 flex items-center justify-center bg-gray-800/50 backdrop-blur-sm";

  switch (type) {
    case "secure":
      return (
        <div className={iconClass}>
          <svg
            className="w-8 h-8 text-cyan-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
            />
          </svg>
        </div>
      );
    case "private":
      return (
        <div className={iconClass}>
          <svg
            className="w-8 h-8 text-cyan-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
            />
          </svg>
        </div>
      );
    case "encrypted":
      return (
        <div className={iconClass}>
          <svg
            className="w-8 h-8 text-cyan-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z"
            />
          </svg>
        </div>
      );
    default:
      return null;
  }
};

// Step Progress Indicators - Enhanced with dynamic sizing for all steps
const StepIndicators = ({ currentStep }) => {
  // Total steps: 4 tutorial + 1 privacy + 1 camera access + 1 measurement = 7
  const totalSteps = 7;

  return (
    <div className="flex gap-2 items-center justify-center py-2">
      {[...Array(totalSteps)].map((_, index) => (
        <div
          key={index}
          className={`h-1.5 rounded-full transition-all duration-300 ${
            index === currentStep
              ? "w-10 bg-cyan-400" // Current step - longest and bright
              : index < currentStep
              ? "w-3 bg-cyan-600" // Completed steps - medium and dimmed cyan
              : "w-2 bg-gray-600" // Future steps - smallest and gray
          }`}
        ></div>
      ))}
    </div>
  );
};

// Tutorial Step Component
const TutorialStep = ({ step, currentStep, totalSteps, onNext }) => (
  <div className="flex flex-col items-center justify-between min-h-[500px] p-8">
    <div className="flex flex-col items-center flex-1 justify-center">
      <div className="mb-8 flex items-center justify-center">
        <TutorialIcon type={step.icon} imageSrc={step.imageSrc} />
      </div>

      <h2 className="text-2xl font-semibold text-white mb-3">{step.title}</h2>

      <p className="text-gray-400 text-center text-sm">{step.description}</p>
    </div>

    <div className="w-full flex flex-col items-center gap-6">
      <StepIndicators currentStep={currentStep} />

      <button
        onClick={onNext}
        className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-medium py-3 px-6 rounded-full transition-colors flex items-center justify-center gap-2"
      >
        {currentStep === totalSteps - 1 ? "Continue" : "Next"}
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        ></svg>
      </button>
    </div>
  </div>
);

// Privacy Step Component
const PrivacyStep = ({
  privacySteps,
  privacySections,
  onNext,
  currentStep,
}) => (
  <div className="flex flex-col p-6">
    {/* Privacy Icons at top */}
    <div className="flex justify-center gap-8 mb-6">
      {privacySteps.map((item, index) => (
        <div key={index} className="flex flex-col items-center">
          <PrivacyIcon type={item.icon} />
          <p className="text-cyan-400 text-xs font-medium mt-2">{item.title}</p>
        </div>
      ))}
    </div>

    <div className="space-y-3 mb-6">
      {privacySections.map((section, index) => (
        <div
          key={index}
          className="bg-gray-800/30 backdrop-blur-sm rounded-lg p-4"
        >
          <h3 className="text-white font-semibold text-sm mb-2">
            {section.title}
          </h3>
          <p className="text-gray-400 text-xs leading-relaxed">
            {section.description}
          </p>
          {section.title === "Compliance" && (
            <div className="mt-3">
              <p className="text-gray-400 text-xs mb-2">
                GDPR and CCPA compliant. Read our{" "}
                <span className="text-cyan-400 cursor-pointer hover:underline">
                  Privacy Policy
                </span>{" "}
                and{" "}
                <span className="text-cyan-400 cursor-pointer hover:underline">
                  Terms of Service
                </span>
                .
              </p>
            </div>
          )}
        </div>
      ))}
    </div>

    <div className="flex items-start my-2 mb-4">
      <input
        type="checkbox"
        className="mt-1 mr-2 accent-cyan-500"
        id="compliance"
      />
      <label htmlFor="compliance" className="text-gray-400 text-xs">
        I understand and agree to the privacy terms. My camera will be used for
        measurement only.
      </label>
    </div>

    <div className="flex flex-col items-center gap-4">
      <StepIndicators currentStep={currentStep} />

      <button
        onClick={onNext}
        className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-medium py-3 px-6 rounded-full transition-colors"
      >
        Accept & Continue
      </button>
    </div>
  </div>
);

// Camera Access Step Component
const CameraAccessStep = ({ requirements, onNext, currentStep }) => (
  <div className="flex flex-col items-center justify-center p-8">
    <div className="w-24 h-24 rounded-full border-2 border-cyan-400 flex items-center justify-center mb-6 bg-gray-800/30 backdrop-blur-sm">
      <svg
        className="w-12 h-12 text-cyan-400"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    </div>

    <h2 className="text-2xl font-semibold text-white mb-3">Enable Camera</h2>

    <p className="text-gray-400 text-center text-sm mb-6">
      We need access to your camera to measure your face and recommend the
      perfect eyewear fit.
    </p>

    <div className="space-y-2 mb-8 text-left w-full">
      {requirements.map((req, index) => (
        <div
          key={index}
          className="flex items-start gap-2 text-gray-300 text-sm"
        >
          <svg
            className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
              req.type === "success"
                ? "text-green-500"
                : req.type === "error"
                ? "text-red-500"
                : "text-cyan-400"
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {req.type === "success" ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            ) : req.type === "error" ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            )}
          </svg>
          <span>{req.text}</span>
        </div>
      ))}
    </div>

    <div className="w-full flex flex-col items-center gap-4">
      <StepIndicators currentStep={currentStep} />

      <button
        onClick={onNext}
        className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-medium py-3 px-6 rounded-full transition-colors"
      >
        Allow Camera Access
      </button>
    </div>
  </div>
);

// Face Detection Overlay Component
const FaceDetectionOverlay = ({ isScanning }) => (
  <div className="absolute inset-0 flex items-center justify-center">
    <div className="relative w-48 h-64">
      {/* Corner brackets */}
      <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-cyan-400"></div>
      <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-cyan-400"></div>
      <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-cyan-400"></div>
      <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-cyan-400"></div>

      {/* Face mesh grid */}
      {isScanning && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-32 h-40 relative">
            {/* Vertical lines */}
            {[...Array(8)].map((_, i) => (
              <div
                key={`v-${i}`}
                className="absolute h-full w-px bg-cyan-400 opacity-30"
                style={{ left: `${(i * 100) / 7}%` }}
              ></div>
            ))}
            {/* Horizontal lines */}
            {[...Array(10)].map((_, i) => (
              <div
                key={`h-${i}`}
                className="absolute w-full h-px bg-cyan-400 opacity-30"
                style={{ top: `${(i * 100) / 9}%` }}
              ></div>
            ))}

            {/* Face outline */}
            <div className="absolute inset-0 border border-cyan-400 rounded-full opacity-50"></div>
          </div>
        </div>
      )}

      {/* Scanning line animation */}
      {isScanning && (
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-scan"></div>
        </div>
      )}
    </div>
  </div>
);

// Placeholder Face Image Component (shown before camera loads)
const PlaceholderFaceImage = ({ placeholderImage }) => {
  if (placeholderImage) {
    return (
      <div className="absolute inset-0 flex items-center justify-center bg-black">
        <img
          src={placeholderImage}
          alt="Face measurement guide"
          className="w-full h-full object-contain"
        />
      </div>
    );
  }

  return (
    <div className="absolute inset-0 flex items-center justify-center bg-black">
      {/* Wireframe face illustration */}
      <div className="relative w-48 h-64">
        {/* Corner brackets */}
        <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-cyan-400"></div>
        <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-cyan-400"></div>
        <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-cyan-400"></div>
        <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-cyan-400"></div>

        {/* Wireframe face */}
        <div className="absolute inset-0 flex items-center justify-center">
          <svg viewBox="0 0 200 250" className="w-40 h-52">
            {/* Face outline */}
            <ellipse
              cx="100"
              cy="125"
              rx="80"
              ry="100"
              fill="none"
              stroke="#22d3ee"
              strokeWidth="1"
              opacity="0.6"
            />

            {/* Horizontal lines */}
            {[...Array(12)].map((_, i) => (
              <line
                key={`h-${i}`}
                x1="20"
                y1={25 + i * 20}
                x2="180"
                y2={25 + i * 20}
                stroke="#22d3ee"
                strokeWidth="0.5"
                opacity="0.3"
              />
            ))}

            {/* Vertical lines */}
            {[...Array(10)].map((_, i) => (
              <line
                key={`v-${i}`}
                x1={20 + i * 16}
                y1="25"
                x2={20 + i * 16}
                y2="225"
                stroke="#22d3ee"
                strokeWidth="0.5"
                opacity="0.3"
              />
            ))}

            {/* Eyes */}
            <ellipse
              cx="70"
              cy="100"
              rx="15"
              ry="10"
              fill="none"
              stroke="#22d3ee"
              strokeWidth="1.5"
            />
            <ellipse
              cx="130"
              cy="100"
              rx="15"
              ry="10"
              fill="none"
              stroke="#22d3ee"
              strokeWidth="1.5"
            />
            <circle cx="70" cy="100" r="5" fill="#22d3ee" opacity="0.6" />
            <circle cx="130" cy="100" r="5" fill="#22d3ee" opacity="0.6" />

            {/* Nose */}
            <path
              d="M 100 110 L 95 135 L 100 140 L 105 135 Z"
              fill="none"
              stroke="#22d3ee"
              strokeWidth="1"
              opacity="0.6"
            />

            {/* Mouth */}
            <path
              d="M 70 165 Q 100 175 130 165"
              fill="none"
              stroke="#22d3ee"
              strokeWidth="1.5"
              opacity="0.6"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

// Measurement Step Component - Show placeholder for 4s, then live camera, then capture
const MeasurementStep = ({
  videoRef,
  isCameraActive,
  showPlaceholder,
  capturedImage,
  onCapture,
  currentStep,
  placeholderImage,
  startCamera,
  isProcessing,
}) => {
  console.log("MeasurementStep render - videoRef:", videoRef);

  useEffect(() => {
    if (videoRef.current) {
      startCamera();
    }
  }, [videoRef, startCamera]);

  return (
    <div className="flex flex-col items-center p-6">
      <div className="relative w-full max-w-sm aspect-[3/4] bg-black rounded-lg overflow-hidden mb-4">
        {/* Video element */}
        <video
          ref={videoRef}
          autoPlay
          playsInline
          muted
          className="w-full h-full object-cover"
          style={{
            display: capturedImage || showPlaceholder ? "none" : "block",
          }}
        ></video>

        {/* Show captured image if available */}
        {capturedImage && (
          <img
            src={capturedImage}
            alt="Captured face"
            className="absolute inset-0 w-full h-full object-cover"
          />
        )}

        {/* Show placeholder when needed */}
        {(showPlaceholder || !isCameraActive) && !capturedImage && (
          <PlaceholderFaceImage placeholderImage={placeholderImage} />
        )}

        {/* Show scanning overlay when camera is active */}
        {isCameraActive && !capturedImage && !showPlaceholder && (
          <FaceDetectionOverlay isScanning={true} />
        )}

        {/* Processing overlay */}
        {isProcessing && (
          <div className="absolute inset-0 bg-black/70 flex items-center justify-center">
            <div className="text-center">
              <div className="w-16 h-16 border-4 border-cyan-400 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
              <p className="text-white text-sm">Processing image...</p>
            </div>
          </div>
        )}

        {/* Corner brackets overlay - always visible */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="relative w-48 h-64">
            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-cyan-400"></div>
            <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-cyan-400"></div>
            <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-cyan-400"></div>
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-cyan-400"></div>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col items-center gap-4">
        <StepIndicators currentStep={currentStep} />

        <div className="text-gray-400 text-sm text-center">
          {isProcessing
            ? "Processing your measurement..."
            : capturedImage
            ? "Image captured successfully!"
            : showPlaceholder
            ? "Initializing camera..."
            : "Position your face within the frame and click capture"}
        </div>

        {/* Show capture button only when camera is ready */}
        {!capturedImage &&
          !showPlaceholder &&
          isCameraActive &&
          !isProcessing && (
            <button
              onClick={onCapture}
              className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-medium py-3 px-6 rounded-full transition-colors flex items-center justify-center gap-2"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              Capture Image
            </button>
          )}
      </div>
    </div>
  );
};

// Modal Component
const Modal = ({ isOpen, title, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/20"
        style={{ backdropFilter: "blur(2px)" }}
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="relative bg-gray-900/80 backdrop-blur-xl rounded-2xl w-full max-w-md max-h-[90vh] shadow-2xl border border-gray-700/50 overflow-hidden flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-800 flex-shrink-0">
          <h3 className="text-white font-medium">{title}</h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto flex-1">{children}</div>
      </div>
    </div>
  );
};

// Hero Section Component
const HeroSection = ({ onStartScan, isModalOpen }) => (
  <div className="relative z-10 flex items-center justify-center min-h-screen">
    <div
      className={`text-center px-4 transition-all duration-300 ${
        isModalOpen
          ? "opacity-0 scale-95 pointer-events-none"
          : "opacity-100 scale-100"
      }`}
    >
      <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
        Find Your Perfect Fit
      </h1>

      <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
        Use our AI-powered face scanning technology to get personalized eyewear
        recommendations
      </p>

      <button
        onClick={onStartScan}
        className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-4 px-8 rounded-full text-lg transition-colors"
      >
        Start Face Scan
      </button>
    </div>
  </div>
);

// Main Hero Page Component
export default function HeroPageUI() {
  const {
    // State
    isModalOpen,
    currentStep,
    isCameraActive,
    isScanning,
    videoRef,
    capturedImage,
    showPlaceholder,
    showResultsModal,
    measurementResults,
    isProcessing,

    // Data
    steps,
    privacySteps,
    privacySections,
    cameraRequirements,
    placeholderImage,

    // Functions
    openModal,
    handleClose,
    handleNext,
    handleCapture,
    startCamera,
    handleRetakeMeasurement,
    handleSaveResults,
    closeResultsModal,

    // Helpers
    getCurrentStepType,
    getModalTitle,
  } = useHeroPageLogic();

  const renderStepContent = () => {
    const stepType = getCurrentStepType();

    switch (stepType) {
      case "tutorial":
        return (
          <TutorialStep
            step={steps[currentStep]}
            currentStep={currentStep}
            totalSteps={steps.length}
            onNext={handleNext}
          />
        );

      case "privacy":
        return (
          <PrivacyStep
            privacySteps={privacySteps}
            privacySections={privacySections}
            onNext={handleNext}
            currentStep={4}
          />
        );

      case "camera-access":
        return (
          <CameraAccessStep
            requirements={cameraRequirements}
            onNext={handleNext}
            currentStep={5}
          />
        );

      case "measurement":
        return (
          <MeasurementStep
            videoRef={videoRef}
            isCameraActive={isCameraActive}
            showPlaceholder={showPlaceholder}
            capturedImage={capturedImage}
            onCapture={handleCapture}
            currentStep={6}
            placeholderImage={placeholderImage}
            startCamera={startCamera}
            isProcessing={isProcessing}
          />
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen relative z-10">
      {/* Hero Content */}
      <HeroSection onStartScan={openModal} isModalOpen={isModalOpen} />

      {/* Modal */}
      <Modal isOpen={isModalOpen} title={getModalTitle()} onClose={handleClose}>
        {renderStepContent()}
      </Modal>

      {/* Results Modal */}
      <ResultModalUI
        isOpen={showResultsModal}
        onClose={closeResultsModal}
        measurementData={measurementResults}
        onRetake={handleRetakeMeasurement}
        onSaveResults={handleSaveResults}
      />

      {/* Scanning Animation Styles */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes scan {
          0% {
            top: 0;
          }
          100% {
            top: 100%;
          }
        }

        .animate-scan {
          animation: scan 2s linear infinite;
        }
      `,
        }}
      />
    </div>
  );
}
