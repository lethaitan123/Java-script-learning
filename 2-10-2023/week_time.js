import readline from "readline";

const temp = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

temp.question('Print day/month/year ', function (answer) {
    const parts = answer.split('/');
    
    if (parts.length === 3) { 
        const day = parseInt(parts[0]);
        const month = parseInt(parts[1]) - 1;
        const year = parseInt(parts[2]);
        
        if (isValidDate(day, month, year)) {
            const inputDateObj = new Date(year, month, day);

            const weekNumber = getWeekNumber(inputDateObj);

            const dayOfWeek = inputDateObj.toLocaleDateString('en-US', { weekday: 'long' });
            
            

            console.log(`Today is: ${dayOfWeek}`);
            console.log(`This week is: ${weekNumber}`);
        } else {
            console.log("Invalid date.");
        }
    } else {
        console.log("Invalid date format. Please use dd/mm/yyyy format.");
    }

  
    temp.close();
});

function isValidDate(day, month, year) {
    const date = new Date(year, month, day);
    console.log({date})
    return !isNaN(date.getTime()) &&
           date.getDate() === day &&
           date.getMonth() === month &&
           date.getFullYear() === year;
}
function getWeekNumber(date) {
    const startDate = new Date(date.getFullYear(), 0, 1); 
    const endDate = new Date(date.getFullYear(), date.getMonth(), date.getDate()); 
    const days = Math.floor((endDate - startDate) / (24 * 60 * 60 * 1000)); 
    const weekNumber = Math.ceil((days + 1) / 7); 
    
    return weekNumber;
}
