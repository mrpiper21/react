import dayjs from "dayjs"

export const generatedate = (month=dayjs().month(), year=dayjs().year()) => {
    const firstDateOfMonth = dayjs().year(year).month(month).startOf('month')
    const lastDateOfMonth = dayjs().year(year).month(month).endOf('month')
    const arr = []
    arr[0]=firstDateOfMonth
    arr[1]=lastDateOfMonth
    console.log(arr)

    // return [firstDateOfMonth, lastDateOfMonth]
}