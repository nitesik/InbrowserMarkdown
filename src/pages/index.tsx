import styles from "./index.module.css";
import { type NextPage } from "next";
import Head from "next/head";
// import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import ReactMarkdown from 'react-markdown';
import { api } from "~/utils/api";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Icons
import hamburger from "./Images/icon-menu.svg";
import doc from "./Images/icon-document.svg";
import delete_icon from "./Images/icon-delete.svg";
import save_icon from "./Images/icon-save.svg";
import show_preview from "./Images/icon-show-preview.svg";
import React, { useEffect, useState } from "react";

const Home: NextPage = ({ setLeftNav, doc_content, leftNav, fetchDocs, docId, loaded, setLoaded, setDocId, doc_name, newFile, setNewFile, setDoc_name} : any) => {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

  const [text, setText] = useState<string>("");
  const [previewOnly, setPreviewOnly] = useState<boolean>(false);
  const [menuPopup, setMenuPopup] = useState<boolean>(false);
  
  const [docName, setDocName] = useState<string>("welcome.md");

  const { data: viewDoc } = api.document.viewSingleDoc.useQuery({docName: doc_name});


  function notify() {
    // alert("File Already Exists")
    toast("File Already Exists");
  }

  const createDoc = api.document.createDoc.useMutation({ onSuccess: () => { void fetchDocs(); setLoaded(!loaded); }, onError: () => newFile || notify() });
  const updateDoc = api.document.updateDoc.useMutation({ onSuccess: () => { void fetchDocs(); } })
  const deleteDoc = api.document.deleteDoc.useMutation({ onSuccess: () => { void fetchDocs(); setDocId(5) }})

  function docHandler() {
    
    if (docName === viewDoc?.document_name)
      updateDoc.mutate({docName: docName, docContent: text});
    
    if (docName !== viewDoc?.document_name)
      createDoc.mutate({documentName: docName, documentContent: text});
      
     if (newFile) {
      createDoc.mutate({documentName: docName, documentContent: text});
      
      
    }
    setNewFile(false);
  }

  function deleteHandler() {
    deleteDoc.mutate({id: docId});
    setDoc_name("welcome.md")
  }

  useEffect(() => {

    if (!newFile) {
      setDocName(viewDoc?.document_name!);
      setText(viewDoc?.document_content!);
      setLoaded(true);

    }
    
  }, [viewDoc]);

  useEffect(() => {
    setDocName(doc_name);
    setText(doc_content);
    setLoaded(true);
  }, [newFile]);
  
  
  return (
    <div className={styles.container}>
      
      <nav className={styles.nav}>
        <div className={styles.left_nav}>
          <div className={styles.hamburger} style={{cursor: "pointer"}} onClick={() => setLeftNav(!leftNav)}><Image src={hamburger} width={38} height={18} alt="menu"/></div>
          <div className={styles.title}>MARKDOWN</div>
          <hr />
          <div className={styles.current_doc}>
            <Image src={doc} width={13} height={16} alt="doc"/>
            <div>
              <div className={styles.header}>Document Name</div>
              <input className={styles.text} value={docName} onChange={(e) => setDocName(e.target.value)}/>
            </div>
          </div>

        </div>
        {docName !== "welcome.md" && <div className={styles.right_nav}>
          <Image src={delete_icon} width={18} height={20} alt="delete" onClick={() => setMenuPopup(true)} />
          <div className={styles.save_button} onClick={docHandler}>
            <Image src={save_icon} width={18} height={20} alt="save" />
            <div className={styles.text}>Save Changes</div>
          </div>
        </div>}

        { menuPopup && <div className={styles.menuPopup}>
          <div className={styles.background} onClick={() => setMenuPopup(false)}></div>
          <div className={styles.popup}>
            <div className={styles.title}>Delete this document?</div>
            <div className={styles.text}>Are you sure you want to delete the "{docName}" document and its contents? This action cannot be reversed.</div>
            <div className={styles.save_button} onClick={deleteHandler}>Confirm & Delete</div>
          </div>
        </div>}
        
      </nav>
      <section>
        <div className={`${styles.markdown} ${previewOnly && styles.markdownHidden}`}>
          <div className={styles.title}>MARKDOWN</div>
          <div className={styles.markdown_field}>
            {<textarea value={text} onChange={e => setText(e.target.value)} className={styles.inner_markdown_field} />}

          </div>
        </div>
        <div className={styles.preview}>
          <div className={styles.title} style={{display: "flex", alignItems: "center", justifyContent: "space-between"}}><div>PREVIEW</div> <Image onClick={() => setPreviewOnly(!previewOnly)} src={show_preview} width={16} height={11} alt="prev" /></div>
          <div className={styles.preview_field}>
            <ReactMarkdown  className={styles.inner_preview_field}>{text}</ReactMarkdown>
          </div>
        </div>
      </section>
      
    </div>
  );
};

export default Home;


