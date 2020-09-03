
const initState = {
    projects: [
        {
            id: "1",
            title: "Project title A",
            summary: "Project summary A",
            content: "Project content A",
            technology: "Java, SQL"
        },
        {
            id:"2",
            title: "Project title B",
            summary: "Project summary B",
            content: "Project content B",
            technology: "JavaScript, NOSQL, Firebase"
        }
    ]
}

const projectReducer = (state = initState, action) => {
    return state;
}

export default projectReducer