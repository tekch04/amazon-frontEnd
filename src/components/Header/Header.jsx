
import React, { useContext } from "react";
import { SlLocationPin } from "react-icons/sl";
import { BsSearch } from "react-icons/bs";
import { BiCart } from "react-icons/bi";
import HeaderCSS from "./Header.module.css";
import LowerHeader from "./LowerHeader";
import { Link } from "react-router-dom";
import { DataContext } from "../DataProvider/DataProvider";
import { auth } from "../../Utility/firebase";

function Header() {
  const [{ user, basket }, dispatch] = useContext(DataContext);
  const totalItem = basket?.reduce((amount, item) => {
    return item.amount + amount;
  }, 0);
  return (
    <>
      <section className={HeaderCSS.fixed}>
        <section>
          <div className={HeaderCSS.header__container}>
            {/* logo */}
            <div className={HeaderCSS.logo__container}>
              <Link to="/">
              <img
                src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                alt="Amazon logo"
              />
              </Link>
              {/* delivery */}
              <div className={HeaderCSS.delivery}>
                <span>
                  <SlLocationPin />
                </span>
                <div>
                  <p>Delivered To</p>
                  <span>Ethiopia</span>
                </div>
              </div>
            </div>
            {/* search  */}
            <div className={HeaderCSS.search}>
              <select name="" id="">
                <option value="">All</option>
              </select>
              <input type="text" placeholder="Search Amazon" />
              <BsSearch size={38} />
            </div>
            <div className={HeaderCSS.order__container}>
              <Link to="" className={HeaderCSS.language}>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Flag_of_the_United_States_%28Pantone%29.svg/383px-Flag_of_the_United_States_%28Pantone%29.svg.png"
                alt=""
              />
                <section>
                  <option value="">EN</option>
                </section>
              </Link>
              {/* three component  */}
              <Link to={!user && "/auth"}>
                <div>
                  {user ? (
                    <>
                      <p>Hello {user?.email?.split("@")[0]}</p>
                      <span onClick={() => auth.signOut()}>Sign Out</span>
                    </>
                  ) : (
                    <>
                      <p>Hello Sign In</p>
                      <span>Account & Lists</span>
                    </>
                  )}
                </div>
              </Link>
              {/* orders */}
              <Link to="/orders">
                <p>returns</p>
                <span>& Orders</span>
              </Link>
              {/* cart  */}
              <Link to="/cart" className={HeaderCSS.cart}>
                <BiCart size={35} />
                <span>{totalItem}</span>
              </Link>
            </div>
          </div>
        </section>
        <LowerHeader />
      </section>
    </>
  );
}

export default Header;
