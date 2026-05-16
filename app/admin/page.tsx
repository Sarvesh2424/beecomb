"use client";

import React, { useEffect, useState } from "react";
import { db } from "@/lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore/lite";
import { Montserrat } from "next/font/google";
import { getUploadUrl } from "../actions/s3";

const mont = Montserrat({});

export default function page() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [error, setError] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const target = e.target as any;
    if (target.password.value === "anthill" && target.uname.value === "admin") {
      localStorage.setItem("login", "true");
      setIsLoggedIn(true);
      setError("");
    } else {
      setError("Invalid credentials!");
    }
  };

  useEffect(() => {
    const savedLoginState = localStorage.getItem("login");
    if (savedLoginState === "true") {
      setIsLoggedIn(true);
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!image) return;

    console.log(db);
    if (!db) {
      console.log(
        "CRITICAL ERROR: 'db' is undefined. Go check your import statement or firebase configuration file!",
      );
      return;
    }

    setLoading(true);
    try {
      const { signedUrl, publicUrl } = await getUploadUrl(
        image.name,
        image.type,
      );

      const uploadRes = await fetch(signedUrl, {
        method: "PUT",
        body: image,
        headers: { "Content-Type": image.type },
      });

      if (!uploadRes.ok) throw new Error("S3 payload transmission failed.");

      const processedTags = tags
        ? tags
            .split(",")
            .map((t) => t.trim())
            .filter((t) => t !== "")
        : [];

      const docRef = await addDoc(collection(db, "portfolio"), {
        title: title.trim(),
        description: description.trim(),
        tags: processedTags,
        image: publicUrl,
      });

      console.log("Uploaded perfectly! Asset is live at:", publicUrl);
      alert("Project saved successfully!");
    } catch (error) {
      console.error(error);
      alert("Upload pipeline failure.");
    } finally {
      setLoading(false);
    }
  };

  if (!isLoggedIn) {
    return (
      <div
        className={`${mont.className} min-h-screen bg-black flex items-center justify-center p-6`}
      >
        <form
          onSubmit={handleLogin}
          className="bg-white/5 p-8 rounded-3xl border border-white/10 w-full max-w-sm"
        >
          <h2 className="text-2xl font-bold text-white mb-6">Admin Login</h2>
          <input
            name="uname"
            placeholder="User"
            className="w-full p-4 rounded-xl bg-black border border-white/10 text-white mb-4 focus:border-[#00AEEF] outline-none"
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            className="w-full p-4 rounded-xl bg-black border border-white/10 text-white mb-4 focus:border-[#00AEEF] outline-none"
          />
          {error && <p className="text-red-500 mb-6">{error}</p>}

          <button className="w-full py-4 bg-[#00AEEF] hover:cursor-pointer text-white font-bold rounded-xl hover:bg-[#0099D1] transition-all">
            Login
          </button>
        </form>
      </div>
    );
  }

  return (
    <div
      className={`min-h-screen bg-black text-white p-8 md:p-24 ${mont.className}  `}
    >
      <div className="max-w-2xl mx-auto">
        <header className="mb-12 flex justify-between items-center">
          <h1 className="text-3xl font-bold">
            Post <span className="text-[#00AEEF]">New Project</span>
          </h1>
          <button
            onClick={() => setIsLoggedIn(false)}
            className="text-red-500 hover:text-white text-sm "
          >
            Logout
          </button>
        </header>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-bold text-gray-400">
              Project Title
            </label>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              className="w-full p-4 mt-2 rounded-2xl bg-white/5 border border-white/10 focus:border-[#00AEEF] outline-none"
              placeholder="Enter title..."
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-bold text-gray-400">
              Description
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
              className="w-full mt-2 p-4 h-32 rounded-2xl bg-white/5 border border-white/10 focus:border-[#00AEEF] outline-none"
              placeholder="Enter project details..."
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-bold text-gray-400">
              Tags (comma separated)
            </label>
            <input
              value={tags}
              onChange={(e) => setTags(e.target.value)}
              className="w-full p-4 mt-2 rounded-2xl bg-white/5 border border-white/10 focus:border-[#00AEEF] outline-none"
              placeholder="Nextjs, React, Firebase..."
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-bold text-gray-400">
              Project Cover Image
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setImage(e.target.files?.[0] || null)}
              className="w-full p-4 mt-2 rounded-2xl bg-white/5 border border-white/10 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[#00AEEF] file:text-white hover:file:bg-[#0099D1]"
            />
          </div>

          <button
            disabled={loading}
            className="w-full py-5 bg-[#00AEEF] text-white font-bold rounded-2xl shadow-[0_0_20px_rgba(0,174,239,0.3)] hover:scale-[1.02] active:scale-95 transition-all disabled:opacity-50"
          >
            {loading ? "Uploading to Firebase..." : "Launch Project"}
          </button>
        </form>
      </div>
    </div>
  );
}
