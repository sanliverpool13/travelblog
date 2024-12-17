"use client";
import React, { useState } from "react";

const Plants = () => {
  const [activeTab, setActiveTab] = useState("recipes");

  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-[90%] max-w-[1300px] h-full flex flex-col gap-y-8 items-center">
        {/* Tab Navigation */}
        <div className="w-full flex justify-center border-b">
          <button
            onClick={() => setActiveTab("recipes")}
            className={`px-6 py-3 font-medium ${
              activeTab === "recipes"
                ? "text-green-600 border-b-2 border-green-600"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            Recipes
          </button>
          <button
            onClick={() => setActiveTab("reviews")}
            className={`px-6 py-3 font-medium ${
              activeTab === "reviews"
                ? "text-green-600 border-b-2 border-green-600"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            Reviews
          </button>
        </div>
        {/* Tab Content */}
        {activeTab === "recipes" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            <div className="rounded-lg border p-6">
              <h2 className="font-semibold text-xl mb-4">Georgian Lobio</h2>
              {/* Recipe content */}
            </div>
            <div className="rounded-lg border p-6">
              <h2 className="font-semibold text-xl mb-4">Tofu Sandwich</h2>
              {/* Recipe content */}
            </div>
          </div>
        )}

        {activeTab === "reviews" && (
          <div className="w-full">{/* Reviews content */}</div>
        )}
      </div>
    </div>
  );
};

export default Plants;
