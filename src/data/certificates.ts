import { Certificate } from '../types/certificate';
import certificateImages from '../components/certificateImages/GuviCertification.png';

export const certificates: Certificate[] = [
  {
    id: 'Guvi',
    title: 'Python',
    issuer: 'Guvi',
    date: '2023',
    image: certificateImages, 
    category: 'Programming',
    description: 'The certificate attests to your proficiency in Python programming, providing tangible evidence of your skills in this versatile language',
    credentialUrl: 'https://www.guvi.in/share-certificate/576471M1p1Sd966140'
  },
  {
    id: 'google-skillshop',
    title: 'AI-Powered Shopping ads Certification',
    issuer: 'Google Skillshop',
    date: '2022',
    image: 'https://api.accredible.com/v1/frontend/credential_website_embed_image/certificate/124117106',
    category: 'Ads',
    description: 'Validate your proficiency with using and optimizing AI-Powered Shopping ads',
    credentialUrl: 'https://skillshop.credential.net/d08d557c-44c3-4cd5-a18a-f6eddcdf17a2'
  },
  {
    id: 'google-skillshop1',
    title: 'Google Ads - Measurement Certification',
    issuer: 'Google Skillshop',
    date: '2024',
    image: 'https://api.accredible.com/v1/frontend/credential_website_embed_image/certificate/124149660',
    category: 'Ads',
    description: 'Demonstrate your ability to measure and optimize digital ad performance using Google’s measurement solutions',
    credentialUrl: 'https://skillshop.credential.net/99aca121-2aad-435d-9915-cf9b92dbc1df'
  },
  {
    id: 'google-skillshop2',
    title: 'Google Ads Search Certification',
    issuer: 'Google Skillshop',
    date: '2024',
    image: 'https://api.accredible.com/v1/frontend/credential_website_embed_image/certificate/124173985',
    category: 'Ads',
    description: 'Demonstrate your mastery of building and optimizing Google Search campaigns.',
    credentialUrl: 'https://skillshop.credential.net/d8ed0101-956b-4fb9-9e46-bdd2d2a9e4f5'
  },
  {
    id: 'google-skillshop2',
    title: 'Google Ads Display Certification',
    issuer: 'Google Skillshop',
    date: '2024',
    image: 'https://api.accredible.com/v1/frontend/credential_website_embed_image/certificate/124170755',
    category: 'Ads',
    description: 'Validate your expertise using Google Display to deliver results that get the most from your display advertising investment',
    credentialUrl: 'https://skillshop.credential.net/d8ed0101-956b-4fb9-9e46-bdd2d2a9e4f5'
  }
];