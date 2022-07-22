const projectForm = document.getElementById('project-form')
const projectContainer = document.getElementById('project-container')


// handle pulling existing projects & displaying

const getProjects = () => {
    return fetch('api/projects')
        .then((response) => response.json())
        .then((data) => data.forEach((project) => createCard(project)))
        .catch(err => console.log(err))
}


// handle posting a new project 

const postProject = (project) => {
    fetch('api/projects', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(project)
    })
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            createCard(project);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}



// function to create a card for an existing project
const createCard = (project) => {
    const cardEl = document.createElement('div');
    cardEl.classList.add('card', 'mb-3');
    cardEl.setAttribute('key', project.project_id);

    // Create card header
    const cardHeaderEl = document.createElement('h3');
    cardHeaderEl.classList.add(
        'card-header',
        'bg-primary',
        'text-light',
        'p-2',
        'm-0'
    );
    cardHeaderEl.innerHTML = `${project.title} </br>`;

    const cardBodyEl = document.createElement('div');
    cardBodyEl.classList.add('card-body', 'bg-light', 'p-2');
    cardBodyEl.innerHTML = `<p>${project.details}</p> <br/> 
    <p>Yarn Color: ${project.yarn}</p>`;

    cardEl.appendChild(cardHeaderEl);
    cardEl.appendChild(cardBodyEl);

    projectContainer.appendChild(cardEl);
}

// create cards on page load

// getProjects.then(data => data.forEach((project) => createCard(project)))

getProjects()

// handle form submit 

const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log('Form submit invoked');

    const title = document.getElementById('title').value;

    const details = document.getElementById('details').value;

    const yarn = document.getElementById('yarn').value;


    const userProject = {
        title: title,
        details: details,
        yarn: yarn
    };

    postProject(userProject)
}


projectForm.addEventListener('submit', handleFormSubmit)

