const Agenda = [{
    id : 1,
    title : "Rangkaian 1",
    content : "Ini adalah rangkaian ke satu",
    image : 'https://placekitten.com/200/200',
    start_at : '12 september 2014',
    end_at : '16 september 2015',    
    perizinan_start_at : '13 september 2014',
    perizinan_end_at : '13 september 2014',
    is_published : true,
    created_at : '12 September 2012',
    updated_at : '12 September 2012',
},{
    id : 2,
    title : "Rangkaian 2 ni boss",
    content : "biasalah rangkaian dua masa gatau",
    image : 'https://placekitten.com/200/300',
    start_at : '12 september 2014',
    end_at : '16 oktober 2016',
    perizinan_start_at : '13 september 2014',
    perizinan_end_at : '13 september 2014',
    is_published : false,
    created_at : '12 September 2012',
    updated_at : '12 September 2012',
},{
    id : 3,
    title : "Rangkaian 3 gitu loh",
    content : "ini namanya rangkaian tiga",
    image : 'https://placekitten.com/200/500',
    start_at : '15 agustus 2001',
    end_at : '31 juli 2022',
    perizinan_start_at : '13 september 2014',
    perizinan_end_at : '13 september 2014',
    is_published : false,
    created_at : '12 September 2012',
    updated_at : '12 September 2012',
},{
    id : 4,
    title : "Rangkaian 4 coyyy",
    content : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni est ipsa ab ratione iste a quis cupiditate laboriosam cumque? Porro?",
    image : 'https://placekitten.com/200/400',
    start_at : '12 september 2011',
    end_at : '16 september 2017',
    perizinan_start_at : '13 september 2014',
    perizinan_end_at : '13 september 2014',
    is_published : false,
    created_at : '12 September 2012',
    updated_at : '12 September 2012',
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