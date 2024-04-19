"use client";
import React from "react";
import Link from "next/link";
import Courses from "./components/Courses";
import CourseSearch from "./components/CourseSearch";
import LoadingPage from "./loading";
import { useState, useEffect } from "react";

const HomePage = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      const res = await fetch("http://localhost:3000/api/courses");
      const data = await res.json();

      console.log(data);
      setCourses(data);
      setLoading(false);
    };

    fetchCourses();
  }, []);

  if (loading) {
    return <LoadingPage />;
  }

  return (
    <>
      <h1>Welcome to Traversy Media</h1>
      <CourseSearch getSearchResults={(results) => setCourses(results)} />
      <Courses courses={courses} />
    </>
  );
};

export default HomePage;
