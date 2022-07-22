const projectForm = document.getElementById('project-form')
const projectContainer = document.getElementById('project-container')


// handle pulling existing projects & displaying




// handle posting a new project 





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

// handle form submit 
