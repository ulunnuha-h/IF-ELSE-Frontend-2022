export const toLocalDate = (data) => {
    const date = new Date(data).toDateString().split(" ");    
    const time = new Date(data).toLocaleTimeString().split(" ");  
    time[0] = time[0].substring(0,time[0].length - 3);
    return (date[2] + " " +date[1] + " 2022, " + time[0] + " " + time[1]);
}