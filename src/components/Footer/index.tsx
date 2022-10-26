import React from 'react';
import Link from 'next/link'
import { Col, Divider, Row, Layout, Space, Typography, Input, Button } from 'antd';
import { footerMenu } from './data';
import { FacebookIcon, TwitterIcon, GoogleplusIcon, LinkedInIcon, SecuredIcon } from './icons';
import styles from './styles.module.scss';

const AntdFooter = Layout.Footer;
const { Text } = Typography;

export const Footer: React.FC = () => {
  return (
    <AntdFooter className="w-full bg-secondary"
    >
      <Row justify='space-between' align="middle">
        <Col>
          <Text className="block text-sm leading-[1.375rem] text-secondary-2 uppercase">
            Join the community
          </Text>
          <Space size={19}>
            <Input.Group compact>
              <Input
                style={{ width: '149px' }}
                defaultValue=""
              />
              <Button className="bg-secondary-2 border-none text-center text-bg-primary text-2xs leading-[1.375rem]">Send</Button>
            </Input.Group>
            <Text className="text-secondary-2 text-xs leading-[22px]">5764 professionals and partners</Text>
          </Space>
        </Col>
        <Col>
          <div className={styles.iconContainer}>
            {
              [<FacebookIcon />, <TwitterIcon />, <GoogleplusIcon />, <LinkedInIcon />].map(icon =>
                <div className={styles.iconWrapper}>{icon}</div>
              )
            }
          </div>
        </Col>
      </Row>
      <Divider className="bg-fg-secondary-2" />
      <Row justify="space-between" align="top">
        {
          footerMenu.map(menu =>
            <Col key={menu.category}>
              <Text className="text-sm leading-[22px] text-secondary-2 uppercase">{menu.category}</Text>
              {
                menu.items.map(item =>
                  <div className="text-bg-primary text-xs leading-[22px]">
                    <Link
                      href={item.link}
                    >
                      {item.title}
                    </Link>
                  </div>
                )
              }
            </Col>)
        }
      </Row>
      <Row justify="space-between" align="bottom">
        <Col>
          <div
            className="flex items-center gap-[4px] text-secondary-2"
          >
            <span className={styles.bottomText}><Link href="#">Terms of Service</Link></span>|
            <span className={styles.bottomText}><Link href="#">Privacy & Cookies policy</Link></span>|
            <span className={styles.bottomText}><Link href="#">Sitemap</Link></span>|
            <span className={styles.bottomText}>Cozzinest LTD @copyright 2022</span>|
            <span className={styles.bottomText}>16 rue de la gare Glacis, L-1640 Luxembourg</span>
          </div>
        </Col>
        <Col>
          <div className="flex flex-col gap-[5px]">
            <Space size={7} align="start">
              <SecuredIcon className="fill-bg-primary" />
              <span className="text-bg-primary text-sm leading-[22px] font-bold">Secured Payment</span>
            </Space>
            <Space className="">
              <img src="/images/Visa.png" alt="Visa" />
              <img src="/images/Mastercard.png" alt="Mastercard" />
              <img src="/images/Amex.png" alt="Amex" />
              <img src="/images/Stripe.png" alt="Stripe" />
            </Space>
          </div>
        </Col>
      </Row>
    </AntdFooter>
  )
}