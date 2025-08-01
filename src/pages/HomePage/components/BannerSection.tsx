import { styled } from 'styled-system/jsx';

const IMAGE_SRC = '/moon-cheese-images/cheese-1.jpg';

function BannerSection() {
  return <styled.img src={IMAGE_SRC} alt="banner" css={{ w: 'full', h: 300, objectFit: 'cover' }} />;
}

export default BannerSection;
