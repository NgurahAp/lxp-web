import React, { useState, useEffect } from "react";
import { DashboardContentProps } from "../../types/dashboard";
import { Calendar } from "./components/Calendar";
import { SubjectProgress } from "./components/SubjectProgress";


const DashboardContent: React.FC<DashboardContentProps> = ({
  dashboardData,
  dashboardBannerdata,
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (dashboardBannerdata.length === 0) return;

    const interval = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % dashboardBannerdata.length
      );
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [dashboardBannerdata.length]);

  // console.log(dashboardBannerdata);

  return (
    <div className="w-[70%] bg-gray-100 pl-6 py-6">
      <div className="relative overflow-hidden h-96 rounded-3xl">
        {dashboardBannerdata.map((banner, index) => (
          <img
            key={banner.id}
            src={banner.url}
            className={`absolute w-full h-full object-cover transition-transform duration-500 ease-in-out ${
              index === currentImageIndex ? "translate-x-0" : "translate-x-full"
            }`}
            style={{
              transform: `translateX(${(index - currentImageIndex) * 100}%)`,
            }}
          />
        ))}
      </div>
      <SubjectProgress subjectProgressData={dashboardData.subject_progress}/>
      <Calendar calendarData={dashboardData.calendar} />
    </div>
  );
};

export default DashboardContent;
