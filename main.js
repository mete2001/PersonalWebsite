


function showSkills(category) {
    // Define the new content for each category
    const content = {
        'frontendBox1': '<div id="frontend" class="skills__category-content"><h2 class="skills__category-title">Frontend</h2><div id="frontend" class="skills__category-content"> <ul class="skills__list"> <li class="skills__item">JavaScript</li> <li class="skills__item">React Native</li> <li class="skills__item">HTML</li> <li class="skills__item">CSS</li> <li class="skills__item">WebGL</li> <li class="skills__item">Redux</li> <li class="skills__item">Swift</li> </ul> </div>',
        'frontendBox2': ` <div id="frontend2" class="skills__category-content"> <h2 class="skills__category-title">Related Coursework & Project Work</h2> <h3>Coursework at UBC</h3> <ul class="skills__list"> <li class="skills__item">Software Engineering</li> <li class="skills__item">Human-Computer Interaction</li> <li class="skills__item">Databases</li>  <li class="skills__item">Computer Graphics</li>  </ul> <h3>Frontend Skills from Project Work</h3> <ul class="skills__list"> <li class="skills__item">3D SuperBugZapper (WebGL, JavaScript, HTML)</li> <li class="skills__item">Grandfinder (Android, Java, Kotlin)</li><li class="skills__item">Library System (CSS, jQuery, SQL, API's, JUnit)</li> </ul> </div>`,
        'frontendBox3': ` <div id="frontend3" class="skills__category-content"> <h2 class="skills__category-title">Professional Experience</h2> <ul class="skills__list"> <li class="skills__item">Co-developing a business process automation solution using CSS, JavaScript, and jQuery with a SaaS provider at Jealous Fruits.</li> <li class="skills__item">Developing user interface pages with React Native for a groundbreaking on-demand freelance job platform at JOBBOX Technologies Inc.</li> </ul> </div>`,
        'backendBox1': '<div id="backend" class="skills__category-content"> <h2 class="skills__category-title">Backend</h2><ul class="skills__list"><li class="skills__item">Java</li><li class="skills__item">Python</li><li class="skills__item">PostgreSQL</li><li class="skills__item">C++</li><li class="skills__item">MongoDB</li><li class="skills__item">Node.js</li><li class="skills__item">SQL</li><li class="skills__item">Kotlin</li></ul></div>',
        'backendBox2': ` <div id="backend2" class="skills__category-content"> <h2 class="skills__category-title">Related Coursework & Project Work</h2> <h3>Coursework at UBC</h3> <ul class="skills__list"> <li class="skills__item">Software Engineering</li> <li class="skills__item">Databases</li> <li class="skills__item">Data Analytics</li> <li class="skills__item">Networks</li><li class="skills__item">Computer Graphics</li> <li class="skills__item">Artificial Intelligence</li> </ul> <h3>Backend Skills from Project Work</h3> <ul class="skills__list"> <li class="skills__item">Library System (CSS, jQuery, SQL, API's, JUnit)</li> <li class="skills__item">Dirtland (HTML, CSS, JavaScript, SQL, Docker, UML)</li> <li class="skills__item">AI for the game of Amazons (Java)</li> <li class="skills__item">Grandfinder (Android, Java, Kotlin)</li> </ul> </div>`,
        'backendBox3': `
        <div id="backend3" class="skills__category-content">
          <h2 class="skills__category-title">Professional Experience</h2>
          <ul class="skills__list">
            <li class="skills__item">Developing and optimizing an ERP software system for logistics, troubleshooting, and enhancing usability for staff, leading to a 25% increase in productivity at Jealous Fruits.</li>
            <li class="skills__item">Engineered a robust backend using Node.js and MongoDB, improving data retrieval efficiency by 30% at JOBBOX Technologies Inc.</li>
          </ul>
        </div>`,
        'toolsBox1': `<div id="frontend" class="skills__category-content">
        <h2 class="skills__category-title">Frontend</h2>
        <div id="frontend" class="skills__category-content"> 
            <ul class="skills__list"> <li class="skills__item">JavaScript</li> <li class="skills__item">React Native</li> <li class="skills__item">HTML</li> <li class="skills__item">CSS</li> <li class="skills__item">WebGL</li> <li class="skills__item">Redux</li> <li class="skills__item">Swift</li> </ul> 
        </div>
    </div>`,
        'toolsBox2': `<div id="backend" class="skills__category-content">
        <h2 class="skills__category-title">Backend</h2>
        <ul class="skills__list">
            <li class="skills__item">Java</li>
            <li class="skills__item">Python</li>
            <li class="skills__item">PostgreSQL</li>
            <li class="skills__item">C++</li>
            <li class="skills__item">MongoDB</li>
            <li class="skills__item">Node.js</li>
            <li class="skills__item">SQL</li>
            <li class="skills__item">Kotlin</li>
        </ul>
    </div>`,
        'toolsBox3': `<div id="tools" class="skills__category-content">
        <h2 class="skills__category-title">Tools</h2>
        <ul class="skills__list">
            <li class="skills__item">Agile</li>
            <li class="skills__item">VSCode</li>
            <li class="skills__item">Heroku</li>
            <li class="skills__item">Bash</li>
            <li class="skills__item">Docker</li>
            <li class="skills__item">Git</li>
            <li class="skills__item">Scrum</li>
            <li class="skills__item">Tableau</li>
        </ul>
    </div>`,
    };
    
    let selectedCategory = document.getElementById(category); 
   // let title = selectedCategory.getElementsByClassName('skills__category-title')[0];
    // Hide all content areas
    document.getElementById('Box1').style.display = 'none';
    document.getElementById('Box2').style.display = 'none';
    document.getElementById('Box3').style.display = 'none';
    
    // Show the selected category
    
    
    document.getElementById('Box1').innerHTML = content[category+'Box1'];
    document.getElementById('Box2').innerHTML = content[category+'Box2'];
    document.getElementById('Box3').innerHTML = content[category+'Box3'];
    document.getElementById('Box1').style.display = 'block';
    document.getElementById('Box2').style.display = 'block';
    document.getElementById('Box3').style.display = 'block';
    
    document.getElementById('myButton').classList.add('button-clicked');
    



/* function showSkills(category) {
    // Hide all categories
    let categories = document.getElementsByClassName('skills__category-content');
    for (let i = 0; i < categories.length; i++) {
        categories[i].style.display = 'none';
    }

    // Display the selected category
    let selectedCategory = document.getElementById(category); 
    selectedCategory.style.display = 'block';

    // Display the title of the selected category
    let title = selectedCategory.getElementsByClassName('skills__category-title')[0];
    title.style.display = 'block';
}*/

}

