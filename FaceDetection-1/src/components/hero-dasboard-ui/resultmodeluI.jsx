import React from "react";

const ResultModalUI = ({
  isOpen,
  onClose,
  measurementData,
  onRetake,
  onSaveResults,
}) => {
  // Don't render if modal is not open or no data
  if (!isOpen || !measurementData) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/80" onClick={onClose}></div>

      {/* Modal Content */}
      <div
        className="relative bg-[#1a1a1a] rounded-2xl w-full max-w-lg shadow-2xl overflow-hidden flex flex-col"
        style={{ maxHeight: "85vh" }}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-800/50">
          <h2 className="text-lg font-medium text-white">
            Measurement Results
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
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
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto flex-1 px-5 py-5">
          {/* Main Result Section */}
          <div className="flex gap-4 mb-6">
            {/* Captured Image */}
            <div className="w-32 h-32 rounded-xl overflow-hidden bg-gray-800 flex-shrink-0">
              {measurementData.capturedImage ? (
                <img
                  src={measurementData.capturedImage}
                  alt="Captured face"
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-gray-600">
                  <svg
                    className="w-12 h-12"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
              )}
            </div>

            {/* Measurement Details */}
            <div className="flex-1 flex flex-col justify-center">
              <div className="mb-3">
                <h3 className="text-xl font-medium text-white mb-3">
                  Recommended Size:{" "}
                  <span className="text-[#00bcd4] font-semibold">
                    {measurementData.recommendedSize}
                  </span>
                </h3>
                <div className="space-y-1.5">
                  <p className="text-gray-300 text-sm">
                    <span className="text-gray-400">Head Circumference:</span>{" "}
                    <span className="font-medium">
                      {measurementData.headCircumference}
                    </span>
                  </p>
                  <p className="text-gray-300 text-sm">
                    <span className="text-gray-400">Face Width:</span>{" "}
                    <span className="font-medium">
                      {measurementData.faceWidth}
                    </span>
                  </p>
                </div>
              </div>

              <p className="text-gray-300 text-xs mb-2 leading-relaxed">
                <span className="text-gray-400">Description:</span>{" "}
                {measurementData.description}
              </p>

              <p className="text-gray-300 text-sm">
                <span className="text-gray-400">Accuracy:</span>{" "}
                <span className="font-medium">{measurementData.accuracy}</span>
              </p>
            </div>
          </div>

          {/* Suggested Products */}
          {measurementData.suggestedProducts &&
            measurementData.suggestedProducts.length > 0 && (
              <div className="mb-4">
                <h3 className="text-white font-medium text-base mb-3">
                  Suggested Product:
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {measurementData.suggestedProducts.map((product, index) => (
                    <div
                      key={product.id || index}
                      className="bg-[#242424] rounded-xl p-3 border border-gray-800/50"
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-14 h-14 bg-gray-700/50 rounded-lg flex items-center justify-center flex-shrink-0">
                          {product.image ? (
                            <img
                              src={product.image}
                              alt={product.name}
                              className="w-full h-full object-cover rounded-lg"
                            />
                          ) : (
                            <svg
                              className="w-8 h-8 text-gray-500"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                              />
                            </svg>
                          )}
                        </div>
                        <div>
                          <div className="flex items-center gap-1.5 mb-0.5">
                            <h4 className="text-white font-semibold text-sm">
                              {product.name}
                            </h4>
                            {product.productLine && (
                              <span className="bg-[#00bcd4] text-white text-[10px] font-bold px-1.5 py-0.5 rounded">
                                {product.productLine}
                              </span>
                            )}
                          </div>
                          <p className="text-gray-300 text-xs">
                            Size:{" "}
                            <span className="font-medium text-[#00bcd4]">
                              {product.size}
                            </span>
                          </p>
                        </div>
                      </div>
                      <button className="w-full bg-[#00bcd4] hover:bg-[#00acc1] text-white font-semibold py-2 px-3 rounded-full transition-colors text-xs">
                        Buy Now
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

          {/* Terms */}
          <p className="text-gray-500 text-xs text-center">
            Your data is secure. Terms & Conditions apply.
          </p>
        </div>

        {/* Footer Actions */}
        <div className="px-5 py-4 flex gap-3">
          <button
            onClick={onRetake}
            className="flex-1 bg-transparent border-2 border-[#00bcd4] text-[#00bcd4] hover:bg-[#00bcd4]/10 font-semibold py-2.5 px-4 rounded-full transition-colors flex items-center justify-center gap-2 text-sm"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              />
            </svg>
            Retake
          </button>
          <button
            onClick={onSaveResults}
            className="flex-1 bg-[#00bcd4] hover:bg-[#00acc1] text-white font-semibold py-2.5 px-4 rounded-full transition-colors flex items-center justify-center gap-2 text-sm"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"
              />
            </svg>
            Save Results
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResultModalUI;
