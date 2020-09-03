
const initState = {
    authError: null,
    projects: [
        {
            id: "1",
            title: "Project title A",
            summary: "Project summary A",
            content: "Project content A",
            technologyUsed: "Java, SQL"
        },
        {
            id:"2",
            title: "Project title B",
            summary: "Project summary B",
            content: "Project content B",
            technologyUsed: "JavaScript, NOSQL, Firebase"
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
            
        default:
            return state;
    }
}

export default projectReducer