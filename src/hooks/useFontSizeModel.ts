import { Itag } from "../components/Tags"

export const useFontSizeModel = (tag:Itag) => {
    let len = tag.property?.model?.length

    if (len && len >= 16 && len < 20) {
        return '18pt'
    }
    else if (len && len >= 20 && len < 40) {    
        return '10pt'
    }else if (len && len>=40) 
    {
        return '6pt'
    }
    else {  return '22pt' }
}