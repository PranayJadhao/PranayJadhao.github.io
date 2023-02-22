import React from "react";


const Stats = () => {
  return (
    // streak 
    <div name='Github Stats' className='bg-zinc-500 w-full text-white md:h-screen py-9'>

    <div className='max-w-screen-lg px-4 py-3 mx-auto flex flex-col justify-center w-full h-full'>

<div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>streak, Language, Stats</p>
                <p className='py-6'>Below is my github Streak, most used languages and github stats </p>
            </div>
   
    <div>
      <div style={{ width: "60%", margin: "auto"}}>
        <a href="https://github.com/PranayJadhao">
          <img
            align="left"
            src="https://github-readme-streak-stats.herokuapp.com/?user=PranayJadhao&hide_border=true&theme=react&hide_border=true&bg_color=0D1117"
          />
        </a>
      </div>
      <br></br>
 
      <div
        style={{
          width: "60%",
        // height: "300px",
             margin: "auto",
   
        }}
      >
        <a href="https://github.com/PranayJadhao">  
          <img
            align="center"
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=aniketpandey2912&langs_count=8&count_private=true&layout=compact&theme=react&hide_border=true&bg_color=0D1117"  //launguages
          />
        </a>
        
       
      </div>
      <div  style={{
        width: "60%",
        //  height: "300px",
           margin: "auto",
        }}>
      <a href="https://github.com/PranayJadhao">
          <img
            align="left"
            src="https://github-readme-stats.vercel.app/api?username=PranayJadhao&show_icons=true&locale=en&theme=react&hide_border=true&bg_color=0D1117" //stats
          />
        </a>
      </div>
    </div>
    </div>
    </div>
  );
};

export default Stats;