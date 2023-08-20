import Logo from "./Parts/Logo";
import Navigation from "./Parts/Navigation";
import ProfilePicture from "./Parts/ProfilePicture";
function Header() {
  return (
    <div className="header">
      <div className="container header__container ">
        <Logo />
        <Navigation />
        <ProfilePicture />
      </div>
    </div>
  );
}

export default Header;
