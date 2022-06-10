

import React from 'react'
import {Outlet} from "react-router-dom"

type Props = {}

const SharedPage = (props: Props) => {
  return (
    <main>


        this is the dashboard
      <div>


        <Outlet/>
      </div>
    </main>
  );
}

export default SharedPage