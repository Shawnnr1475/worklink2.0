import "./addProfilePic.css"
import {useState, useRef} from "react"

const AddProfilePic = () => {

    const [profilepic,setProfilePic] = useState()
    const [imgURL,setImgURL] = useState("")
    const img_containerRef = useRef()

    //Show selected image
    function setImgPreview(){
        const pic = document.querySelector(".input-img").files[0]

        if (pic){
            const reader = new FileReader()

            reader.readAsDataURL(pic)
            reader.addEventListener("load", ()=>{
                setProfilePic(reader.result)
            })
        }
    }

    function AddImg(){
        img_containerRef.current.click()
      }
    
    return (
        <div className="AddProfilepic">
            <input name="profilepic" type="file" ref={img_containerRef} className="input-img" onChange={setImgPreview}></input>
            <div className="img-container" onClick={AddImg}>
                {profilepic? <img className="ppic-img" src={profilepic}></img>:
                <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                    <path d="M4 5h13v7h2V5c0-1.103-.897-2-2-2H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h8v-2H4V5z" fill ="white" /><path d="m8 11l-3 4h11l-4-6l-3 4z" fill ="white"/><path d="M19 14h-2v3h-3v2h3v3h2v-3h3v-2h-3z" fill ="white"/>
                </svg>}
            </div>
        </div>
    )
}

export default AddProfilePic