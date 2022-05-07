import React, { FC, ReactNode } from "react";
import { Navigation } from "./Navigation";
import { SideMenu } from "./SideMenu";

interface Props {
  children: ReactNode;
}

export const Layout: FC<Props> = ({ children }) => {
  return (
    <>
      <Navigation />

      <div className="container-fluid">
        <div className="row">
          <SideMenu />

          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            {children}
          </main>
        </div>
      </div>
    </>
  );
};
