import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ImgUploadService {
  constructor() {}

  async uploadImg(ev: any) {
    //Defining our variables
    const UPLOAD_PRESET = 'social_n_shlomi'; //insert yours
    const CLOUD_NAME = 'duajg3ah1'; //insert yours
    const UPLOAD_URL = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`;
    const FORM_DATA = new FormData();
    //Building the request body
    FORM_DATA.append('file', ev.target.files[0]); // form data kind of key : file, add the file we get
    FORM_DATA.append('upload_preset', UPLOAD_PRESET); // add the upload_preset
    //Sending a post method request to Cloudinary`s API
    try {
      const res = await fetch(UPLOAD_URL, {
        // add the img to Cloudinary
        method: 'POST',
        body: FORM_DATA,
      });
      const res_1 = await res.json();
      return res_1;
    } catch (err) {
      console.error(err);
    }
  }

  uploadVid = async (ev: any) => {
    //Defining our variables
    const UPLOAD_PRESET = 'social_n_shlomi'; //insert yours
    const CLOUD_NAME = 'duajg3ah1'; //insert yours
    const UPLOAD_URL = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/video/upload`;
    const FORM_DATA = new FormData();
    //Building the request body
    FORM_DATA.append('file', ev.target.files[0]); // form data kind of key : file, add the file we get
    FORM_DATA.append('upload_preset', UPLOAD_PRESET); // add the upload_preset
    //Sending a post method request to Cloudinary`s API
    try {
      const res = await fetch(UPLOAD_URL, {
        // add the img to Cloudinary
        method: 'POST',
        body: FORM_DATA,
      });
      const res_1 = await res.json();
      return res_1;
    } catch (err) {
      return console.error(err);
    }
  };
}
