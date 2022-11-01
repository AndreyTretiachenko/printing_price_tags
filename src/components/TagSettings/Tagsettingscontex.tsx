import React from 'react'
import { createContext } from 'react'

export type TagSettingContexProps = {
    children: React.ReactNode
}

const TagSettingsContex = createContext<TagSettingContexProps | null >(null)

const TagProvider = ({children}:TagSettingContexProps)=> {
    return (
        <TagSettingsContex.Provider value={null}>
            {children}
        </TagSettingsContex.Provider>
  )
}
