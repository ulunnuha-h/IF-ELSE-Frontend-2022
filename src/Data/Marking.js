const Marking = [
    {
        id : 1,
        user_id : 1,
        data : [
            {
                agenda_id : 1,
                mark : null
            },
            {
                agenda_id : 2,
                mark : null
            },
            {
                agenda_id : 3,
                mark : null
            },
            {
                agenda_id : 4,
                mark : null
            }
        ]
    },{
        id : 2,
        user_id : 2,
        data : [
            {
                agenda_id : 1,
                mark : null
            },
            {
                agenda_id : 2,
                mark : null
            },
            {
                agenda_id : 3,
                mark : null
            },
            {
                agenda_id : 4,
                mark : null
            }
        ]
    },{
        id : 3,
        user_id : 3,
        data : [
            {
                agenda_id : 1,
                mark : null
            },
            {
                agenda_id : 2,
                mark : null
            },
            {
                agenda_id : 3,
                mark : null
            },
            {
                agenda_id : 4,
                mark : null
            }
        ]
    },{
        id : 4,
        user_id : 4,
        data : [
            {
                agenda_id : 1,
                mark : null
            },
            {
                agenda_id : 2,
                mark : null
            },
            {
                agenda_id : 3,
                mark : null
            },
            {
                agenda_id : 4,
                mark : null
            }
        ]
    },{
        id : 5,
        user_id : 5,
        data : [
            {
                agenda_id : 1,
                mark : null
            },
            {
                agenda_id : 2,
                mark : null
            },
            {
                agenda_id : 3,
                mark : null
            },
            {
                agenda_id : 4,
                mark : null
            }
        ]
    },{
        id : 6,
        user_id : 6,
        data : [
            {
                agenda_id : 1,
                mark : null
            },
            {
                agenda_id : 2,
                mark : null
            },
            {
                agenda_id : 3,
                mark : null
            },
            {
                agenda_id : 4,
                mark : null
            }
        ]
    },{
        id : 7,
        user_id : 7,
        data : [
            {
                agenda_id : 1,
                mark : null
            },
            {
                agenda_id : 2,
                mark : null
            },
            {
                agenda_id : 3,
                mark : null
            },
            {
                agenda_id : 4,
                mark : null
            }
        ]
    }
]

const getStudenMarkById = (user_id) => {
    const data = Marking.find(dat => dat.user_id === user_id);
    return data;
}

const updateStudentMark = (agenda_id,user_id,mark) => {
    const idx1 = Marking.findIndex(dat => dat.user_id === user_id);
    const idx2 = Marking[idx1].data.findIndex(dat => dat.agenda_id === agenda_id);
    Marking[idx1].data[idx2].mark = mark;
}

export {getStudenMarkById,updateStudentMark};