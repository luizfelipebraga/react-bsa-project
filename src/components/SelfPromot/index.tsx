import { Content, Logo } from "./styles";
import LogoImg from '../../assets/images/logo2.png';
import { JoinButton } from "../Button";

export function SelfPromotedComponent() {
  return (
    <Content>
      <div>
        <span>Já somos mais de 7 mil membros!</span>
        <span>Venha fazer parte da maior Guilda do Star Atlas</span>
      </div>

      <Logo src={LogoImg} alt="logo" />

      <JoinButton>Aliste-se</JoinButton>
    </Content>
  )
}
