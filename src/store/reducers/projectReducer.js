
const initState = {
    authError: null,
    projects: [
        {
            id: "1",
            title: "Project title A",
            summary: "Project summary A",
            content: "Project content A",
            technologyUsed: "Java, SQL",
            git: "www.github.com"
        },
        {
            id:"2",
            title: "Project title B",
            summary: "Project summary B",
            content: "Project content B",
            technologyUsed: "JavaScript, NOSQL, Firebase",
            git: "www.github.com"
        }
    ]
}

const projectReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_PROJECT':
            return {
                ...state,
                authError: null
            }
        
        case 'CREATE_PROJECT_ERROR':
            return {
                ...state,
                authError: action.err.message
            };
        case 'UPDATE_PROJECT':
            return {
                ...state,
                authError: null
            };
        case 'UPDATE_PROJECT_ERROR':
            return {
                ...state,
                authError: action.err.message
            };
        case 'DELETE_PROJECT':
            return {
                ...state,
                authError: null
            }
        case 'DELETE_PROJECT_ERROR':
            return {
                ...state,
                authError: action.err.message
            };
        default:
            return state;
    }
}

export default projectReducer