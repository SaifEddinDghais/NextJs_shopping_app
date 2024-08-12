import React from "react";

const Navbar = () => {
  return (
    <div className="hidden lg:block">
      <div className="container">
        <div className="flex w-fit gap-10 mx-auto font-medium py-4 text-blackish">
          <div className="navbar_links">HOME</div>
          <div className="navbar_links">CATEGORIES</div>
          <div className="navbar_links">{`MEN'S`}</div>
          <div className="navbar_links">{`WOMEN'S`}</div>
          <div className="navbar_links">JEWELRY</div>
          <div className="navbar_links">PERFUME</div>
          <div className="navbar_links">BLOG</div>
          <div className="navbar_links">HOT OFFERS</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
