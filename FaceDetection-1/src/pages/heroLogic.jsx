import { useState, useRef, useEffect, useCallback } from "react";
import { detectFace } from "../components/hero-dasboard-ui/service/apiService"; // Update path as needed
import image1 from "../Images/ChatGPT Image Jan 7, 2026, 03_45_48 PM.png";
import image2 from "../Images/ChatGPT Image Jan 7, 2026, 04_24_50 PM.png";
import image3 from "../Images/ChatGPT Image Jan 7, 2026, 04_32_21 PM.png";
import image4 from "../Images/ChatGPT Image Jan 6, 2026, 12_34_28 AM.png";
import image5 from "../Images//ChatGPT Image Jan 6, 2026, 12_34_25 AM.png";

export const useHeroPageLogic = () => {
  // State Management
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [isCameraActive, setIsCameraActive] = useState(false);
  const [isScanning, setIsScanning] = useState(false);
  const [capturedImage, setCapturedImage] = useState(null);
  const [showPlaceholder, setShowPlaceholder] = useState(true);
  const [showResultsModal, setShowResultsModal] = useState(false);
  const [measurementResults, setMeasurementResults] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const videoRef = useRef(null);
  const streamRef = useRef(null);
  const cameraStartAttempts = useRef(0);

  // Tutorial Steps Data
  const steps = [
    {
      title: "Position Your Face",
      description: "Align your face within the frame for accurate measurements",
      icon: "position",
      imageSrc: image1,
    },
    {
      title: "Keep Distance",
      description: "Hold phone at arm's level, aren't length away",
      icon: "distance",
      imageSrc: image2,
    },
    {
      title: "Follow Guidance",
      description: "Correct alignment ensures the best fit recommendation",
      icon: "guidance",
      imageSrc: image3,
    },
    {
      title: "Ready to Scan",
      description: "The scan takes less than 10 seconds",
      icon: "scan",
      imageSrc: image4,
    },
  ];

  // Placeholder image for measurement screen (before camera opens)
  const placeholderImage = image5;

  // Privacy Steps Data
  const privacySteps = [
    {
      icon: "secure",
      title: "Secure",
    },
    {
      icon: "private",
      title: "Private",
    },
    {
      icon: "encrypted",
      title: "Encrypted",
    },
  ];

  // Privacy Sections Data
  const privacySections = [
    {
      title: "Camera Usage",
      description:
        "We use your camera temporarily to capture facial measurements. No photos or videos are stored on our servers.",
    },
    {
      title: "Data Processing",
      description:
        "All measurements are processed locally on your device using AI. Only anonymized sizing data is transmitted.",
    },
    {
      title: "Your Privacy",
      description:
        "No personally identifiable information (PII) is collected. No camera recordings saved.",
    },
    {
      title: "Compliance",
    },
  ];

  // Camera Requirements Data
  const cameraRequirements = [
    {
      type: "success",
      text: "Look directly into the camera for best results",
    },
    {
      type: "error",
      text: "No photo saved or uploaded",
    },
    {
      type: "info",
      text: "Processing happens on your device",
    },
  ];

  // Cleanup camera stream on unmount
  useEffect(() => {
    return () => {
      if (streamRef.current) {
        streamRef.current.getTracks().forEach((track) => track.stop());
      }
    };
  }, []);

  // Convert base64 to Blob
  const base64ToBlob = (base64, mimeType = "image/jpeg") => {
    const byteString = atob(base64.split(",")[1]);
    const ab = new ArrayBuffer(byteString.length);
    const ia = new Uint8Array(ab);
    for (let i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }
    return new Blob([ab], { type: mimeType });
  };

  // Camera Functions
  const startCamera = useCallback(async () => {
    if (isCameraActive) {
      console.log("Camera already active");
      return;
    }

    // Retry mechanism if video ref is not ready yet
    if (!videoRef.current && cameraStartAttempts.current < 10) {
      console.log(
        `Video ref not ready (attempt ${
          cameraStartAttempts.current + 1
        }/10), retrying in 300ms...`
      );
      cameraStartAttempts.current += 1;
      setTimeout(() => startCamera(), 300);
      return;
    }

    try {
      console.log("Starting camera...");
      console.log("Video ref exists:", !!videoRef.current);
      console.log("Video ref element:", videoRef.current);

      if (!videoRef.current) {
        console.error("Video element not found after retries!");
        setShowPlaceholder(false);
        return;
      }

      setShowPlaceholder(true);

      const stream = await navigator.mediaDevices.getUserMedia({
        video: {
          facingMode: "user",
          width: { ideal: 1280 },
          height: { ideal: 720 },
        },
        audio: false,
      });

      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        streamRef.current = stream;
        setIsCameraActive(true);

        // Wait for video to be ready
        await new Promise((resolve) => {
          videoRef.current.onloadedmetadata = () => {
            videoRef.current.play().then(resolve);
          };
        });

        // Show placeholder for 4 seconds, then show camera
        setTimeout(() => {
          setShowPlaceholder(false);
          setIsScanning(true);
        }, 4000);
      } else {
        console.error("Video ref is null");
      }
    } catch (error) {
      console.error("Error accessing camera:", error);
      alert(
        "Unable to access camera. Please ensure camera permissions are granted."
      );
      setShowPlaceholder(false);
    }
  }, [isCameraActive]);

  const stopCamera = useCallback(() => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((track) => track.stop());
      streamRef.current = null;
    }
    if (videoRef.current) {
      videoRef.current.srcObject = null;
    }
    setIsCameraActive(false);
    setIsScanning(false);
    setShowPlaceholder(true);
    cameraStartAttempts.current = 0;
  }, []);

  useEffect(() => {
    if (currentStep === steps.length + 2 && !isCameraActive && !capturedImage) {
      console.log("Reached measurement step, waiting for video element...");
      const timeoutId = setTimeout(() => {
        console.log(
          "Attempting to start camera, videoRef.current:",
          videoRef.current
        );
        startCamera();
      }, 500);

      return () => clearTimeout(timeoutId);
    }
  }, [currentStep, isCameraActive, capturedImage, steps.length, startCamera]);

  // Capture image from camera stream and send to API
  const handleCapture = useCallback(async () => {
    if (!videoRef.current || !isCameraActive) {
      alert("Camera is not active. Please wait for camera to start.");
      return;
    }

    const video = videoRef.current;
    if (video.readyState !== video.HAVE_ENOUGH_DATA) {
      alert("Camera is not ready. Please wait a moment and try again.");
      return;
    }

    try {
      setIsProcessing(true);

      // Create a canvas element to capture the frame
      const canvas = document.createElement("canvas");
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;

      // Draw the current video frame to canvas
      const ctx = canvas.getContext("2d");
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

      // Convert canvas to base64
      const base64Image = canvas.toDataURL("image/jpeg", 0.95);
      setCapturedImage(base64Image);

      // Convert base64 to blob for API
      const imageBlob = base64ToBlob(base64Image);

      // Stop camera after capture
      stopCamera();

      // Call API to detect face and get measurements
      console.log("Sending image to API...");
      const apiResponse = await detectFace(imageBlob);
      console.log("API Response:", apiResponse);

      // Transform API response to match modal format
      const transformedResults = {
        capturedImage: base64Image,
        recommendedSize:
          apiResponse.recommendedSize || apiResponse.size || "N/A",
        headCircumference:
          apiResponse.headCircumference ||
          apiResponse.head_circumference ||
          "N/A",
        faceWidth: apiResponse.faceWidth || apiResponse.face_width || "N/A",
        description:
          apiResponse.description || "Measurement completed successfully.",
        accuracy: apiResponse.accuracy || apiResponse.confidence || "N/A",
        suggestedProducts:
          apiResponse.suggestedProducts || apiResponse.products || [],
      };

      setMeasurementResults(transformedResults);
      setShowResultsModal(true);
      setIsProcessing(false);
    } catch (error) {
      console.error("Error capturing or processing image:", error);
      setIsProcessing(false);
      alert(
        "Error processing image: " + (error.message || "Please try again.")
      );
      // Restart camera on error
      startCamera();
    }
  }, [isCameraActive, stopCamera, startCamera]);

  const handleRetakeMeasurement = () => {
    setShowResultsModal(false);
    setCapturedImage(null);
    setMeasurementResults(null);
    startCamera();
  };

  const handleSaveResults = () => {
    console.log("Saving results:", measurementResults);
    // Add your save logic here (e.g., save to database, local storage, etc.)
    alert("Results saved successfully!");
    setShowResultsModal(false);
    handleClose();
  };

  const closeResultsModal = () => {
    setShowResultsModal(false);
  };

  // Navigation Functions
  const handleNext = () => {
    if (currentStep < steps.length + 2) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleClose = () => {
    stopCamera();
    setIsModalOpen(false);
    setCurrentStep(0);
    setCapturedImage(null);
    setShowPlaceholder(true);
    setShowResultsModal(false);
    setMeasurementResults(null);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  // Helper Functions
  const getCurrentStepType = () => {
    if (currentStep < steps.length) return "tutorial";
    if (currentStep === steps.length) return "privacy";
    if (currentStep === steps.length + 1) return "camera-access";
    return "measurement";
  };

  const getModalTitle = () => {
    if (currentStep < steps.length) return "How it works";
    if (currentStep === steps.length) return "Privacy & Terms";
    if (currentStep === steps.length + 1) return "Camera Access";
    return "Measurement Calculation";
  };

  const getButtonText = () => {
    if (currentStep < steps.length - 1) return "Next";
    if (currentStep === steps.length - 1) return "Continue";
    if (currentStep === steps.length) return "Accept & Continue";
    if (currentStep === steps.length + 1) return "Allow Camera Access";
    return null;
  };

  return {
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
    startCamera,
    stopCamera,
    handleCapture,
    handleRetakeMeasurement,
    handleSaveResults,
    closeResultsModal,

    // Helpers
    getCurrentStepType,
    getModalTitle,
    getButtonText,
  };
};
