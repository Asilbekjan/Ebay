// import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
// import { message, Upload } from 'antd';
// import { useState } from 'react';
// const getBase64 = (img, callback) => {
//     const reader = new FileReader();
//     reader.addEventListener('load', () => callback(reader.result));
//     reader.readAsDataURL(img);
// };
// const beforeUpload = (file) => {
//     const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
//     if (!isJpgOrPng) {
//         message.error('You can only upload JPG/PNG file!');
//     }
//     const isLt2M = file.size / 1024 / 1024 < 2;
//     if (!isLt2M) {
//         message.error('Image must smaller than 2MB!');
//     }
//     return isJpgOrPng && isLt2M;
// };
// const Salom = () => {
//     const [loading, setLoading] = useState(false);
//     const [imageUrl, setImageUrl] = useState();
//     const handleChange = (val) => {
//         console.log(val);
//     }


//     const uploadButton = (
//         <div>
//             {loading ? <LoadingOutlined /> : <PlusOutlined />}
//             <div
//                 style={{
//                     marginTop: 8,
//                 }}
//             >
//                 Upload
//             </div>
//         </div>
//     );
//     return (
//         <>
//             <Upload
//                 name="avatar"
//                 listType="picture-card"
//                 className="avatar-uploader"
//                 showUploadList={false}
//                 onChange={(a) => { handleChange(a) }}
//             >
//                 {imageUrl ? (
//                     <img
//                         src={imageUrl}
//                         alt="avatar"
//                         style={{
//                             width: '100%',
//                         }}
//                     />
//                 ) : (
//                     uploadButton
//                 )}
//             </Upload>
//         </>
//     );
// };
// export default Salom;




import React from 'react'

export default function salom() {
  return (
    <div>
      <input type='file' onChange={(a)}/>
    </div>
  )
}
