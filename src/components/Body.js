import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import './Body.css';



function Body() {
    

    const [selectedProject, setSelectedProject] = useState(null);

    const projects = [
        { 
            id: 1, 
            title: "Linux-like Kernel", 
            desc: "3 developers and I implemented a Linux-like kernel with robust interrupt handling, including IDT configuration for keyboard and RTC interrupts. We implemented paging for memory alignment and developed drivers for terminals, file systems, and RTCs, enhancing functionality with features like vertical scrolling and adjustable virtualized clock frequencies. Additionally, we implemented system calls for effective program and file system management, supported multiple shell instances, and introduced a preemptive scheduler to manage up to six processes across multiple terminals, optimizing task switching and system performance.", 
            img: "/391os.gif" 
        },
        { 
            id: 2, 
            title: "Elden Ring Speedrun Optimizer", 
            desc: "4 fellow developers and I optimized speedrunning routes in the video game Elden Ring by representing the game's map as a weighted, directed graph with bosses as nodes and travel times as edges.\n\nWe implemented various algorithms to find the shortest paths for both comprehensive (100% completion) and specific boss-to-boss routes, and displayed the computed paths using a Python GUI.\n\nData for the graph was meticulously gathered from actual gameplay by one of our team members, an avid Elden Ring enthusiast.", 
            img: "/ER_project.png" 
        },
        { 
            id: 3, 
            title: "ML Project Management", 
            desc: "Description for Project 3", 
            img: "/workflow.png" 
        },
        { 
            id: 4, 
            title: "Dear (My) Data", 
            desc: "Inspired by the year-long, analog data drawing project by Giorgia Lupi and Stefanie Posavec called “Dear Data” centered around creating novel and human-centered representations of collected personal data, this project represents my own way of visualizing my music consumption over a week. In this project, I developed a Python application I had run continuously for a week to fetch data on the tracks I listened to, their artists, durations, and genres using Spotify API. I then used this log to categorize and visualize my listening habits by genre, which unveiled interesting patterns in my music consumption and how they juxtaposed various psychological and situational factors during the week.", 
            img: "/dear_data.png" 
        }
    ];
    
    const { ref: aboutRef, inView: aboutInView } = useInView({
        triggerOnce: false,
        threshold: 0.25
    });

    const { ref: experienceRef, inView: experienceInView } = useInView({
        triggerOnce: false,
        threshold: 0.25
    });


    const { ref: resumeRef, inView: resumeInView } = useInView({
        triggerOnce: false,
        threshold: 0.25
    });

    const { ref: contactRef, inView: contactInView } = useInView({
        triggerOnce: false,
        threshold: 0.25
    });

    const { ref: outroRef, inView: outroInView } = useInView({
        triggerOnce: false,
        threshold: 0.25
    })
    


    return (
        <div className="body">
            {selectedProject && <div className="full-screen-overlay active"></div>}        
            <div className="about" ref={aboutRef} style={{ opacity: aboutInView ? 1 : 0 }}>
                <div className="intro-tab">
                    <p className="intro-text"><strong>Welcome!</strong> 👋 You're in the right place.</p>
                </div>

                <div className="intro-container">
                    <div className="profile-img-container">
                        <img className="profile" src="./my-personal-website/grad_pic.png" alt="Gyury Lee" />
                    </div>

                    <div className="profile-img-container">
                        <p className="main-intro">
                        I am a recent UIUC grad with a Bachelor of Science in Information Sciences and a minor in Computer Science. My academic journey and experiences span broadly from high-level, human-centered design and data analysis to lower-level computer systems and architecture engineering. I look forward to contributing to your team. 
                        </p>
                    </div>
                </div>
            </div>

            <div className="contents"> 
                <div id="experience" className={`section ${experienceInView ? 'section-visible' : 'section-hidden'}`} ref={experienceRef}>
                    <div><p className="exp_header"><strong>Experience</strong></p></div>
                    <div className="projects">
                        {projects.map(project => (
                            <div key={project.id} className="project" onClick={() => setSelectedProject(project)}>
                                <div className="project-image-container">
                                    <img src={project.img} alt={project.title} />
                                </div>
                                <div className="overlay">
                                    <div className="project-title">{project.title}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {selectedProject && (
                    <div className="popup">
                        <div className="popup_top">
                            <img src={selectedProject.img} alt={selectedProject.title} />
                        </div>
                        <div className="popup_bottom">
                            <div className="popup_desc"><p>{selectedProject.desc}</p></div>
                        </div>
                        <button className="exit_button" onClick={() => setSelectedProject(null)}>
                            <img src="/exit_button.png" alt="Close" />
                        </button>
                    </div>
                )}

                <div id="resume" className={`section ${resumeInView ? 'section-visible' : 'section-hidden'}`} ref={resumeRef}>

                    <div className="intro-container">

                        <div className="profile-img-container">
                            <p className="main-intro">
                            Let's get to work. Click here to view or download my resume. →
                            </p>
                        </div>

                        <div className="profile-img-container">
                            {/* Link to open PDF in a new tab */}
                            <a href="/Gyury_resume_5-25.pdf" target="_blank" style={{ textDecoration: 'none' }}>
                                <div className="project-image-container">
                                    <img className="profile" src="/resume.png" alt="Resume" />
                                    <div className="resume-overlay"></div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>

                <div id="contact" className={`section ${contactInView ? 'section-visible' : 'section-hidden'}`} ref={contactRef}>
                    <p className="contact-text"> Get in touch with me at <a href="mailto:youremail@example.com" style={{ textDecoration: 'none', color: 'hsl(70, 100%, 40%)' }}>gyury.lee9@gmail.com</a></p>
                </div>
                
                <div id="outro" className={`section ${outroInView ? 'section-visible' : 'section-hidden'}`} ref={outroRef}>
                    <div className="outro-tab"></div>   
                </div>
   
            </div>
        </div>
    );
}

export default Body;
