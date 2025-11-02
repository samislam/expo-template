import React, { ComponentProps } from 'react'
import { AntDesign, Entypo, EvilIcons, Feather } from '@expo/vector-icons'
import { FontAwesome, FontAwesome5, FontAwesome6 } from '@expo/vector-icons'
import { Octicons, SimpleLineIcons, Zocial, MaterialIcons } from '@expo/vector-icons'
import { MaterialCommunityIcons, Fontisto, Foundation, Ionicons } from '@expo/vector-icons'

export interface LibIconProps {
  icon: LibraryIcon
  className?: string
}

export const LibIcon = (props: LibIconProps) => {
  const { icon, className } = props
  const [library, iconName] = icon.split(':') as [IconLibrary, string]

  switch (library) {
    case 'ant':
      return <AntDesign name={iconName as AntDesignIconName} className={className} />
    case 'ent':
      return <Entypo name={iconName as EntypoIconName} className={className} />
    case 'ev':
      return <EvilIcons name={iconName as EvilIconsIconName} className={className} />
    case 'fe':
      return <Feather name={iconName as FeatherIconName} className={className} />
    case 'fa':
      return <FontAwesome name={iconName as FontAwesomeIconName} className={className} />
    case 'fa5':
      return <FontAwesome5 name={iconName as FontAwesome5IconName} className={className} />
    case 'fa6':
      return <FontAwesome6 name={iconName as FontAwesome6IconName} className={className} />
    case 'fi':
      return <Fontisto name={iconName as FontistoIconName} className={className} />
    case 'fo':
      return <Foundation name={iconName as FoundationIconName} className={className} />
    case 'ion':
      return <Ionicons name={iconName as IoniconsIconName} className={className} />
    case 'mat':
      return <MaterialIcons name={iconName as MaterialIconsIconName} className={className} />
    case 'mdi':
      return (
        <MaterialCommunityIcons
          name={iconName as MaterialCommunityIconName}
          className={className}
        />
      )
    case 'oct':
      return <Octicons name={iconName as OcticonsIconName} className={className} />
    case 'sim':
      return <SimpleLineIcons name={iconName as SimpleLineIconName} className={className} />
    case 'zin':
      return <Zocial name={iconName as ZocialIconName} className={className} />
  }
}

/* ---------------------------------- Types --------------------------------- */

export type EntypoIconName = ComponentProps<typeof Entypo>['name']
export type ZocialIconName = ComponentProps<typeof Zocial>['name']
export type FeatherIconName = ComponentProps<typeof Feather>['name']
export type FontistoIconName = ComponentProps<typeof Fontisto>['name']
export type IoniconsIconName = ComponentProps<typeof Ionicons>['name']
export type OcticonsIconName = ComponentProps<typeof Octicons>['name']
export type AntDesignIconName = ComponentProps<typeof AntDesign>['name']
export type EvilIconsIconName = ComponentProps<typeof EvilIcons>['name']
export type FoundationIconName = ComponentProps<typeof Foundation>['name']
export type FontAwesomeIconName = ComponentProps<typeof FontAwesome>['name']
export type FontAwesome5IconName = ComponentProps<typeof FontAwesome5>['name']
export type FontAwesome6IconName = ComponentProps<typeof FontAwesome6>['name']
export type SimpleLineIconName = ComponentProps<typeof SimpleLineIcons>['name']
export type MaterialIconsIconName = ComponentProps<typeof MaterialIcons>['name']
export type MaterialCommunityIconName = ComponentProps<typeof MaterialCommunityIcons>['name']

export type IconLibrary =
  | 'ant'
  | 'ent'
  | 'ev'
  | 'fe'
  | 'fa'
  | 'fa5'
  | 'fa6'
  | 'fi'
  | 'fo'
  | 'ion'
  | 'mat'
  | 'mdi'
  | 'oct'
  | 'sim'
  | 'zin'

export type LibraryIcon =
  | `ant:${AntDesignIconName}`
  | `ent:${EntypoIconName}`
  | `ev:${EvilIconsIconName}`
  | `fe:${FeatherIconName}`
  | `fa:${FontAwesomeIconName}`
  | `fa5:${FontAwesome5IconName}`
  | `fa6:${FontAwesome6IconName}`
  | `fi:${FontistoIconName}`
  | `fo:${FoundationIconName}`
  | `ion:${IoniconsIconName}`
  | `mat:${MaterialIconsIconName}`
  | `mdi:${MaterialCommunityIconName}`
  | `oct:${OcticonsIconName}`
  | `sim:${SimpleLineIconName}`
  | `zin:${ZocialIconName}`
