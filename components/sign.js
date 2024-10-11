import { TextField, Fade } from "@mui/material"
import styles from "./sign.module.css"
import { useState } from "react"

export default function sign(){
    const [idValue, setIdValue] = useState("");
    const [showPwField, setShowPwField] = useState(false);
    const handleIdChange = (event) => {
        const value = event.target.value;
        setIdValue(value);

        if (value.length > 5){setShowPwField(true);}
        else{ setShowPwField(false); }

    }

    return(
        <>
            <div className={styles.wrapper}>
                <h2 className={styles.head}>회원가입</h2>
                <TextField
                    id="id-required"
                    label="ID"
                    // placeholder="ID를 적으세요"
                    placeholder="6-12자 이내 영문, 숫자"
                    // helperText="6-12자 이내 영문, 숫자 사용가능"
                    value={idValue}
                    onChange={handleIdChange}
                    style={{ width: "250px" , marginBottom:"20px"}}
                    InputProps={{
                        style: { height: "54px" } 
                    }}
                ></TextField>
                {showPwField && (
                    <Fade in={showPwField} timeout={500}>
                        <TextField
                            id="password-required"
                            label="password"
                            type="password"
                            placeholder="password를 적으세요"
                            helperText="8-16자 이내 영문, 숫자, 특수문자 사용가능"
                            style={{ width: "250px" }}
                            InputProps={{
                                style: { height: "54px" } 
                            }}
                        ></TextField>
                    </Fade>
                )}
            </div>
        </>
    )
}