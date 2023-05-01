import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

import { api } from "~/utils/api";

import "~/styles/globals.css";
import { useState } from "react";
import Image from "next/image";
import doc_image from "./Images/icon-document.svg";
import dark from "./Images/icon-dark-mode.svg";
import light from "./Images/icon-light-mode.svg";
import { ToastContainer } from "react-toastify";
import { Switch } from "@mui/material";
import styled from "@emotion/styled";

const CustomToggle = styled(Switch)({
  padding: ".1px",
  borderRadius: "500px",
  '& .Mui-checked + .MuiSwitch-track': {
    backgroundColor: "#E46643 !important",
  },
  '& .MuiSwitch-thumb': {
    backgroundColor: "white",
    width: 20,
    height: 20
  },
  '& .MuiSwitch-track': {
    backgroundColor: "white"
  },
  
}) as typeof Switch;

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {

  const [leftNav, setLeftNav] = useState<boolean>(false);

  const { data: viewDocs, refetch: fetchDocs } = api.document.viewDocs.useQuery();
  const [loaded, setLoaded] = useState<boolean>(false);
  const [newFile, setNewFile] = useState<boolean>(false);
  const [lightMode, setLightMode] = useState<boolean>(false);

  const [docId, setDocId] = useState<number>(0);
  const [doc_name, setDoc_name] = useState<string>("welcome.md");


  
  return (
    <SessionProvider session={session}>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme={lightMode ? "light" : "dark"}
      />
      <div className={`App ${lightMode ? "light" : "dark"}`}>
        <nav className={leftNav ? `left-nav` : `left-nav-disabled`}>
          <div className="inner-nav">
            <div className="top">
              <div className="title">MY DOCUMENTS</div>
              <button onClick={() => {setDoc_name("NewDocument.md"); setNewFile(true)}}>+ New Document</button>
              <div className="recentDocs">
                
                {viewDocs?.map(doc => <div key={doc.id} className={`innerDocs ${doc_name === doc.document_name && "selected"}`} onClick={e => {setDocId(doc.id); setLoaded(false); setDoc_name(doc.document_name)}}>
                  <Image src={doc_image} width={13} height={16} alt="doc" />
                  <div>
                  <div className="header">{(doc.created_At).toDateString()}</div>
                  <div className="text">{doc.document_name}</div>
                </div>
                </div>)}
            </div>
          </div>
          <div className="bottom">
            <Image src={dark} height={18} width={18} alt="dark" />
            <CustomToggle checked={lightMode} onChange={e => setLightMode(e.target.checked)} />
            <Image src={light} height={18} width={18} alt="light" />
          </div>
          </div>
        </nav>
        <Component {...pageProps} doc_content="" setDoc_name={setDoc_name} newFile={newFile} setNewFile={setNewFile} leftNav={leftNav} doc_name={doc_name} setLeftNav={setLeftNav} fetchDocs={fetchDocs} setDocId={setDocId} docId={docId} loaded={loaded} setLoaded={setLoaded} />
      </div>
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
