import React from 'react'
import { createContext } from 'react'
import { TagSettings } from './Tagsettings'

export type TagSettingContexProps = {
    children: React.ReactNode
}

const TagSettingsContex = createContext(TagSettings)

const TagProvider = ({children}:TagSettingContexProps)=> {
    return (
        <TagSettingsContex.Provider value={}>
            {children}
        </TagSettingsContex.Provider>
  )
}
