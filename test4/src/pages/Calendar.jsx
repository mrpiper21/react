import dayjs from "dayjs"

export const generatedate = (month=dayjs().month(), year=dayjs().year()) => {
    const firstDateOfMonth = dayjs().year(year).month(month).startOf('month')
    const lastDateOfMonth = dayjs().year(year).month(month).endOf('month')
    
    const arrayOfDate = []
    // generate current date
    for (let i = firstDateOfMonth.date(); i <= lastDateOfMonth.date(); i++){
        arrayOfDate.push({
            currentMonth: false,
            date: firstDateOfMonth.date(i),
            today: firstDateOfMonth.date(i).toString() ===
            dayjs().toDate().toString()
        });
    }

    // create prefix date: 
    for (let i = 0; i < firstDateOfMonth.day(); i++){
        arrayOfDate.push({
            date: firstDateOfMonth.day(i),
            currentMonth: true,
        })
    }

    // for (let i = firstDateOfMonth.date(); i <= lastDateOfMonth.date(); i++){
    //     arrayOfDate.push(firstDateOfMonth.date(i))
    // }

    const remaining = 42 - arrayOfDate.length

    for(let i = lastDateOfMonth.date() + 1; i < lastDateOfMonth.date() + remaining; i++){
        arrayOfDate.push({
            currentMonth: false,
            date: lastDateOfMonth.date(i)
        });
    }

    return arrayOfDate;


    // return [firstDateOfMonth, lastDateOfMonth]
}