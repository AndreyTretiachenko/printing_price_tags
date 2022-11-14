import { Itag } from "../components/Tags"

export const useFontSize = (tag:Itag) => {
    let len = tag.property?.model?.length

    if (len && len >= 16 && len < 20) {
        return '18pt'
    }
    else if (len && len >= 20) {    
        return '10pt'
    } 
    else {  return '22pt' }
}