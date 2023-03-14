import { CATEGORIES, MENU, OURCOMPANY } from '../../constants/common'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import TwitterIcon from '@mui/icons-material/Twitter'
import PinterestIcon from '@mui/icons-material/Pinterest'

// Components
import Button from '../Button'
import Input from '../Input'

// Styles
import styles from './Footer.module.css'

const Footer = () => {
  const {
    footer,
    content,
    footer_content,
    description,
    title,
    title_item,
    mail_content,
    title_main,
    bottom,
    copyright,
    list_item,
    sponsor,
  } = styles
  return (
    <div className={footer}>
      <div className={content}>
        <div className={footer_content}>
          <div className={description}>
            <div className={list_item}>
              <h3 className={title}>Menu</h3>
              {MENU.map((i) => (
                <p className={title_item} key={i}>
                  {i}
                </p>
              ))}
            </div>
            <div className={list_item}>
              <h3 className={title}>Categories</h3>
              {CATEGORIES.map((i) => (
                <p className={title_item} key={i}>
                  {i}
                </p>
              ))}
            </div>
            <div className={list_item}>
              <h3 className={title}>Our company</h3>
              {OURCOMPANY.map((i) => (
                <p className={title_item} key={i}>
                  {i}
                </p>
              ))}
            </div>
          </div>
          <div className={mail_content}>
            <h2 className={title_main}>Join our mailing list</h2>
            <Input placeholder="your@email.com" />
            <Button background="light" text="Sign Up" />
          </div>
        </div>
        <div className={bottom}>
          <p className={copyright}>Copyright 2022 Avion LTD</p>
          <div className={sponsor}>
            <LinkedInIcon style={{ color: 'white' }} />
            <FacebookIcon style={{ color: 'white' }} />
            <InstagramIcon style={{ color: 'white' }} />
            <TwitterIcon style={{ color: 'white' }} />
            <PinterestIcon style={{ color: 'white' }} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
