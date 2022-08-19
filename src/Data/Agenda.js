const Agenda = [{
    id : 1,
    title : "RANGKAIAN 1",
    content : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni est ipsa ab ratione iste a quis cupiditate laboriosam cumque? Porro?",
    image : 'https://placekitten.com/200/200',
    start_at : '12 september 2014',
    end_at : '16 september 2015',    
    is_published : true
},{
    id : 2,
    title : "RANGKAIAN 2",
    content : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni est ipsa ab ratione iste a quis cupiditate laboriosam cumque? Porro?",
    image : 'https://placekitten.com/200/300',
    start_at : '12 september 2014',
    end_at : '16 oktober 2016',
    is_published : false,
},{
    id : 3,
    title : "RANGKAIAN 3",
    content : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni est ipsa ab ratione iste a quis cupiditate laboriosam cumque? Porro?",
    image : 'https://placekitten.com/200/500',
    start_at : '15 agustus 2001',
    end_at : '31 juli 2022',
    is_published : false,
},{
    id : 4,
    title : "RANGKAIAN 4",
    content : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni est ipsa ab ratione iste a quis cupiditate laboriosam cumque? Porro?",
    image : 'https://placekitten.com/200/400',
    start_at : '12 september 2011',
    end_at : '16 september 2017',
    is_published : false,
}]

const getAllAgenda = () => Agenda;

const getAgendaStatus = (id) => {
    const data = Agenda.find(val => val.id === id);
    return data.is_published;
}

const getAgendaById = id => {
    const data = Agenda.find(agenda => agenda.id === id);
    return data;
}

const updateAgendaStatus = (id) => {
    const idx = Agenda.findIndex(val => val.id === id);
    Agenda[idx].is_published = !Agenda[idx].is_published;
    return Agenda[idx].is_published;
}

export {getAllAgenda,getAgendaStatus,updateAgendaStatus,getAgendaById};