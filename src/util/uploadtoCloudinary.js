const cloud_name = "dz6dtluvz"
const upload_preset = "App_lr"


export const uploadToCloudinary = async(pics,fileType) =>{
        if(pics && fileType){
            const data = new FormData();
            data.append("file",pics);
            data.append("upload_preset",upload_preset);
            data.append("cloud_name",cloud_name);
            
            const res = await fetch(`https://api.cloudinary.com/v1_1/${cloud_name}/${fileType}/upload`,{method:"post",body:data}
        )
            const fileDate = await res.json();
            console.log("Url ",fileDate.url);
            return fileDate.url;
        }else{
            console.log("Eror ____ ");
        }
}