import { Itag } from "../components/Tags"

export const useFontSizeType = (tag:Itag) => {
    let len = tag.property?.type?.length

    if (len && len >= 25 && len < 40) {
        return '12pt'
    }
    else if (len && len >= 40) {    
        return '8pt'
    } 
    else {  return '16pt' }
}