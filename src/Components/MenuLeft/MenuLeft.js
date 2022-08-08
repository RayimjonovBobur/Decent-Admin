import React from "react";
import { useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { AllPages } from "../grouping/grouping";
import IconType from "../IconType/IconType";
import { setCurrenPage } from "../Redux/stored_reducer";

const MenuLeft = () => {
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  return (
    <div className="row-span-3">
      <div className="navbar_left ">
        {AllPages?.map((page, i) => {
          page?.path === pathname && dispatch(setCurrenPage(page));
          return (
            <div className="admin-link pl-3 pt-1">
              <Link
                to={page.path}
                className={`nav-link flex ${
                  pathname === page.path ? "active" : ""
                }`}
              >
                <span className="seact_icon mr-4">
                  <IconType icon={page?.icon} />
                </span>
                <span className="tracking-wide link-text">{page.text}</span>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MenuLeft;
