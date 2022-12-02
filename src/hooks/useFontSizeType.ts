import { Itag } from "../components/Tags"

export const useFontSizeType = (tag:Itag) => {
    let len = tag.property?.type?.length

    if (len && len >= 25 && len < 40) {
        return '10pt'
    }
    else if (len && len >= 40 && len < 60) {    
        return '8pt'
    }
    else if (len && len >= 60) {
        return '6pt'
    } 
    else {  return '16pt' }
}