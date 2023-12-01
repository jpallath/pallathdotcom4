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
        href="https://work-files-public.s3.us-east-1.amazonaws.com/Pallath%202023%20Resume.pdf?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJGMEQCIGF8QFQVb4X77ovSyjjXGXYtnJvFlWf4opnJIqvT8fpdAiBFK2Hp2BpUr94Zn2sZVRHMo4bjnjitYkCQgHMa%2B39fgyrkAggaEAMaDDExNjU2MDIwMTY5OCIMpPNen7MGSGnVzJfZKsECnFoHn6cvCPuRjkYtRAzmu%2F7WYXPDb8eJv4q2FRzA1uF1jvGa9UUcQeeoYDyb8iAMcKyEpmbBW6yopg2T6NzuEGkAH3taiSXrClCletD61nuOpoFHjsaUxADn0ar9HlP2H5SxfX7XYBCGssosjqZk0MuzZcA7ZUV5idkFtYLR48kmtO1JXNypLpzafrpXTqYD1iULGyO9HsMI7NB0PqvKaBdGgz08oNB%2BEURdJY8lnW15FVYckIOg3QnY5YZ5lfrTbY3n%2Bq%2F1MH2rAovlxlGoDbJ138tgySGGHcnX6r5fnF8FHt%2Fg3ciJM1HCHEtcyYEvauAaL%2B%2FKjQm9E2HEpIU9RBnGVGDqoe05FIY3xRiTsRF88xPYDb3lnY9pd4n0YaArDAAvBsrkew5h7pHjv672LAVA0cmbOCpXnL1qY4HWGC3%2BMJycqKsGOrQC79rb57kefHiSEqkDEc5oMkEz0j6B5eWJ9T1ZJ%2B3SJY23i491XqrEWIleEsmw2U6qxmwlvihsT8cHPashPXCZBC660lKsh4203vbYAEgNoIWvWrVmiz56IdMLnUzm9sbRBoNfDVAfvXCNQWOujFEdwTMmn1piauOkB%2BcdjP8FvT17GMlozl6OHihqShWqyHpmkltOk%2Fvztj04s2hZQixfzRIiEABm1%2BMNxOLnCrI8taJwsrctxngf%2BOrblyY7oNpwWCKvaxdxjl%2BocV4bqKHSk7i5%2B1MdbuqiQOjekj7fChA%2B3PO4TT%2BP5MmTsJFJzNpVPXG%2BO0qhmatq96CVwF4q44NjBcPaIDpfCyOAzGfnIbEeRa6dgqI%2FmU10rJEIOc3hzGs9mD6v26CWNmIIK0YfjTMpL8A%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20231201T170320Z&X-Amz-SignedHeaders=host&X-Amz-Expires=299&X-Amz-Credential=ASIARWI4HQ7RNOWYQMPB%2F20231201%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=90bbbfcd98814be28d83cb438ff2c4254a5912b44945b1030b1ced2dbcfad4c2"
        download
        target="_blank"
      >
        <button>Download Resume</button>
      </a>
    </div>
  );
};
