import React from 'react';
import "./Education.css"

const Education= ()=>{

 const data = [{class:"B.Tech in Information Technology",location:"Dr. Ambedkar Institute of Technology for Divyangjan, Kanpur (AKTU)",marks:"cumulative GPA 8.2 (end of 5th semester)",date:"2022 – 2026 (Pursuing)"},
{class:"Class 12 (Senior Secondary)",location:"Saint Saif Public Inter College, Gajraula, Amroha (UP)",marks:"Scored 76%",date:"2020 – 2022"},
{class:"Class 10 (Matriculation)",location:"Shikhar Shishu Sadan Senior Secondary School, Dhampur, Bijnor (CBSE)",marks:"Scored 86.8%",date:"2018 – 2020"}
 ]

 return( 
    <>
    <div className='educationdiv'>
        <h2>Education</h2>
        <div className='educationcontent'>
           <ul >
             {data.map((item,index,key) =>(
                <li><div className='uldiv'>
                    <div className='lists'>
                          <div className='listdate'>
                            <h2>{item.class}</h2>
                           <h4>{item.date}</h4>
                           </div>
                        
                        <p>{item.location}</p>
                        <p>{item.marks}</p>
                    </div>
                    </div></li>
             ))}
           </ul>
        </div>
     </div>
     </>
 )
};

export default Education;

