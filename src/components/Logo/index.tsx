import React from 'react'
import { LogoProps } from 'types/api'
import { getIMageUrl } from 'utils/getImageUrl'
import * as S from './styles'

const Logo = ({ alternativeText, url }: LogoProps) => (
  <S.LogoWrapper src={getIMageUrl(url)} alt={alternativeText} />
)

export default Logo
