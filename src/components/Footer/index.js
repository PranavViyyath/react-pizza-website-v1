import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
import {FooterContainer,FooterWrap,SocialMedia,SocialMediaWrap,SocialLogo,SocialIcons,SocialLink} from './FooterElements'


const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/'>Pizza</SocialLogo>
                        <SocialIcons>
                            <SocialLink href='/' target='_blank'
                            aria-label='Facebook'>
                            <FaFacebook/>
                            </SocialLink>
                            <SocialLink href='/' target='_blank'
                                aria-label='Instagram'>
                                <FaInstagram />
                            </SocialLink>
                            <SocialLink href='/' target='_blank'
                                aria-label='Youtube'>
                                <FaYoutube />
                            </SocialLink>
                            <SocialLink href='/' target='_blank'
                                aria-label='Twitter'>
                                <FaTwitter/>
                            </SocialLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
            
        
    )
}

export default Footer
