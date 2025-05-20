'use client'
import React from 'react'
import './local.css';
import { useState } from 'react';
const Page = () => {
    const [activeTab,setActiveTab] = useState('vision');

  return (
    <div>
        <div className="main">
            <div className="left-side">
                <div className="vision">
                <button className="v-vision" 
                    onClick={() =>{setActiveTab('vision')}}
                    style={{
                        backgroundColor: activeTab === 'vision' ? 'orange' : 'white',
                        color: activeTab === 'mission' ? 'black' : 'white',
                        marginRight: '10px',
                        padding: '10px 20px',
                        border: '2px solid orange',
                        borderRadius: '10px',
                        cursor: 'pointer',
                      }}
                    >Vision</button>
                <button className="v-mission" 
                    onClick={() =>{setActiveTab('mission')}}
                    style={{
                        backgroundColor: activeTab === 'mission' ? 'orange' : 'white',
                        color: activeTab === 'mission' ? 'white' : 'black',
                        marginRight: '10px',
                        padding: '10px 20px',
                        border: '2px solid orange',
                        borderRadius: '10px',
                        cursor: 'pointer',
                      }}
                    >Mission</button>
                </div>
                <div>
                    {activeTab === 'vision' && (
                        <p id="vision-paragraph">
                        To create a warm, immersive, and inclusive space—both physical and
                        digital where readers of all ages and backgrounds can explore,
                        discover, and fall in love with the world of books.
                        </p>
                    )}
                    {activeTab === 'mission' && (
                        <p id="mission-paragraph">
                        To connect people with stories that inspire, educate, and empower by
                        offering a diverse collection of books, fostering a culture of
                        reading, and creating a welcoming space where curiosity thrives.
                        </p>
                    )}
                    
                </div>
            </div>
            <div className="right-side">
                <img
                src="/image/missionvision.jpg"
                alt="mission vision image"
                width="400px"
                height="400px"
                />
            </div>
        </div>
    </div>
  );
}

export default Page