// Define responses for various categories
const responses = {
    "experience": "Nibha has held various roles, including Research Intern at Samsung Prism, 3D Virtual Reality Design Intern at aiRender, Research Collaborator, and participated in Investment Banking Job Simulation at JPMorgan Chase. For more details on a specific role, just ask!",
    "research-intern": "As a Research Intern at Samsung Prism (May 2023 – April 2024), Nibha developed a Unity-based application for creating 3D models from 2D images, enabling users to explore models with six degrees of freedom. She implemented multi-plane reconstruction (MPR) for enhanced visualization, improving interaction time by 15%. Nibha also optimized algorithms for accurate model generation, reducing processing time by 25%, and collaborated with a team to improve user experience, increasing engagement by 30%.",
    "3d-vr-intern": "In her role as a 3D Virtual Reality Design Intern at aiRender (May 2024 – Present), Nibha spearheaded the development of a 2D and 3D video conferencing app, incorporating immersive interactions and high-resolution visuals. She designed and optimized 3D models and virtual environments, maintaining 90% performance efficiency on low bandwidth systems, and integrated VR technologies and machine learning features, improving user satisfaction by 20%.",
    "research-collaborator": "As a Research Collaborator (March 2023 – June 2023), Nibha conducted data analysis on the relationship between burnout and impulsiveness using Python and data science techniques. Her statistical insights contributed to a report on mental health trends, influencing treatment recommendations.",
    "investment-banking": "During the Investment Banking Job Simulation at JPMorgan Chase (June 2022 – August 2022), Nibha advised WorldWide Brewing Co. on potential acquisition targets to expand operations in Asia, applying financial analysis and market research. She conducted financial modeling and valuation of M&A targets, improving analysis speed by 10%.",
    "corporate-analyst": "In the Corporate Analyst Development Program at JPMorgan Chase (June 2021 – September 2021), Nibha participated in a virtual job simulation, developing technical and project management skills. She analyzed corporate financials and applied strategic planning techniques in a simulated environment.",
    "skills": "Nibha's skills include:\n- **Programming Languages**: C++, Python, Java, JavaScript\n- **Frameworks & Tools**: Unity, TensorFlow, PyTorch, CUDA, OpenMP, Tableau, Photoshop, Pandas\n- **Areas of Expertise**: Machine Learning, Deep Learning, 3D Modeling, Data Analysis, Reinforcement Learning, Parallel Programming, Supply Chain Management\n- **Systems**: Windows, Linux\n- **Business Skills**: Product Management, Financial Analysis, Consulting, Leadership, Effective Communication",
    "projects": "Some of Nibha's projects include developing various investment strategies, creating options pricing models, and building reinforcement learning environments. For more details on a specific project, just ask!",
    "quantitative-momentum": "The Quantitative Momentum Investing Strategy developed by Nibha leverages momentum factors to make investment decisions, resulting in a 12% increase in portfolio yield.",
    "quantitative-value": "Nibha created a Quantitative Value Investing Strategy to identify undervalued stocks using key financial metrics. This strategy improved portfolio returns by 15%.",
    "european-options": "Nibha built a Python web app for pricing European options, integrating Black-Scholes, Monte Carlo, and Binomial models. The app also improved calculation speed by 20% through efficient data caching mechanisms.",
    "dinoai": "DinoAI is a reinforcement learning environment developed by Nibha for the Chrome Dinosaur game. It uses Python libraries such as PyTorch, OpenCV, and Pytesseract, along with the Deep Q-Network (DQN) algorithm, to train autonomous gameplay. [Try It here](http://example.com/dinoai).",
    "marioai": "MarioAI, developed by Nibha, involves setting up and preprocessing a Mario environment for reinforcement learning. The model trains agents for autonomous gameplay. [Try It here](http://example.com/marioai).",
    "streetfighterrl": "StreetFighterRL is an environment created by Nibha using Gym and Retro libraries. It employs the Proximal Policy Optimization (PPO) algorithm for training agents in discrete action spaces. [Try It here](http://example.com/streetfighterrl).",
    "tableau-projects": "Nibha developed various dashboards in Tableau for resume analysis, Airbnb rentals, credit card fraud detection, and stock prices, providing valuable insights through data visualization.",
    "education": "Nibha is pursuing a B.Tech. in Data Science and Computer Applications at Manipal Institute of Technology (2021 – Present) with a CGPA of 8.1 (Ongoing). Her academic background includes:\n- **Senior Secondary (12th Grade)**: CBSE Board, 2021, with a percentage of 96%.\n- **Secondary (10th Grade)**: CBSE Board, 2019, with a percentage of 95%.",
    "coursework": "Nibha's coursework includes:\n- **Computer Science**: Data Structures, Object-Oriented Programming, Computer System Architecture, Design Analysis and Algorithms, Data Communication Networks, Operating Systems, Parallel Programming, Data Privacy and Security, Cloud Computing, Database Systems.\n- **Artificial Intelligence**: Introduction to Data Analytics, Machine Learning, Deep Learning, Natural Language Processing, Big Data Analytics.\n- **Finance and Management**: Portfolio Management, Financial Risk Management, Economics, Financial Statement Analysis, Operations Research, Introduction to Advertising.\n- **Mathematics**: Linear Algebra, Basic Calculus, Advanced Calculus, Probability & Stochastic Distribution, Graph Theory, Number Theory.",
    "extracurriculars": "Nibha has been involved in various extracurricular activities, including:\n- **Student Buddy Relations Head, MAHE**: Promoted international relations at MAHE, mentoring students and facilitating cultural exchanges.\n- **Class Representative, MIT**: Served as a liaison between students and faculty, demonstrating leadership and organizing events to develop critical thinking and debate skills.\n- **Project Mudra**: Educated underprivileged children as part of Project Mudra, working toward the goal of providing quality education to all children.\n- **Data Alchemists Club**: Promoted data science awareness and organized technical events to improve skills among peers.\n- **Student Support Team Member**: Worked to improve the well-being of students, focusing on peer counseling and mental health awareness programs.\n- **Lance Corporal, National Cadet Corps (NCC)**: Completed A Certificate, enhancing leadership and discipline through participation in NCC activities.\n- **Co-Editor, Aula Magna Newsletter**: Co-edited two editions, improving engagement and readership by 25%.\n- **Management Committee Member, ACMW**: Advocated for and promoted the engagement of women and underrepresented groups in technology.\n- **Literary Debate and Quiz Society (L)**: Participated in literary debates and quiz competitions.",
};

// Handle dragging and dropping of elements
function allowDrop(event) {
    event.preventDefault();
}

function drag(event) {
    event.dataTransfer.setData("text", event.target.id);
}

function drop(event) {
    event.preventDefault();
    const data = event.dataTransfer.getData("text");
    const item = document.getElementById(data);
    const chatLog = document.getElementById('chat-log');
    
    // Show response based on dropped item
    if (responses[data]) {
        chatLog.innerHTML += `<p><strong>Chatbot:</strong> ${responses[data]}</p>`;
    } else {
        chatLog.innerHTML += `<p><strong>Chatbot:</strong> I'm sorry, I don't have information on that.</p>`;
    }
}

// Get response based on user input
function getResponse() {
    const userInput = document.getElementById("user-input").value.toLowerCase();
    const chatLog = document.getElementById("chat-log");
    
    let botResponse = responses.default;
    if (userInput.includes("experience")) {
        botResponse = responses.experience;
    } else if (userInput.includes("skills")) {
        botResponse = responses.skills;
    } else if (userInput.includes("projects")) {
        botResponse = responses.projects;
    } else if (userInput.includes("quantitative momentum") || userInput.includes("momentum strategy")) {
        botResponse = responses["quantitative-momentum"];
    } else if (userInput.includes("quantitative value") || userInput.includes("value investing")) {
        botResponse = responses["quantitative-value"];
    } else if (userInput.includes("european options") || userInput.includes("options pricing")) {
        botResponse = responses["european-options"];
    } else if (userInput.includes("dinoai")) {
        botResponse = responses.dinoai;
    } else if (userInput.includes("marioai")) {
        botResponse = responses.marioai;
    } else if (userInput.includes("streetfighterrl")) {
        botResponse = responses.streetfighterrl;
    } else if (userInput.includes("tableau")) {
        botResponse = responses.tableau-projects;
    } else if (userInput.includes("education")) {
        botResponse = responses.education;
    } else if (userInput.includes("coursework")) {
        botResponse = responses.coursework;
    } else if (userInput.includes("extracurriculars") || userInput.includes("extracurricular activities")) {
        botResponse = responses.extracurriculars;
    } else if (userInput.includes("contact")) {
        botResponse = responses.contact;
    } else {
        botResponse = responses.default;
    }
    

    // Add response to chat log
    chatLog.innerHTML += `<p><strong>Chatbot:</strong> ${response}</p>`;
    document.getElementById('user-input').value = ''; // Clear input field
}
