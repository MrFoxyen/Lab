async function loadJson() {
    try {
      const response = await fetch('data/data.json'); // Шлях до JSON
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
  
      console.log('Data loaded:', data);
      renderProfile(data.profile);
      renderSkills(data.skills);
      renderContact(data.contact);
      renderEducation(data.education);
      renderJobs(data.job);
      renderReferences(data.reference);
      renderLanguages(data.languages);
      renderHobbies(data.hobbies);
  
    } catch (error) {
      console.error('Error loading JSON:', error);
    }
  }
  
  // Функції для відображення різних розділів
  function renderProfile(profile) {
    const profileSection = document.getElementById('profile');
    profileSection.innerHTML = `
      <p>${profile.description}</p>
    `;
  }
  
  function renderSkills(skills) {
    const skillsSection = document.getElementById('skills');
    skillsSection.innerHTML = `
      <div class="skills-slider">
        ${skills.map((skill, index) => `
          <div class="skill-item">
            <div class="skill-label">${skill.name}</div>
            <input type="range" class="slider slider-${index + 1}" value="${skill.level}" min="0" max="100">
          </div>
        `).join('')}
      </div>
    `;
  }
  
  // Sample skills data from JSON
  const skillsData = [
    { "name": "Adobe Photoshop", "level": 80 },
    { "name": "Adobe Illustrator", "level": 70 },
    { "name": "HTML & CSS", "level": 90 },
    { "name": "Microsoft Word", "level": 56 },
    { "name": "Microsoft PowerPoint", "level": 50 }
  ];
  
  // Call the render function
  renderSkills(skillsData);
  
  function renderContact(contact) {
    const contactSection = document.getElementById('contact');
    contactSection.innerHTML = `
      <span><i class="fas fa-phone-alt"></i> ${contact.phone}</span>
      <span><i class="fas fa-envelope"></i> ${contact.email}</span>
      <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-globe-europe-africa" viewBox="0 0 16 16">
        <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0M3.668 2.501l-.288.646a.847.847 0 0 0 1.479.815l.245-.368a.81.81 0 0 1 1.034-.275.81.81 0 0 0 .724 0l.261-.13a1 1 0 0 1 .775-.05l.984.34q.118.04.243.054c.784.093.855.377.694.801-.155.41-.616.617-1.035.487l-.01-.003C8.274 4.663 7.748 4.5 6 4.5 4.8 4.5 3.5 5.62 3.5 7c0 1.96.826 2.166 1.696 2.382.46.115.935.233 1.304.618.449.467.393 1.181.339 1.877C6.755 12.96 6.674 14 8.5 14c1.75 0 3-3.5 3-4.5 0-.262.208-.468.444-.7.396-.392.87-.86.556-1.8-.097-.291-.396-.568-.641-.756-.174-.133-.207-.396-.052-.551a.33.33 0 0 1 .42-.042l1.085.724c.11.072.255.058.348-.035.15-.15.415-.083.489.117.16.43.445 1.05.849 1.357L15 8A7 7 0 1 1 3.668 2.501"/>
      </svg> ${contact.website}</span>
      <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-map-fill" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M16 .5a.5.5 0 0 0-.598-.49L10.5.99 5.598.01a.5.5 0 0 0-.196 0l-5 1A.5.5 0 0 0 0 1.5v14a.5.5 0 0 0 .598.49l4.902-.98 4.902.98a.5.5 0 0 0 .196 0l5-1A.5.5 0 0 0 16 14.5zM5 14.09V1.11l.5-.1.5.1v12.98l-.402-.08a.5.5 0 0 0-.196 0zm5 .8V1.91l.402.08a.5.5 0 0 0 .196 0L11 1.91v12.98l-.5.1z"/>
      </svg> ${contact.address}</span>
    `;
  }
  
  // Sample contact data from JSON
  const contactData = {
    "phone": "+1 607-288-3649",
    "email": "yourname@email.com",
    "website": "www.yourwebsite.com",
    "address": "123 Elm Street Manchester, NH"
  };
  
  // Call the render function
  renderContact(contactData);
  
  
  function renderEducation(education) {
    const educationSection = document.getElementById('education');
    educationSection.innerHTML = education.map(edu => `
      <div>
        <h3>${edu.university} (${edu.year})</h3>
        <p>${edu.degree}</p>
        <p>${edu.description}</p>
      </div>
    `).join('');
  }
  
  function renderJobs(jobs) {
    const jobsSection = document.getElementById('job');
    jobsSection.innerHTML = jobs.map(job => `
      <div class="section-item">
        <span class="bold">${job.position}</span>, <em>${job.company}</em>
        <p><span class="year">${job.year}</span></p>
        <p>${job.description}</p>
      </div>
    `).join('');
  }
  
  // Sample job data from JSON
  const jobData = [
    {
      "position": "Graphic Designer",
      "company": "Creative Agency",
      "year": "2016-2020",
      "description": "Worked on various design projects, including branding, marketing materials, and digital media content."
    },
    {
      "position": "Freelance Designer",
      "company": "Self-employed",
      "year": "2020-Present",
      "description": "Specialized in web and graphic design for diverse clients, ensuring high-quality and creative solutions."
    }
  ];
  
  // Call the render function
  renderJobs(jobData);
  
  
  
  function renderReferences(references) {
    const referenceSection = document.getElementById('references');
    referenceSection.innerHTML = references.map(ref => `
      <div>
        <p><strong>${ref.name}</strong> - ${ref.position}</p>
        <p>Email: <a href="mailto:${ref.email}">${ref.email}</a></p>
      </div>
    `).join('');
  }
  
  function renderLanguages(languages) {
    const languagesSection = document.getElementById('languages');
    languagesSection.innerHTML = `
      <table class="table-section">
        <tr>
          ${languages.map(language => `<td>${language}</td>`).join('')}
        </tr>
      </table>
    `;
  }
  
  // Sample languages data from JSON
  const languagesData = ["English", "Spanish", "French"];
  
  // Call the render function
  renderLanguages(languagesData);
  
  
  function renderHobbies(hobbies) {
    const hobbiesSection = document.getElementById('hobbies');
    const rows = hobbies.reduce((acc, hobby, index) => {
      const rowIndex = Math.floor(index / 2);
      if (!acc[rowIndex]) acc[rowIndex] = [];
      acc[rowIndex].push(`
        <td>
          <div><img src="${hobby.icon}" alt="Icon for ${hobby.name}"></div>
          <div>${hobby.name}</div>
        </td>
      `);
      return acc;
    }, []);
    
    const tableContent = rows.map(row => `<tr>${row.join('')}</tr>`).join('');
    
    hobbiesSection.innerHTML = `
      <table class="hobby-table">
        ${tableContent}
      </table>
    `;
  }
  
  // Sample hobbies data from JSON
  const hobbiesData = [
    { "name": "Traveling", "icon": "images/traveling.svg" },
    { "name": "Gaming", "icon": "images/gaming.svg" },
    { "name": "Music", "icon": "images/music.svg" },
    { "name": "Gyming", "icon": "images/gyming.svg" }
  ];
  
  // Call the render function
  renderHobbies(hobbiesData);
  
  
  // Завантаження даних при завантаженні сторінки
  document.addEventListener('DOMContentLoaded', loadJson);
  