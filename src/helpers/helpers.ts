import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import 'dayjs/locale/en'

dayjs.extend(relativeTime)
dayjs.locale('en')

export const toNormalDateFull = (date: number) => dayjs(date * 1000).format('dddd, DD.MM.YY HH:mm:ss')