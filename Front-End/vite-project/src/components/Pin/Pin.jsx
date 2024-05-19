import React, { useState} from 'react'
import '../Styles/pin_style.css';

// function upload_img(event, setPinImage){
//     if(event.target.files && event.target.files[0]){
//         if(/image\/*/.test(event.target.files[0].type)){
//             const reader = new FileReader();

//             reader.onload = function(){
//                 setPinImage(reader.result);
//             }
//             reader.readAsDataURL(event.target.files[0])
//         }
//     }
// }

function check_size(event){
    const image = event.target;

    image.classList.add('pin_max_width');

    if(
        image.getBoundingClientReact().width < image.parentElement.getBoundingClientReact().width ||
        image.getBoundingClientReact().height < image.parentElement.getBoundingClientReact().height 
    ){
        image.classList.remove('pin_max_width');
        image.classList.add('pin_max_height');
    }

    image.style.opacity = 1;
}

function pin(props) {
    // const[pinImage, setPinImage] = useState();
  return (
    // <div>
    //     {/* <input onChange={event=> upload_img(event, setPinImage)} type="file" name="picture" id="picture" value="" /> */}
        
        <div className={`pin_card card_${props.pinDetails.pin_size}`}>
            <div className="pin_title">{props.pinDetails.title}</div>
            <div className="pin_modal">
                <div className="modal_head">
                    <div className="save_card">Save</div>
                </div>
                <div className="modal_foot">
                    <div className="destination">
                        <div className="pint_mock_icon_container">
                            <img src="./images/arrow-up-right.svg" alt="destination" className="pint_mock_icon" />
                        </div>
                        <span>{props.pinDetails.destination}</span>
                    </div>
                    <div className="pint_mock_icon_container">
                        <img src="./images/upload.svg" alt="send" className="pint_mock_icon" />
                    </div>
                    <div className="pint_mock_icon_container">
                        <img src="./images/more-horizontal.svg" alt="edit" className="pint_mock_icon" />
                    </div>
                </div>
            </div>
            <div className="pin_image">
                <img onLoad={check_size} src={props.pinDetails.img_blob} alt="pin_image" />
            </div>
        </div>
    // </div>
  )
}

export default pin