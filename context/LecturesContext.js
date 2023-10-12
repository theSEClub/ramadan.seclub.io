const { createContext, useReducer, useContext } = require("react");


const LecturesContext = createContext();

const LecturesDispatchContext = createContext();

export function LecturesProvider({ children }) {

    const [lectures, dispatch] = useReducer(lecturesReducer, []);

    return(
        <LecturesContext.Provider value={lectures}>
            <LecturesDispatchContext.Provider value={dispatch}>
                {children}
            </LecturesDispatchContext.Provider>
        </LecturesContext.Provider>
    )
}

export function useLectures() {
    return useContext(LecturesContext);
}

export function useLecturesDispatch() {
    return useContext(LecturesDispatchContext);
}

export const ACTIONS = {
    ADD_LECTURE: 'add-lecture',
    DELETE_LECTURE: 'delete-lecture',
    UPDATE_LECTURE: 'update-lecture',
    SET_LECTURES: 'set-lectures',
    RESET_LECTURES: 'reset-lectures'
}

function lecturesReducer(lectures, action) {
    switch (action.type) {

        case ACTIONS.ADD_LECTURE:
            localStorage.setItem('lectures', JSON.stringify([...lectures, action.payload]));
            return [...lectures, action.payload];

        case ACTIONS.DELETE_LECTURE:
            localStorage.setItem('lectures', JSON.stringify(lectures.filter((lecture) => lecture !== action.payload)));
            return lectures.filter((lecture) => lecture !== action.payload);

        case ACTIONS.UPDATE_LECTURE:
            localStorage.setItem('lectures', JSON.stringify(lectures.map((lecture) => {
                if (lecture.id === action.payload.id) {
                    return action.payload;
                }
                return lecture;
            })));
            return lectures.map((lecture) => {
                if (lecture.id === action.payload.id) {
                    return action.payload;
                }
                return lecture;
            });

        case ACTIONS.SET_LECTURES:
            localStorage.setItem('lectures', JSON.stringify(action.payload));
            return action.payload;

        case ACTIONS.RESET_LECTURES:
            localStorage.setItem('lectures', JSON.stringify([]));
            return [];

        default:
            return lectures;
    }
}