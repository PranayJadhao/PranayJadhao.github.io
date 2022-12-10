import React from "react";
import GitHubCalendar from "react-github-calendar";
import ReactTooltip from "react-tooltip";
const Calender = () => {
  const selectLastHalfYear = (contributions) => {
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    const shownMonths = 10;

    return contributions.filter((day) => {
      const date = new Date(day.date);
      const monthOfDay = date.getMonth();

      return (
        date.getFullYear() === currentYear &&
        monthOfDay > currentMonth - shownMonths &&
        monthOfDay <= currentMonth
      );
    });
  };
  return (
    <div name="Github Calender" className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen '>
    <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>

    

<div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Github Calender</p>
                <p className='py-6'>Below is my github calender</p>
            </div>
   
    <div >
      <GitHubCalendar
        style={{ margin: "auto" }}
        username="saurabh0413"
        transformData={selectLastHalfYear}
        blockSize={20}
        fontSize={20}
      >
         <ReactTooltip delayShow={20} html /> 
      </GitHubCalendar>
    </div>
    </div>
    </div>
  );
};

export default Calender;