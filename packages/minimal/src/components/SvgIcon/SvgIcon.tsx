import React, { FC } from 'react'
import { $Icon } from './styles'
import { SvgIconProps as Props  } from './types'
import account from 'assets/icons/account.svg'
import add from 'assets/icons/add.svg'
import close from 'assets/icons/close.svg'
import edit from 'assets/icons/edit.svg'
import menuLeft from 'assets/icons/menu-left.svg'
import menuRight from 'assets/icons/menu-right.svg'
import menuUp from 'assets/icons/menu-up.svg'
import menuDown from 'assets/icons/menu-down.svg'
import menuVertical from 'assets/icons/menu-vertical.svg'
import closeCircle from 'assets/icons/close-circle.svg'
import overview from 'assets/icons/overview.svg'
import power from 'assets/icons/power.svg'
import theme from 'assets/icons/theme.svg'
import email from 'assets/icons/email.svg'
import globe from 'assets/icons/globe.svg'
import accounts from 'assets/icons/accounts.svg'
import deleteIcon from 'assets/icons/delete.svg'
import copy from 'assets/icons/copy.svg'
import send from 'assets/icons/send.svg'
import alertCircle from 'assets/icons/alert-circle.svg'

const icons: {[key: string]: string } = {
  account,
  accounts,
  add,
  close,
  overview,
  power,
  theme,
  edit,
  globe,
  email,
  copy,
  send,
  delete: deleteIcon,
  'menu-left': menuLeft,
  'menu-right': menuRight,
  'menu-up': menuUp,
  'menu-down': menuDown,
  'menu-vertical': menuVertical,
  'close-circle': closeCircle,
  'alert-circle': alertCircle,
}

export const SvgIcon: FC<Props> = ({name = 'account', size = 24, color, ...rest }) => {
  // const [icon, setIcon] = useState('')
  // //TODO: fix dynamic import
  // useEffect(() => {
  //   const loadIcon = async () => {
  //     try {
  //       console.log(name)
  //       const load = await import(`assets/icons/${name}.svg`)
  //       setIcon(load.default)
  //     } catch(err) {
  //       throw Error(err)
  //     }
  //   }
  //   loadIcon()
  // }, [name])

  return <$Icon icon={icons[name]} size={size} color={color} {...rest} />
}


