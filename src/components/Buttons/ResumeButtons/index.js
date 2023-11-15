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
        href="https://pallath-work-files.s3.us-east-1.amazonaws.com/Pallath%202023%20Resume.pdf?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLWVhc3QtMSJHMEUCIQCz53GKO7nLVyO3gGREHxj5TBYQTp6lpv8%2BB6IUBgBh%2BwIgHvtee%2BKTeyqTK%2BXvnWit8l6pRbckJ8F4dfOaEJPqH28q5AIIeBADGgwxMTY1NjAyMDE2OTgiDNKAhAfa7l0V5WgT6yrBArBtLIUdrLdGy9SMeZz%2B%2FTiYefJ6XB6DXouEOlgsF70IJZCtJ3x7DZ8Uzx0G4GEmziwI4f%2F4wDF2mEA9eoj%2Fz5fWIQt7h0JSo6H1s0s2Iswa1jMXsKusvVrYr7a9lXOV%2FNZSTK12u%2BudN7zVU9yIJGcESly3buLZetDTwH37dEB6Tx71Hrjn0Gkfju2HurkgT2ddVHIhdk0FcsIrwfN7x3UHSPCI2ReX2H1dq%2FrIP6w24PkD8if8rMi1PdH2j0qHZGLboCV3Y0runr282yrvs8y%2FXryR5M7%2BhT9bXBCyhY9gqRIXAcond%2FI2VOdLXa6Ipzb93x7ClSrK%2Bat%2FSoEkKZ6JT4luLGWxcBhw0I6%2BCD3YX8Ia05yqVCWpOcmfozhr6w8NhYMHeEFK%2FvxrvFVW5TuQXkSpykfNHdw7gMbx6BynXDCPutOqBjqzAjM8MRslgc7OT%2Bzwh%2ByxnfyaN0CVB%2FFCRAYgaWCeiqHiB7CdY%2Bf18n9GYkqHgAmJyT4UCDylbRKfhth6ZKSSxcp6YWLou9WVhCzff12qetDVRZ87I7Vf82hIbS7oo7RXKRw9b8HVKSzUcFem71Xb%2Bg0BxTUK7r6TcfPLZbyB4j8nEuIMiUWQhknam%2B%2FbZ4kXbKubVA5%2BVES65TPRi6itPI1lGiDv0KgQIZUlhVV9M1mycklSaI%2Bjdpu8vlUNiaZvziAt0yyGW6%2FL41cppBMbkqaXUcb3lMGt3P4ni1TgTm3lqlRIotLe4gwl5cjy91AU9iuE0g8xXV4ENwk3lbuLizGXiyShMKqih2Rc3tYxWq7npsi2xrB%2BTKNSYnH34EqEIbKxOQ7n1BoablyFc1Wtmh2ZvAo%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20231115T151732Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIARWI4HQ7RBNMJELN4%2F20231115%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=2505b08b6839eb761c47d60042c8806777139371a14c0a93fe6d1517306ae2a1"
        download
      >
        <button>Download Resume</button>
      </a>
    </div>
  );
};
