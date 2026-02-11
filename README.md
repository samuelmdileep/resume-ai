# 🚀 SkillsDoc -- AI Resume Builder & ATS Analyzer

SkillsDoc is a cloud-based web application that enables users to
document verified skills, manage academic profiles, and generate
AI-powered, ATS-optimized resumes with real-time analysis.

The platform integrates Firebase and Gemini AI to transform structured
skill data into professional, job-ready resumes.

------------------------------------------------------------------------

## 🌟 Core Features

### 🔐 Authentication

-   Google Sign-In using Firebase Authentication
-   Secure user-based data isolation
-   Persistent login sessions

### 📄 Skill Management

-   Add / Edit / Delete skills
-   Google Drive certificate link support
-   Auto-fetch certificate file name
-   Recycle Bin with restore functionality
-   Real-time search

### 👤 Profile Management

-   Editable academic details
-   Course, department, college, university
-   Profile image support
-   Structured Firestore storage

### 📝 Resume Builder

-   Multiple resume templates
-   Auto-fill using stored profile and skills
-   Clean structured layout
-   PDF export support

### 🤖 AI Resume Generator

-   Gemini-powered resume generation
-   ATS-friendly formatting
-   Professional, action-oriented content
-   Structured resume output

### 📊 AI Resume Analyzer

-   ATS Score (0--100)
-   Missing keyword detection
-   Improvement suggestions
-   Resume optimization feedback

------------------------------------------------------------------------

## 🏗️ Tech Stack

### Frontend

-   HTML
-   Tailwind CSS
-   Vanilla JavaScript

### Backend & Cloud

-   Firebase Authentication
-   Firestore Database
-   Gemini API (Generative Language API)
-   Google Drive API

------------------------------------------------------------------------

## 📂 Project Structure

    index.html        → Redirect to dashboard
    login.html        → Authentication
    dashboard.html    → Skill & profile management
    resume.html       → Template selection
    generate.html     → Resume preview + AI integration

------------------------------------------------------------------------

## 🔧 Setup Guide

### 1️⃣ Clone Repository

git clone https://github.com/your-username/skillsdoc.git cd skillsdoc

### 2️⃣ Configure Firebase

-   Create Firebase project
-   Enable Google Authentication
-   Enable Firestore Database
-   Replace Firebase configuration in project files

### 3️⃣ Add Gemini API Key

Replace in project:

const GEMINI_KEY = "YOUR_API_KEY";

### 4️⃣ Deploy

Deploy using: - Firebase Hosting - GitHub Pages - Vercel / Netlify

------------------------------------------------------------------------

## 🎯 Target Users

-   Students preparing for placements
-   Internship applicants
-   Fresh graduates
-   Entry-level professionals

------------------------------------------------------------------------

## 🚀 Future Scope

-   Job-description-based resume tailoring
-   LinkedIn optimization module
-   Resume version tracking
-   Recruiter dashboard
-   Skill gap analysis system

------------------------------------------------------------------------

## 📌 Project Status

-   Authentication implemented
-   Skill & profile management functional
-   Resume templates working
-   AI resume generation integrated
-   AI resume analysis integrated
-   PDF export supported

------------------------------------------------------------------------

## 🏆 Vision

SkillsDoc aims to evolve into a complete AI-powered career optimization
platform that enables structured skill documentation, intelligent resume
generation, and data-driven career improvement.
