import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';

import styles from '@/components/layouts/footer/Footer.module.css';
import facebookSvgUrl from '@/public/images/akar-icons_facebook-fill.svg';
import twitterSvgUrl from '@/public/images/akar-icons_twitter-fill.svg';
import youtubeSvgUrl from '@/public/images/akar-icons_youtube-fill.svg';
import instagramSvgUrl from '@/public/images/ant-design_instagram-filled.svg';

const footerClasses = classNames(
  styles.footer,
  'flex-row',
  'justify-space-between',
  'position-relative',
  'background-black',
  'width-full'
);
const copyrightClasses = classNames(styles.copyright);
const officialLinkClasses = classNames(styles['official-link'], 'flex-row');
const socialLinkClasses = classNames(styles['social-link'], 'flex-row');
const socialLinkImgClasses = classNames(styles['social-link-icon'], 'position-relative');

function Footer() {
  const socialLinks = [
    { id: 1, src: facebookSvgUrl, alt: 'facebook', href: 'https://www.facebook.com/' },
    { id: 2, src: twitterSvgUrl, alt: 'twitter', href: 'https://twitter.com/' },
    { id: 3, src: youtubeSvgUrl, alt: 'youtube', href: 'https://www.youtube.com/' },
    { id: 4, src: instagramSvgUrl, alt: 'instagram', href: 'https://www.instagram.com/' },
  ];

  return (
    <footer className={footerClasses}>
      <div className={copyrightClasses}>©codeit - 2023</div>
      <div className={officialLinkClasses}>
        <p>Privacy Policy</p>
        <p>FAQ</p>
      </div>
      <div className={socialLinkClasses}>
        {socialLinks.map((link) => (
          <Link href={link.href} key={link.id} target="_blank">
            <div className={socialLinkImgClasses}>
              <Image src={link.src} alt={link.alt} fill />
            </div>
          </Link>
        ))}
      </div>
    </footer>
  );
}

export default Footer;
