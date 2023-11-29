import { toggleResumeModal } from "../../../features/resumeModal";
import { useDispatch } from "react-redux";
import styles from "./ResumeButtons.module.scss";
import { useState } from "react";
export const ResumeButtons = () => {
  const [file, setFile] = useState(null);
  const dispatch = useDispatch();

  const showResume = () => {
    dispatch(toggleResumeModal({ showModal: true }));
  };
  return (
    <div className={styles.resumeButtons}>
      <button onClick={() => showResume()}>View Resume</button>
      <a
        href="https://work-files-public.s3.us-east-1.amazonaws.com/Pallath%202023%20Resume.pdf?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQCyu5Hvp%2FNJjB50ONxnSuMDtkXROWzvK1u4OvnuBKn1SQIhAOMtJEsoBazIr4fGwFFleIq45FgRd7tKZ8l8f5ElBN1kKu0CCNj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQAxoMMTE2NTYwMjAxNjk4IgyVPoBg2Egkyp%2BZikQqwQJGR9GFxMntnrQv0yHtjWMdVEQBOAlh0vus%2FNlwL40cmbzBcj%2BlIWn44%2BBF8BnljDKUGubFyM%2BcRbN8gdWvZKifRu10Gb0JyGnKzsKCWNe9uoekfoYrF81OEfJ5jOuaP8QgkOaW6FEPUWfz%2BqxoF2u19py%2FS3a6h5yfpSeZAnsTsbotSp07caUfoL5bgqskd6jEuk6g0ktPrrxQutz6hCErnIeVs6bcJSPKY3eiIYTLIOuVUSUiRLcgmZoxmwgzIQs8vcT6wJkccA3zkiw%2BDQvvSCcZvopmsjYYto24kJm17VqW20kXs%2FPmc09SXNDrJ13CNHi%2BVv91%2F9dxIjjv5BYm%2BDYBWmC3FudOgw1%2FgH7Q%2FTfENmNJ4vEGaC2itLIFJ0%2FrPa51kL7a1jowtdeSzttw9qZMVbyNvtYAgQZiohxc6rkwzK2dqwY6sgITFasS5vAUnvD41ACeEkRWkZwuPPHwbYKAw%2Fnfc8SWrrYqXFk18zN6a4LU95nBODc91SWY31JR%2B0cT12euZp7LOHX2mjpvRCWYknPMt2v%2Fqlbabq0vEx5qM2DZj13MdY0CZE8pJhJ6qadaPK508qCtfTtVaro96DXIRKa9OswRcGoME0tmVSt9kE0xUP4pvVkiGANna%2FqdGxpvZMd3Lism72609fDOHwjABCdQbtXmVkI3BqfDF1tHNUzccI%2B0CXR3NIjWTkRNzATet2JracI0c62EHWR5VmtCV%2FIoD1R0dEHb1JUH0pU3OUawblvVzYmtoH72ed2PcMu9u30L%2B6m78xCvPPPjSObmiaOhsSFSBdCo83Ry1Snzv%2BGQ3SD7qFag4sclZ%2B9bFS8GcuSN5UC0MgY%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20231129T152646Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIARWI4HQ7RHGKR7UXA%2F20231129%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=579de3ee0e397af33a64b340f10b550e1c1f39c9ee93f2103495c7d3942cfc4d"
        download
        target="_blank"
      >
        <button>Download Resume</button>
      </a>
    </div>
  );
};
